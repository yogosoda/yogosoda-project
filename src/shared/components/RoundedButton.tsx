import { twMerge } from 'tailwind-merge';

// 원형 버튼
function RoundedButton({
    className,
    clickHandler,
}: {
    className?: string;
    clickHandler: () => void;
}) {
    return (
        <div
            className={twMerge(
                'w-10 h-10 bg-white border-[3px] border-[#0F807B] rounded-full bg-no-repeat bg-center',
                className
            )}
            onClick={clickHandler}
        ></div>
    );
}
export default RoundedButton;
