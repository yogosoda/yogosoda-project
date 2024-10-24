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
import { Prompt } from '@devShared/constants/chatBot/propmt';

export const POST = async (req: Request) => {
    try {
        const body = await req.json();

        const { message, messages, modelType, userPlans } = body;

        const model = await createChatBot({ modelType, userPlans });

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

const createChatBot = async ({
    modelType,
    userPlans,
}: {
    modelType: string;
    userPlans?: {
        telecom: string;
        plans: PlanMeta[];
    };
}): Promise<GenerativeModel> => {
    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ''
    );

    let prompt = `너는 지금 친절하고 전문적인 KT 통신사의 요금제 상담원인 YOGO 상담사야.
                          ${Prompt[modelType] ?? ''} `;
    try {
        if (modelType === 'comparison' && userPlans) {
            prompt = `${prompt} 
                        현재 고객은 통신사 ${userPlans.telecom}를 사용중입니다.
                        또한, 고객이 현재 사용 중인 통신사의 최신 요금제 리스트를 확인해야합니다. 
                        고객이 현재 사용 중인 통신사의 최신 요금제 리스트는 다음과 같습니다:
                        - 요금제 리스트 정보: ${JSON.stringify(userPlans)}.`;
        }
        const yogoPlans = await getYogoPlans();
        const planDescription = await getPlansKeyDescription();

        if (yogoPlans && planDescription) {
            prompt = `${prompt} 
                        또한 KT에서 제공하는 아래의 최신 요금제 데이터를 분석하여 상담을 진행해줘. 
                        최신 요금제 정보는 다음과 같습니다:
                        - 요금제 정보: ${JSON.stringify(yogoPlans)}.
                       
                        각 요금제 데이터 필드에 대한 설명은 다음과 같습니다:
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
            model: 'gemini-1.5-flash',
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
