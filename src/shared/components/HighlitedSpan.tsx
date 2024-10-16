'use client';

import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type SpanProps = ComponentPropsWithoutRef<'span'>;

// 하이라이트 처리가 된 텍스트
// 텍스트 속성은 className으로 받습니다
// 이번트 속성은 props로 전달 받습니다
function HighlitedSpan({
    className,
    children,
    ...props
}: {
    className?: string;
    children: React.ReactNode;
} & SpanProps) {
    return (
        <span
            className={twMerge('relative z-10 my-10', className)}
            style={{
                background:
                    'linear-gradient(to bottom, transparent 50%, #b3fdf5 50%)',
            }}
            {...props}
        >
            {children}
        </span>
    );
}
export default HighlitedSpan;
