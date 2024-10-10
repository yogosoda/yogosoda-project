import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import RightArrow from '../../shared/svg/chevron-right-solid.svg';

export default function RegistrationButton({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <>
            <button
                className={twMerge(
                    'w-80 h-11 rounded-lg flex items-center gap-2',
                    className
                )}
            >
                {children}
                <Image src={RightArrow} width={10} height={10} alt="svg" />
            </button>
        </>
    );
}
