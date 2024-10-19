/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { PlanMeta } from '@dev/entities/plans.types';
import {
    collection,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    where,
} from '@firebase/firestore';
import { CustomError } from '@devShared/utils/error';
import { firestore } from '@dev/firebase';

export const POST = async (req: Request) => {
    try {
        const model = await createChatBot();
        const body = await req.json();
        const { message, messages } = body;

        if (!message) {
            return new Response(
                JSON.stringify({ error: 'Message is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
        const history = messages?.map(
            (chat: { role: string; message: string }) => {
                return {
                    role: chat.role,
                    parts: [{ text: chat.message }],
                };
            }
        );
        const chat = model.startChat({
            history,
        });

        const result = await chat.sendMessage(message);

        const call = result.response?.functionCalls()?.[0];
        if (call) {
            const apiResponse = await functions?.[call.name](call.args);
            console.warn('apiResponse', apiResponse);
            await chat.sendMessage([
                {
                    functionResponse: {
                        name: call.name,
                        response: apiResponse,
                    },
                },
            ]);
        }

        const response = result.response;
        const text = response.text();

        return new Response(text, {
            headers: { 'Content-Type': 'text/plan' },
            status: 200,
        });
    } catch (error) {
        console.error(error);
        if (error instanceof CustomError) {
            return new Response(
                JSON.stringify({
                    error: `code: ${error.code} ${error.message}`,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    status: 500,
                }
            );
        } else if (error instanceof Error) {
            return new Response(
                JSON.stringify({
                    error: error.message,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    status: 500,
                }
            );
        } else {
            return new Response(
                JSON.stringify({
                    error: 'Unknown error occurred',
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    status: 500,
                }
            );
        }
    }
};

const createChatBot = async (): Promise<GenerativeModel> => {
    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ''
    );

    let prompt = `너는 지금 친절하고 전문적인 KT 통신사의 요금제 상담원인 YOGO 상담사야. 
                            현재 고객이 사용 중인 요금제 또는 타 통신사의 요금제 정보를 바탕으로 KT 최신 요금제를 비교해줘. 
                            요금, 데이터 제공량, 추가 혜택 등을 기준으로 명확하고 간결하게 설명하며, 고객의 요구에 가장 적합한 요금제를 추천해줘. 
                            고객이 쉽게 이해할 수 있도록 친절한 말투로 답변하되, 불필요한 질문 없이 핵심 정보만 전달해줘
                            모든 요금제 조회 및 통신사 조회는 제공되는 함수를 통해서 검색 해야합니다.
                            추가적으로, 일반 통신사(KT, SKT, LGU+)를 선택한 경우에는 꼭 fetchTelecomPlans 함수를 사용하여 해당 통신사의 요금제를 즉시 가져와 고객에게 제시해야 합니다.
                            반면, 알뜰폰을 선택한 경우, 먼저 사용하는 통신망(KT, SKT, LGU+)을 물어본 후, fetchMVNOCarriers 함수를 통해 해당 통신망을 사용하는 알뜰폰 통신사 리스트를 가져와 고객이 선택할 수 있도록 합니다.
                            고객이 알뜰폰 통신사를 선택한 후에는 fetchMVNOPlans 함수를 사용하여 알뜰폰 요금제를 가져와 비교합니다.
                            요금제 리스트를 가져온 후 고객이 현재 사용 중인 요금제를 파악해야 합니다. 
                            고객의 현재 요금제의 가격, 데이터 제공량, 추가 혜택 등을 비교하여 가장 적합한 KT의 요금제를 추천해야 합니다.
                            1. 고객에게 통신사 선택지를 제공해주세요: [KT, SKT, LGU+, 알뜰폰] 
                            2. 고객이 KT, SKT, LGU+ 중 하나를 선택한 경우, 즉시 해당 fetchTelecomPlans 함수를 통해 통신사의 요금제 리스트를 가져와 비교하세요.
                            3. 만약 고객이 '알뜰폰'을 선택했다면, 사용하는 통신망을 물어봐주세요: [KT망, SKT망, LGU+망] 
                            4. 통신망 선택 후, 해당 통신망을 사용하는 알뜰폰 통신사 리스트를 가져와 고객이 선택할 수 있도록 다시 물어보세요.
                            5. 고객이 알뜰폰 통신사를 선택했다면, 해당 알뜰폰 통신사의 요금제 리스트를 가져와 고객의 요금제와 비교하세요. 
                            6. 현재 통신사 정보를 알기 전까지, 제공된 선택지 외의 질문이 있다면 다시 질문하세요.
                            설명:
                                1. fetchTelecomPlans:
                                    매개변수: telecom은 통신사 이름 (KT, SKT, LGU+)을 받습니다.
                                    역할: 고객이 KT, SKT, LGU+ 중 하나를 선택했을 때, 해당 통신사의 요금제 리스트를 firestore에서 쿼리해 가져옵니다. 쿼리에서 mvno가 선택된 통신사와 일치하는 요금제를 찾아 정렬(fee 기준)한 후 반환합니다.
                                
                                2. fetchMVNOCarriers:
                                    매개변수: mno는 통신망 이름 (KT망, SKT망, LGU+망)을 받습니다.
                                    역할: 고객이 알뜰폰을 선택한 후, 사용하는 통신망을 입력하면 firestore에서 해당 통신망을 사용하는 알뜰폰 통신사 리스트를 반환합니다. 중복 통신사는 제거하고 반환합니다.
                                
                                3. fetchMVNOPlans:
                                    매개변수: mno(주 통신사), id(알뜰폰 통신사 ID)를 받습니다.
                                    역할: 고객이 알뜰폰 통신사를 선택한 후, firestore에서 해당 통신사의 요금제를 조회하여 가져옵니다.
                            `;

    try {
        const yogoPlans = await getYogoPlans();
        const planDescription = await getPlansKeyDescription();

        if (yogoPlans && planDescription) {
            prompt = `${prompt} 
                        또한 제공하는 최신 요금제 데이터를 분석하여 상담을 진행해줘. 
                        최신 요금제 데이터는 다음과 같아: 
                        - 요금제 정보: ${JSON.stringify(yogoPlans)}.
                        - 각 데이터 필드 설명: ${JSON.stringify(planDescription)}.
                        
                        필요한 경우 추가 정보도 안내해줘. 하지만 중복된 질문을 던지지 말고, 정보가 명확하게 제공될 수 있도록 노력해줘.`;
        }
    } catch (e) {
        if (e instanceof CustomError) {
            throw new CustomError(e.code, e.message);
        } else {
            throw new CustomError('UNKNOWN-ERROR', 'Unknown error occurred');
        }
    }

    try {
        return genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            systemInstruction: prompt,
            tools: [
                {
                    functionDeclarations: [
                        fetchTelecomPlansFunctionDeclaration,
                        fetchMVNOCarriersFunctionDeclaration,
                        fetchMVNOPlansFunctionDeclaration,
                    ],
                },
            ],
        });
    } catch (e) {
        console.error('e', e);
        if (e instanceof Error) {
            throw new CustomError('GEMINI-ERROR', e.message);
        } else {
            throw new CustomError('UNKNOWN-ERROR', 'Unknown error occurred');
        }
    }
};

const getYogoPlans = async (): Promise<PlanMeta[]> => {
    try {
        const q = query(
            collection(firestore, 'plans'),
            where('mvno', '==', 'KT'),
            orderBy('fee', 'asc')
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length > 0) {
            return querySnapshot.docs.map((doc) => doc.data() as PlanMeta);
        } else {
            throw new CustomError(
                'FIREBASE-ERROR',
                'No plan list information found'
            );
        }
    } catch (e) {
        if (e instanceof Error) {
            throw new CustomError('FIREBASE-ERROR', e.message);
        } else {
            throw new CustomError('UNKNOWN-ERROR', 'Unknown error occurred');
        }
    }
};

const getPlansKeyDescription = async (): Promise<PlanMeta> => {
    try {
        const docRef = doc(
            firestore,
            'plan_key_description',
            'tMqTOCswa2dD7Xqa7uCD'
        );

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as PlanMeta;
        } else {
            throw new CustomError(
                'FIREBASE-ERROR',
                'No plan data key information found'
            );
        }
    } catch (e) {
        if (e instanceof Error) {
            throw new CustomError('FIREBASE-ERROR', e.message);
        } else {
            throw new CustomError('UNKNOWN-ERROR', 'Unknown error occurred');
        }
    }
};

const fetchTelecomPlansFunctionDeclaration = {
    name: 'fetchTelecomPlans',
    parameters: {
        type: 'OBJECT',
        description:
            '고객이 선택한 KT, SKT, LGU+ 중 하나의 요금제를 가져옵니다.',
        properties: {
            telecom: {
                type: 'STRING',
                description: '통신사 이름 (예: KT, SKT, LGU+)',
            },
        },
        required: ['telecom'],
    },
};

const fetchMVNOCarriersFunctionDeclaration = {
    name: 'fetchMVNOCarriers',
    parameters: {
        type: 'OBJECT',
        description: '특정 통신망의 알뜰폰 통신사 목록을 가져옵니다.',
        properties: {
            mno: {
                type: 'STRING',
                description: '통신망 이름 (예: KT망, SKT망, LGU+망)',
            },
        },
        required: ['mno'],
    },
};

const fetchMVNOPlansFunctionDeclaration = {
    name: 'fetchMVNOPlans',
    parameters: {
        type: 'OBJECT',
        description: '선택한 알뜰폰 통신사의 요금제를 가져옵니다.',
        properties: {
            mno: {
                type: 'STRING',
                description: '주 통신사 (예: KT, SKT, LGU+)',
            },
            id: {
                type: 'STRING',
                description: '알뜰폰 통신사 ID (예: LG Hello, U+알뜰모바일)',
            },
        },
        required: ['mno', 'id'],
    },
};

type FunctionMap = {
    [key: string]: (_args: any) => any;
};

const functions: FunctionMap = {
    fetchTelecomPlans: async ({ telecom }: { telecom: string }) => {
        const q = query(
            collection(firestore, 'plans'),
            where('mvno', '==', telecom),
            orderBy('fee', 'asc')
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => doc.data() as PlanMeta);
    },
    fetchMVNOCarriers: async ({ mno }: { mno: string }) => {
        const q = query(
            collection(firestore, 'plans'),
            where('mvno', 'not-in', ['lgu', 'KT', 'SKT']),
            where('mno', '==', mno.replace('망', '')),
            orderBy('fee', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const res: string[] = querySnapshot.docs.map(
            (doc) => (doc.data() as PlanMeta).mvno
        );

        // 중복 제거 후 결과 반환
        const data: string[] = Array.from(new Set(res));
        return data;
    },
    fetchMVNOPlans: async ({ mno, id }: { mno: string; id: string }) => {
        const q = query(
            collection(firestore, 'plans'),
            where('mno', '==', mno.replace('망', '')),
            where('mvno', '==', id),
            orderBy('fee', 'asc')
        );

        const querySnapshot = await getDocs(q);
        const data: PlanMeta[] = querySnapshot.docs.map(
            (doc) => doc.data() as PlanMeta
        );

        return data;
    },
};
