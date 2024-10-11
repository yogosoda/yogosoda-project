import { twMerge } from 'tailwind-merge';

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
