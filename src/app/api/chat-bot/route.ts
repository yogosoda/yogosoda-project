import { GoogleGenerativeAI } from '@google/generative-ai';
import api from '@devShared/utils/api';
import { PlanMeta } from '@dev/entities/plans.types';

const genAI = new GoogleGenerativeAI(
    process.env.NEXT_PUBLIC_OPENAI_API_KEY ?? ''
);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

export const POST = async (req: Request) => {
    try {
        // 요청 본문에서 메시지를 추출
        const body = await req.json();
        const { message } = body;

        if (!message) {
            return new Response(
                JSON.stringify({ error: 'Message is required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
        let yogoPlans: PlanMeta[] | undefined;
        let planDescription: PlanMeta | undefined;

        try {
            const plansResponse = await api.get<PlanMeta[]>('/api/plans/yogo');
            yogoPlans = plansResponse?.data;

            const planDescriptionResponse = await api.get<PlanMeta>(
                '/api/plans/description'
            );
            planDescription = planDescriptionResponse?.data;
        } catch (e) {
            console.error(e);
        }

        let prompt = `너는 지금 친절하고 전문적인 KT 통신사의 요금제 고객 상담원이야. 
                        고객은 "${message}"라고 물었어. 고객이 물어본 질문의 의도를 정확하게 파악하고, 필요한 경우 최신 요금제, 서비스 정책, 또는 기타 관련된 정보를 제공해줘. 
                        고객이 이해하기 쉽게 친절한 말투로 설명해줘. 불필요한 질문을 하지 말고, 답변은 명확하고 간결하게 끝내줘.`;

        if (yogoPlans && planDescription) {
            prompt = `또한 ${prompt} 제공하는 최신 요금제 데이터를 분석하여, 해당 요금제에 맞는 상담을 진행해줘. 
                        최신 요금제 데이터는 다음과 같아: 
                        - 요금제 정보: ${JSON.stringify(yogoPlans)}.
                        - 각 데이터 필드 설명: ${JSON.stringify(planDescription)}.
                        
                        필요한 경우 추가 정보도 안내해줘. 하지만 중복된 질문을 던지지 말고, 정보가 명확하게 제공될 수 있도록 노력해줘.`;
        }

        // Google Generative AI 모델에 메시지 전달
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // AI 응답을 반환
        return new Response(text, {
            headers: { 'Content-Type': 'text/plan' },
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {
                headers: { 'Content-Type': 'application/json' },
                status: 500,
            }
        );
    }
};
