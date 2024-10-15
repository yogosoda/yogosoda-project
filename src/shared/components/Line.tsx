import React from 'react';
import { twMerge } from 'tailwind-merge';

const Line = ({ className, ...rest }: LineProps) => {
    return (
        <div
            className={twMerge('w-full h-[1px] bg-[#CCCCCC]', className)}
            {...rest}
        />
    );
};

export default Line;

type LineProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;
