'use client';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// 토글 버튼
function ToggleButton({
    width,
    buttonSize,
    className,
    isSelectData,
    ...props
}: {
    width?: number;
    buttonSize?: number;
    className?: string;
    isSelectData: boolean;
} & ButtonProps) {
    const buttonWidth = width ? width : 80;
    const translateXValue = isSelectData
        ? 0
        : buttonWidth - 8 - (buttonSize ? buttonSize * 4 : 24);

    return (
        <button
            className={twMerge(
                'flex flex-row justify-start items-center w-1/4 h-fit rounded-3xl p-1',
                className
            )}
            style={{
                width: `${width}px`,
            }}
            {...props}
        >
            <div
                className={twMerge(
                    'w-6 h-6 bg-white rounded-full transition-transform duration-300'
                )}
                style={{
                    width: buttonSize && `${buttonSize * 4}px`,
                    height: buttonSize && `${buttonSize * 4}px`,
                    transform: `translateX(${translateXValue}px)`,
                    transition: 'transform 0.3s ease-in-out',
                }}
            ></div>
        </button>
    );
}
export default ToggleButton;
