import { useAsyncThrottle } from '@devShared/hooks/useAsyncThrottle';
import {
    MessageType,
    postSendMessage,
} from '@devfeatures/chatBot/chatting/api';
import { Dispatch, SetStateAction } from 'react';
import { PlanMeta } from '@dev/entities/plans.types';

export const UseSendMessage = ({
    messages,
    setMessages,
    inputMessage,
    setInputMessage,
    modelType = 'recommend',
    userPlan,
    userTelecom,
}: ChattingProps) => {
    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;
        setInputMessage('');

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                role: 'user',
                message: inputMessage,
            },
        ]);

        try {
            const chatAnswer = await postSendMessage({
                messages,
                inputMessage,
                modelType,
                ...(userPlan && userTelecom
                    ? {
                          userPlans: {
                              telecom: userTelecom,
                              plans: userPlan,
                          },
                      }
                    : {}),
            });
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    role: 'model',
                    message: chatAnswer,
                },
            ]);
        } catch (e) {
            console.error(e);
        }
    };

    const { state, event } = useAsyncThrottle({
        action: handleSendMessage,
        dependence: [messages, inputMessage],
    });

    return { state, event };
};

type ChattingProps = {
    messages: MessageType[];
    setMessages: Dispatch<SetStateAction<MessageType[]>>;
    inputMessage: string;
    setInputMessage: Dispatch<SetStateAction<string>>;
    modelType?: 'recommend' | 'comparison';
    userPlan?: PlanMeta[] | null;
    userTelecom?: string | null;
};
