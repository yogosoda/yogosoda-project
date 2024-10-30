import { MessageType } from '@devfeatures/chatBot/chatting/api';
import ChatBotMessage from '@devWidgets/chatBot/botMessage/ChatBotMessage';
import React from 'react';
import Message from '@devWidgets/chatBot/message/Message';

const Chatting = ({ messages }: ChattingProps) => {
    return messages.map((message, index) => {
        const isUser = message.role === 'user';

        return (
            <div key={index} className="w-full mt-7">
                {isUser ? (
                    <Message text={message.message} />
                ) : (
                    <ChatBotMessage text={message.message} />
                )}
            </div>
        );
    });
};
export default Chatting;

type ChattingProps = {
    messages: MessageType[];
};
