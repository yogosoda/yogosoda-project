'use client';
import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const PageMove = ({
    className,
    path,
    label,
    ...props
}: PageMoveButtonProps) => {
    return (
        <Link
            href={path}
            className={twMerge(
                `w-fit bg-white text-[13px] border pl-[10px] pr-[10px] pt-[7px] pb-[7px] whitespace-nowrap`,
                className
            )}
            {...props}
        >
            {label}
        </Link>
    );
};

export default PageMove;

type PageMoveButtonProps = Omit<
    ComponentPropsWithoutRef<'a'>,
    'style' | 'children' | 'onClick' | 'onDoubleClick' | 'href'
> & {
    path: string;
    label: string;
};
