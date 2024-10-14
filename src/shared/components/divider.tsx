import { twMerge } from 'tailwind-merge';

export default function Divider({ className }: { className?: string }) {
    return (
        <>
            <div
                className={twMerge(
                    'w-[20rem] h-px border border-neutral-400 ',
                    className
                )}
            ></div>
        </>
    );
}
