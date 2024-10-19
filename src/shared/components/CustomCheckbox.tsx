import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from 'react';
import check_gray from '@devShared/images/yogoevent/check_gray-300.svg';
import check_white from '@devShared/images/yogoevent/check_white.svg';

type CheckboxProps = ComponentPropsWithoutRef<'input'>;

function CustomCheckbox({
    isSelected,
    className,
    ...props
}: { isSelected: boolean; className?: string } & CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={twMerge(
                'appearance-none w-4 h-4 border-[1px] border-gray-500 rounded',
                'bg-no-repeat bg-center',
                className
            )}
            style={{
                backgroundImage: isSelected
                    ? `url(${check_white})`
                    : `url(${check_gray})`,
            }}
            {...props}
        ></input>
    );
}
export default CustomCheckbox;
