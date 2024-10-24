import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { twMerge } from 'tailwind-merge';
import { getKoreanTime } from '@devShared/utils/date';
import { memo } from 'react';

const Message = ({
    type = 'user',
    time,
    text,
    loading = false,
    className,
}: MessageProps) => {
    const isUser = type === 'user';
    const messagePosition = isUser ? 'justify-end' : 'justify-start';
    const messageStyle = isUser
        ? 'rounded-tl-3xl  bg-[#30C8B2] text-[#FFFFFF] '
        : 'rounded-tr-3xl  bg-[#DDDDDD]  text-[#181818]';
    return (
        <div
            className={twMerge(
                'max-w-full flex-with-row items-end  gap-2',
                messagePosition
            )}
        >
            {time && isUser && (
                <div className={'text-[0.5rem] font-neo-rg text-[#818181]'}>
                    {getKoreanTime(time)}
                </div>
            )}
            {loading ? (
                <div
                    className={twMerge(
                        'w-[80%] rounded-b-3xl p-3 animate-pulse',
                        messagePosition,
                        messageStyle,
                        className
                    )}
                ></div>
            ) : (
                <ReactMarkdown
                    className={twMerge(
                        'max-w-[80%] rounded-b-3xl p-3 font-neo-rg text-[0.8rem] ',
                        messagePosition,
                        messageStyle,
                        className
                    )}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        p: ({ ...props }) => (
                            <p className="w-full break-words" {...props} />
                        ),
                        table: ({ ...props }) => (
                            <table
                                className="table-auto w-full border-collapse"
                                {...props}
                            />
                        ),
                        th: ({ ...props }) => (
                            <th
                                className="border px-2 py-1 text-left"
                                {...props}
                            />
                        ),
                        td: ({ ...props }) => (
                            <td className="border px-2 py-1" {...props} />
                        ),
                    }}
                >
                    {text}
                </ReactMarkdown>
            )}

            {time && !isUser && (
                <div className={'text-[0.5rem] font-neo-rg text-[#818181]'}>
                    {getKoreanTime(time)}
                </div>
            )}
        </div>
    );
};

export default memo(Message);

type MessageProps = {
    type?: 'user' | 'model';
    time?: string;
    text: string;
    className?: string;
    loading?: boolean;
};
