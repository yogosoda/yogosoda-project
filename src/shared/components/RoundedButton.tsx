'use client';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// 원형 버튼
// 스타일 속성은 className으로 받습니다
// 이벤트 속성은 props로 전달 받습니다
function RoundedButton({
    className,
    ...props
}: {
    className?: string;
} & ButtonProps) {
    return (
        <button
            className={twMerge(
                'rounded-full bg-no-repeat bg-center',
                className
            )}
            {...props}
        ></button>
    );
}
export default RoundedButton;
