'use client';

import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

// 원형 버튼
// 스타일 속성은 className으로 받습니다
// 이벤트 속성은 props로 전달 받습니다
function RoundedButton({
    className,
    src,
    ...props
}: {
    className?: string;
    src: string;
} & ButtonProps) {
    return (
        <button
            className={twMerge('relative rounded-full', className)}
            {...props}
        >
            <Image
                src={src}
                alt="img"
                width={100}
                height={100}
                className="absolute top-1/2 left-1/2 w-2/3 h-2/3 -translate-x-1/2 -translate-y-1/2"
            ></Image>
        </button>
    );
}
export default RoundedButton;
