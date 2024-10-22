'use client';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useThrottle } from '@devShared/hooks/useThrottle';
import api from '@devShared/utils/api';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // GFM 플러그인 임포트

const Page = () => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const [inputMessage, setInputMessage] = useState<string>(''); // 사용자가 입력한 메시지 상태
    const [messageLoading, setMessageLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<
        {
            type: 'user' | 'bot';
            message: string;
        }[]
    >([{ type: 'bot', message: '안녕하세요! 무엇을 도와드릴까요?' }]); // 대화 기록 (사용자와 봇)

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // 메시지 전송 및 챗봇 응답 처리 핸들러
    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return; // 빈 메시지 전송 방지
        setMessageLoading(true);

        // 사용자의 메시지를 대화 목록에 추가
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                type: 'user',
                message: inputMessage,
            },
        ]);
        // 서버에 사용자 메시지를 전송하여 챗봇 응답을 가져옴 (POST 요청)

        api.post<string>('/api/chat-bot/yogo', { message: inputMessage })
            .then((res) => {
                const text = res.data ?? '응답 에러';

                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        type: 'bot',
                        message: text,
                    },
                ]);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setMessageLoading(false);
            });

        setInputMessage(''); // 입력 필드 초기화
    };
    const { state, event } = useThrottle({
        action: handleSendMessage,
        dependence: [inputMessage],
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-fit bg-gray-100 border">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {/* 대화 내용 */}
                <div className={'h-[600px] overflow-auto no-scrollbar'}>
                    <div className="flex flex-col gap-2 mb-4 ">
                        {messages.map((value, index) => {
                            const isUser = value.type === 'user';
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

                {/* 입력창 */}
                <div className="flex items-center">
                    <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="메시지를 입력하세요..."
                        className="h-[50px] flex-grow p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none overflow-y-auto"
                    />
                    <button
                        onClick={event}
                        className="ml-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
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
