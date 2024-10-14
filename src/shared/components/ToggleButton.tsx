import { twMerge } from 'tailwind-merge';

function ToggleButton({
    className,
    value,
    setValue,
}: {
    className?: string;
    value: boolean;
    setValue: (_value: boolean | ((_prev: boolean) => boolean)) => void;
}) {
    return (
        <div
            className={twMerge('flex w-1/4 h-fit rounded-3xl p-1', className)}
            onClick={() => setValue((_value) => !_value)}
        >
            <div
                className={twMerge(
                    'w-6 h-6 bg-white rounded-full transition-transform duration-300',
                    value ? 'translate-x-0' : 'translate-x-[41px]'
                )}
            ></div>
        </div>
    );
}
export default ToggleButton;
