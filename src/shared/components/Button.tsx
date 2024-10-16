import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ className, children, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge(
                'text-white text-xl item-center px-2.5',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

type ButtonProps = ComponentPropsWithoutRef<'button'>;
