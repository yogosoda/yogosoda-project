import api from '@devShared/utils/api';
import { CustomError } from '@devShared/utils/error';
import { PlanMeta } from '@dev/entities/plans.types';

export const postSendMessage = async ({
    messages,
    inputMessage,
    modelType,
    userPlans,
}: PostSendMessageType) => {
    try {
        const response = await api.post<string>('/api/chat-bot', {
            message: inputMessage,
            messages,
            modelType,
            ...(userPlans ? { userPlans } : {}),
        });
        const data = response?.data;

        if (!data) {
            return `죄송합니다, 요청하신 작업을 처리하는 도중 문제가 발생했습니다. 😔
                    다시 시도해 주세요. 문제가 지속되면, 고객센터에 문의해 주세요.`;
        }

        return data;
    } catch (e) {
        const error = e as CustomError;
        console.error(`error ${error.code} : ${error.message}`);
        return `죄송합니다, 요청하신 작업을 처리하는 도중 문제가 발생했습니다. 😔
                    다시 시도해 주세요. 문제가 지속되면, 고객센터에 문의해 주세요.`;
    }
};

export type MessageType = {
    role: 'user' | 'model';
    message: string;
};
export type PostSendMessageType = {
    messages: MessageType[];
    inputMessage: string;
    modelType: 'recommend' | 'comparison';
    userPlans?: UserPlansType;
};

type UserPlansType = {
    telecom: string;
    plans: PlanMeta[];
};
