import { twMerge } from 'tailwind-merge';

export default function RegistrationButton({ children, className }: BtnProps) {
    return (
        <>
            <button
                className={twMerge(
                    'w-80 h-11 rounded-lg bg-black text-white flex items-center gap-2 justify-center',
                    className
                )}
            >
                {children}
            </button>
        </>
    );
}

type BtnProps = React.ComponentPropsWithoutRef<'button'>;
