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
                            추가적으로, 고객이 현재 사용 중인 요금제를 파악해야 합니다. 
                            고객의 현재 요금제의 가격, 데이터 제공량, 추가 혜택 등을 비교하여 가장 적합한 KT의 요금제를 추천해야 합니다.
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
