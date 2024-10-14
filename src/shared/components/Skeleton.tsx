import React from 'react';
import { twMerge } from 'tailwind-merge';

const Skeleton = ({ width, height, className, display }: SkeletonProps) => {
    return (
        <div
            className={twMerge(
                'shimmer-effect w-full h-full rounded-lg overflow-hidden',
                className
            )}
            style={{
                display: display ? 'flex' : 'none',
                width: width,
                height: height,
            }}
        />
    );
};

export default Skeleton;

type SkeletonProps = {
    width?: number | string;
    height?: number | string;
    className?: string;
    display?: boolean;
};
