import { KTPlansType } from '@dev/entities/kt_plans.type';
import { useState } from 'react';

interface BoundaryType {
    minimum: number;
    maximum: number;
}
//필터 기능을 사용 할 수 있게 하는 커스텀 훅입니다
//인자로는 필터 기능을 사용하고 싶은 배열을 받습니다
export const useFilter = (array: KTPlansType[]) => {
    //배열의 총 길이를 나타냅니다
    const length = array.length;

    //필터링을 시작할 최초 경계값을 지정합니다.
    // minimum: 최솟값 / maximum: 최댓값
    const [initBoundaryData, setInitBoundaryData] = useState<BoundaryType>({
        minimum: 0,
        maximum: 9999,
    });

    // 필터링에 필요한 요소들의 인덱스를 가져옵니다
    // minimum: 0 / maximum: 배열의 맨 끝 값의 인덱스
    const [filterBoundaryIdx, setFilterBoundaryIdx] = useState<BoundaryType>({
        minimum: 0,
        maximum: length - 1,
    });

    // 최초 경계값을 지정합니다
    const setInitBoundary = (filterType: string) => {
        // 배열의 첫값과 끝값을 가져옵니다
        const firstItem = array[0];
        const lastItem = array[length - 1];

        // 요금과 데이터의 최솟값을 찾습니다
        const minimumData = Number(
            firstItem?.data.total_data.replace(/[^0-9]/g, '')
        );
        const maximumData = lastItem?.data.total_data.includes('무제한')
            ? Number.MAX_SAFE_INTEGER
            : Number(lastItem?.data.total_data.replace(/[^0-9]/g, ''));

        const minimumFee = Number(
            firstItem?.monthly_fee.replace(/[^0-9]/g, '')
        );
        const maximumFee = Number(lastItem?.monthly_fee.replace(/[^0-9]/g, ''));

        //필터 타입에 따라 요금과 데이터를 각각 저장합니다
        const res =
            filterType === 'fee'
                ? {
                      minimum: minimumFee,
                      maximum: maximumFee,
                  }
                : {
                      minimum: minimumData,
                      maximum: maximumData,
                  };

        setInitBoundaryData(res);
    };

    // 최초 경계값을 가져오는 함수입니다
    const getInitBoundary = () => {
        return initBoundaryData;
    };

    // 필터 그래프 위치에 따라 필터링 인덱스를 설정합니다
    // min: 최소 인덱스 / max: 최대 인덱스
    const setFilterBoundary = (startPoint: number, endPoint: number) => {
        setFilterBoundaryIdx({
            minimum: Math.floor(startPoint / 22 < 0 ? 0 : startPoint / 22),
            maximum: Math.floor(endPoint / 22 > 12 ? 12 : endPoint / 22),
        });
    };

    // 필터링 인덱스를 가져오는 함수입니다
    const getFilterBoundary = () => {
        return filterBoundaryIdx;
    };

    //필터링 된 배열을 가져오는 함수입니다
    const getFilteredData = () => {
        const minimum = filterBoundaryIdx.minimum;
        const maximum = filterBoundaryIdx.maximum;
        return array.filter(
            (_, idx: number) => idx >= minimum && idx <= maximum
        );
    };

    return {
        setInitBoundary,
        getInitBoundary,
        setFilterBoundary,
        getFilterBoundary,
        getFilteredData,
    };
};
