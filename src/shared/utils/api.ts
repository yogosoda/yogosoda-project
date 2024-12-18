import crypto from 'crypto';
import { RESPONSE_STATUS_KR } from '@devShared/constants/httpStatus';
import { CustomError } from '@devShared/utils/error';

const apiService = () => {
    // 환경 변수에서 API의 기본 URL을 설정하고, 없다면 빈 문자열로 설정
    const baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
    // 각 요청별 마지막 호출 시간을 기록하여 스로틀링을 관리하는 객체
    const isProcessingMap: { [key: string]: boolean } = {};

    // 쿼리 스트링을 생성하는 메서드
    // params: 쿼리 스트링으로 변환할 객체
    // parentKey: 중첩된 객체의 키를 처리하기 위한 부모 키 (디폴트는 빈 문자열)
    const buildQueryString = (
        params: Record<string, unknown>,
        parentKey?: string
    ): string => {
        return Object.keys(params)
            .map((key) => {
                const value = params[key];
                const fullKey: string = parentKey ? `${parentKey}.${key}` : key; // 중첩된 키 처리

                if (Array.isArray(value)) {
                    // 값이 배열일 경우, 각 값을 쿼리 스트링으로 변환
                    return value.map((item) => `${fullKey}=${item}`).join('&');
                } else if (value && typeof value === 'object') {
                    // 값이 객체일 경우 재귀적으로 처리
                    return buildQueryString(
                        value as Record<string, unknown>,
                        fullKey
                    );
                } else {
                    // 기본적으로 값과 키를 쿼리 스트링 형식으로 변환
                    return `${fullKey}=${value}`;
                }
            })
            .join('&'); // 모든 결과를 &로 연결하여 최종 쿼리 스트링 반환
    };

    // 요청 키를 생성하는 메서드
    // 요청의 URI, 쿼리 파라미터, body를 결합하여 고유한 요청 키를 생성
    const createRequestKey = (
        uri: string,
        params?: Record<string, unknown>,
        body?: unknown
    ): string => {
        const queryString = params ? buildQueryString(params) : ''; // 쿼리 스트링 변환
        const bodyString = body ? JSON.stringify(body) : ''; // body 데이터를 JSON 문자열로 변환
        return crypto
            .createHash('sha256')
            .update(`${uri}?${queryString}&body=${bodyString}`)
            .digest('hex'); // URI, 쿼리 스트링, body를 조합하여 고유한 요청 키 생성
    };

    // 스로틀링을 적용하여 요청을 처리하는 메서드
    const throttleRequest = async <T = unknown>({
        uri,
        options,
    }: {
        uri: string;
        options: RequestInitTypes;
    }): Promise<{
        status: number;
        msg: string;
        data?: T;
    }> => {
        const requestKey = createRequestKey(uri, options.params, options.body); // 요청에 대한 고유한 키 생성

        // 동일한 요청이 이미 처리 중이면 스로틀링 에러 발생
        if (isProcessingMap[requestKey]) {
            // 요청 중복 시 'THROTTLED-ERROR' 에러를 발생시켜 처리 제한
            throw new CustomError(
                'THROTTLED-ERROR',
                `The request to "${uri}" is being throttled due to too many requests in a short period. Please wait before trying again.`
            );
        }

        // 요청을 처리 중으로 표시하여 중복 요청을 방지
        isProcessingMap[requestKey] = true;

        // 실제 요청 처리 메서드 호출
        return request<T>({ uri, options, requestKey });
    };

    // 실제 요청을 처리하는 메서드 (GET, POST, PUT, DELETE 모두에서 호출됨)
    const request = async <T = unknown>({
        uri,
        options,
        requestKey,
    }: {
        uri: string;
        options: RequestInitTypes;
        requestKey: string;
    }): Promise<{
        status: number;
        msg: string;
        data?: T;
    }> => {
        try {
            let url = `${uri}`; // baseUrl과 uri 결합
            if (!(uri.startsWith('http://') || uri.startsWith('https://'))) {
                url = `${baseUrl}${uri}`;
            }

            // options에 params가 있으면 쿼리 스트링으로 변환 후 URL에 추가
            if (options?.params) {
                url += `?${buildQueryString(options.params)}`;
                delete options.params; // fetch에 params가 필요 없으므로 삭제
            }

            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json', // 기본적으로 JSON 형태로 PUT 요청
                    ...(options?.headers || {}),
                },
            }); // fetch API로 요청 전송

            const code = response.status as keyof typeof RESPONSE_STATUS_KR; // 응답 상태 코드 추출

            if (!response.ok) {
                throw new CustomError(code, RESPONSE_STATUS_KR[code]);
                // 응답이 성공하지 않았을 경우, 에러 발생 (에러 코드와 메시지를 함께 배출)
            }

            const contentType = response.headers.get('Content-Type'); // 응답의 콘텐츠 타입 확인
            let data: T;

            // 콘텐츠 타입에 따라 응답 데이터를 처리
            if (contentType?.includes('application/json')) {
                data = (await response.json()) as T; // JSON 응답 처리
            } else if (contentType?.includes('text/')) {
                data = (await response.text()) as unknown as T; // 텍스트 응답 처리
            } else if (contentType?.includes('multipart/form-data')) {
                data = (await response.formData()) as unknown as T; // 폼 데이터 응답 처리
            } else if (contentType?.includes('application/octet-stream')) {
                data = (await response.arrayBuffer()) as unknown as T; // 바이너리 데이터 응답 처리
            } else if (
                contentType?.includes('image/') ||
                contentType?.includes('application/pdf')
            ) {
                data = (await response.blob()) as unknown as T; // 이미지나 PDF 등의 Blob 데이터 응답 처리
            } else {
                data = (await response.text()) as unknown as T; // 기타 응답 처리
            }

            return {
                status: code, // 응답 상태 코드
                msg: RESPONSE_STATUS_KR[code], // 상태 코드에 따른 메시지 반환
                data, // 응답 데이터
            };
        } catch (e) {
            throw new CustomError('REQUEST-ERROR', (e as Error).message);
        } finally {
            // 요청이 완료되거나 실패하면 요청 상태를 해제하여 다음 요청을 허용
            isProcessingMap[requestKey] = false;
        }
    };

    // GET 메서드: 쿼리 스트링으로 전달되는 데이터를 처리하여 스로틀링 적용 후 GET 요청 실행

    const get = async <T = unknown>(
        uri: string,
        options?: OptionsParameterTypes
    ) => {
        return throttleRequest<T>({
            uri,
            options: { ...options, method: 'GET' },
        });
    };

    // POST 메서드: body 데이터를 처리하여 스로틀링 적용 후 POST 요청 실행

    const post = async <T = unknown>(
        uri: string,
        body?: BodyParameterTypes,
        options?: OptionsParameterTypes
    ) => {
        return throttleRequest<T>({
            uri,
            options: {
                ...options,
                method: 'POST',
                body: body ? JSON.stringify(body) : undefined, // body 데이터를 JSON 형식으로 변환
            },
        });
    };

    // PUT 메서드: body 데이터를 처리하여 스로틀링 적용 후 PUT 요청 실행

    const put = async <T = unknown>(
        uri: string,
        body?: BodyParameterTypes,
        options?: OptionsParameterTypes
    ) => {
        return throttleRequest<T>({
            uri,
            options: {
                ...options,
                method: 'PUT',
                body: body ? JSON.stringify(body) : undefined, // body 데이터를 JSON 형식으로 변환
            },
        });
    };

    // DELETE 메서드: 스로틀링 적용 후 DELETE 요청 실행
    const remove = async <T = unknown>(
        uri: string,
        options?: OptionsParameterTypes
    ) => {
        return throttleRequest<T>({
            uri,
            options: { ...options, method: 'DELETE' },
        });
    };

    return { get, post, put, remove };
};

// RequestInitTypes: RequestInit 타입을 기반으로 쿼리 파라미터와 body 데이터를 추가한 타입 정의
type RequestInitTypes = {
    params?: Record<string, unknown>; // 쿼리 파라미터
    body?: unknown; // body 데이터
} & RequestInit; // 기본 RequestInit 타입을 포함

// OptionsParameterTypes: GET, DELETE 등의 요청에 사용될 수 있는 쿼리 파라미터 타입 정의
type OptionsParameterTypes = {
    params?: Record<string, unknown>; // 쿼리 스트링으로 변환될 수 있는 파라미터
} & Omit<RequestInit, 'method'>; // method 속성을 제외한 기본 RequestInit 타입

// BodyParameterTypes: 직렬화 가능한 body 타입 정의
type BodyTypes = string | number | boolean | Record<string, unknown>;
type BodyParameterTypes = BodyTypes | BodyTypes[] | null; // 원시 값 또는 객체, 배열, null 허용

const api = apiService();

export default api; // ApiService의 인스턴스를 기본으로 내보냄
