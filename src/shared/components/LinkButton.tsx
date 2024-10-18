import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const LinkButton = ({
    children,
    link,
    className,
}: {
    children: React.ReactNode;
    link: string;
    className?: string;
}) => {
    return (
        <Link
            href={link}
            className={twMerge(
                'flex-row-center items-center w-full h-fit rounded-md bg-black text-white py-2',
                className
            )}
        >
            {children}
        </Link>
    );
};
