import Button from '@devShared/components/Button';
import { Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

const ChatBotQuestionButtonList = ({
    value,
    setValue,
    options = [],
}: ChatBotQuestionButtonListProps) => {
    return (
        <div className={'flex-with-row item-center gap-4 flex-wrap'}>
            {options.map((option, index) => {
                const isSelected =
                    option === value
                        ? 'bg-[#1A97D6] text-white border-[#365DFD]'
                        : '';
                return (
                    <Button
                        key={index}
                        className={twMerge(
                            "'min-w-[4rem] font-neo-rg text-[#181818] text-[0.8rem] rounded-[1rem] border border-[#626262] bg-[#F5F5F5] px-3 py-2 box-border' disabled:opacity-50",
                            isSelected
                        )}
                        disabled={!['', null].includes(value)}
                        onClick={() => {
                            setValue(option);
                        }}
                    >
                        {option}
                    </Button>
                );
            })}
        </div>
    );
};

export default ChatBotQuestionButtonList;

type ChatBotQuestionButtonListProps = {
    value: string | null;
    setValue: Dispatch<SetStateAction<string | null>>;
    options: string[];
};
