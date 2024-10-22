'use client';

import { useState, useRef, useEffect, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// 토글 버튼
function ToggleButton({
    className,
    isSelectData,
    ...props
}: {
    className?: string;
    isSelectData: boolean;
} & ButtonProps) {
    const [buttonWidth, setButtonWidth] = useState<number>(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // 버튼의 width를 감지하여 상태에 저장
    useEffect(() => {
        if (buttonRef.current) {
            setButtonWidth(buttonRef.current.offsetWidth);
        }
    }, []);

    const translateXValue = isSelectData ? 0 : buttonWidth - 32;

    return (
        <button
            ref={buttonRef}
            className={twMerge(
                'flex flex-row justify-start items-center w-1/4 h-fit rounded-3xl p-1',
                className
            )}
            {...props}
        >
            <div
                className={twMerge(
                    'w-6 h-6 bg-white rounded-full transition-transform duration-300'
                )}
                style={{
                    transform: `translateX(${translateXValue}px)`,
                    transition: 'transform 0.3s ease-in-out',
                }}
            ></div>
        </button>
    );
}
export default ToggleButton;
