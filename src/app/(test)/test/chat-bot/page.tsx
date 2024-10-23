'use client';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import api from '@devShared/utils/api';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAsyncThrottle } from '@devShared/hooks/useAsyncThrottle';

const Page = () => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const [inputMessage, setInputMessage] = useState<string>('');
    const [messageLoading, setMessageLoading] = useState<boolean>(false);

    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;
        setInputMessage('');

        setMessageLoading(true);

        // 사용자의 메시지를 대화 목록에 추가
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                role: 'user',
                message: inputMessage,
            },
        ]);
        let text: string =
            '죄송합니다. 현재 요청에 대한 응답 처리 중 문제가 발생했습니다.';
        try {
            const res = await api.post<string>('/api/chat-bot', {
                message: inputMessage,
                messages,
                prompt: 'recommend',
            });
            if (res?.data) {
                text = res.data;
            }
        } catch (e) {
            console.error(e);
        } finally {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    role: 'model',
                    message: text,
                },
            ]);
            setMessageLoading(false);
        }
    };
    const { state, event } = useAsyncThrottle({
        action: handleSendMessage,
        dependence: [messages, inputMessage],
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-fit bg-gray-100 border">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {/* 대화 내용 */}
                <div className={'h-[600px] overflow-auto no-scrollbar'}>
                    <div className="flex flex-col gap-2 mb-4 ">
                        {messages.map((value, index) => {
                            const isUser = value.role === 'user';
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col gap-1 rounded-[10px] pb-2"
                                >
                                    <div
                                        className={twMerge(
                                            'flex flex-col gap-[2px]',
                                            isUser ? 'items-end' : 'items-start'
                                        )}
                                    >
                                        <pre>
                                            <strong>
                                                {isUser ? '사용자' : '챗봇'}
                                            </strong>
                                        </pre>
                                        <pre
                                            className={
                                                'whitespace-pre-wrap word-break max-w-full'
                                            }
                                        >
                                            <ReactMarkdown
                                                remarkPlugins={[remarkGfm]}
                                            >
                                                {value.message}
                                            </ReactMarkdown>
                                        </pre>
                                    </div>
                                </div>
                            );
                        })}
                        {messageLoading && (
                            <div className="flex flex-col gap-1 rounded-[10px] pb-2">
                                <div
                                    className={
                                        'flex flex-col gap-[2px] items-start'
                                    }
                                >
                                    <pre>
                                        <strong>챗봇</strong>
                                    </pre>
                                    <pre
                                        className={
                                            'min-w-full animate-pulse h-[30px] bg-gray-300 rounded-full'
                                        }
                                    ></pre>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <div className="flex items-center">
                    <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault(); // 기본 Enter 동작 막기
                                if (state) {
                                    return;
                                }
                                event();
                            }
                        }}
                        disabled={state}
                        placeholder="메시지를 입력하세요..."
                        className="h-[50px] flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none overflow-y-auto"
                    />
                    <button
                        onClick={event}
                        className="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                        disabled={state}
                    >
                        전송
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Page;

type MessageType = {
    role: 'user' | 'model';
    message: string;
};
