'use client';
import yogo from '@devShared/images/chatBot/yogo.svg';
import send from '@devShared/images/chatBot/send.svg';
import React, { useEffect, useRef, useState } from 'react';
import { PlanMeta } from '@dev/entities/plans.types';
import GetUserPlan from '@devfeatures/chatBot/getUserPlan/ui/GetUserPlan';
import { MessageType } from '@devfeatures/chatBot/chatting/api';
import { UseSendMessage } from '@devfeatures/chatBot/chatting/model';
import { StartMessage } from '@devShared/constants/chatBot/message';
import ChatBotMessage from '@devWidgets/chatBot/botMessage/ChatBotMessage';
import Chatting from '@devWidgets/chatBot/chatting/Chatting';

const Comparison = () => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [inputMessage, setInputMessage] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const [userTelecom, setUserTelecom] = useState<string | null>(null);
    const [userPlan, setUserPlan] = useState<PlanMeta[] | null>(null);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const [canChatting, setCanChatting] = useState<boolean>(false);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const { event, state } = UseSendMessage({
        messages,
        setMessages,
        inputMessage,
        setInputMessage,
        userPlan,
        userTelecom,
        modelType: 'comparison',
    });

    useEffect(() => {
        if (userTelecom === null || userPlan === null || loading) {
            return;
        }
        setCanChatting(true);
    }, [userTelecom, userPlan, loading]);

    return (
        <div className={'max-h-screen block overflow-hidden'}>
            <header className={'w-full h-[5rem] item-center'}>
                <img src={yogo} alt={'요고봇'} width={100} height={50} />
            </header>
            <main
                className={
                    'block border-t-2 overflow-auto no-scrollbar p-[1.5rem]'
                }
                style={{
                    height: 'calc(100vh - 10.5rem)',
                }}
            >
                <GetUserPlan
                    setLoading={setLoading}
                    setUserTelecom={setUserTelecom}
                    setUserPlan={setUserPlan}
                />
                {loading && <ChatBotMessage text={''} loading={loading} />}
                {canChatting && <ChatBotMessage text={StartMessage} />}
                {canChatting && <Chatting messages={messages} />}
                {state && <ChatBotMessage text={''} loading={state} />}
                <div ref={messagesEndRef} />
            </main>
            <footer
                className={
                    'w-full h-[5.5rem] flex-with-row item-center gap-4 p-4'
                }
            >
                <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (state) {
                                return;
                            }
                            event();
                        }
                    }}
                    {...(canChatting
                        ? {
                              disabled: state,
                          }
                        : { disabled: true })}
                    placeholder="메시지를 입력하세요..."
                    className="h-[3rem] flex-1 p-3 border-none rounded-full focus:outline-none resize-none overflow-y-auto bg-[#DDD] disabled:opacity-50 font-neo-rg text[#7C7C7C]"
                />
                <button
                    onClick={event}
                    className="h-[3rem] w-[3rem] rounded-full bg-[#DDD] disabled:opacity-50 relative"
                    {...(canChatting
                        ? {
                              disabled: state,
                          }
                        : { disabled: true })}
                >
                    <img
                        src={send}
                        alt={'전송'}
                        className={
                            'w-[2.2rem] absolute top-[55%] left-[45%] transform -translate-x-1/2 -translate-y-1/2'
                        }
                    />
                </button>
            </footer>
        </div>
    );
};

export default Comparison;
