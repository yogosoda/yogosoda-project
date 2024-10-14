import { twMerge } from 'tailwind-merge';

export const TextBox = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={twMerge(
                'w-full h-fit gap-2 border border-transparent border-b-gray-300 py-4',
                className
            )}
        >
            {children}
        </div>
    );
};
