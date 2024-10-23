import Message from '@devWidgets/message/Message';
import ChatBotMessage from '@devWidgets/chatBotMessage/ChatBotMessage';
import { MessageType } from '@devfeatures/chatBot/chatting/api';

const Chatting = ({ messages }: ChattingProps) => {
    return messages.map((message, index) => {
        const isUser = message.role === 'user';

        return (
            <div key={index} className="w-full">
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
