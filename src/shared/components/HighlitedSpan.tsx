import { twMerge } from 'tailwind-merge';

// 하이라이트 처리가 된 텍스트
// 텍스트 속성은 className으로 받습니다
function HighlitedSpan({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <span
            className={twMerge('relative z-10 my-10', className)}
            style={{
                background:
                    'linear-gradient(to bottom, transparent 50%, #b3fdf5 50%)',
            }}
        >
            {children}
        </span>
    );
}
export default HighlitedSpan;
