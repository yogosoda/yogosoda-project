import bot from '@devShared/images/chatBot/yogo-chat-bot.svg';
import React, { memo } from 'react';
import Message from '@devWidgets/chatBot/message/Message';

const ChatBotMessage = ({
    text,
    time,
    loading = false,
}: ChatBotMessageProps) => {
    return (
        <div className={'flex-with-row justify-items-start gap-2.5 max-w-full'}>
            <div
                className={
                    'item-center rounded-full w-[3.5rem] h-[3.5rem] bg-[#B3DAD7]'
                }
            >
                <img src={bot} alt={'챗봇'} className={'w-3rem] h-[3rem]'} />
            </div>
            <div
                className={'font-[1rem] font-neo-bd flex-with-col gap-2 flex-1'}
            >
                <div>요고봇</div>
                <Message
                    text={text}
                    type={'model'}
                    time={time}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default memo(ChatBotMessage);

type ChatBotMessageProps = {
    text: string;
    loading?: boolean;
    time?: string;
};
