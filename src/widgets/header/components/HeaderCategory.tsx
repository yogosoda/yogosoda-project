'use client';
import { forwardRef, memo, useRef } from 'react';
import PageMove from '@devShared/components/PageMove';
import { twMerge } from 'tailwind-merge';

const HeaderCategory = forwardRef<HTMLDivElement, CategoryProps>(
    ({ isActive, path, label }, ref) => {
        const categoryInternalRef = useRef<HTMLDivElement>(null);
        const categoryRef = ref ?? categoryInternalRef;

        return (
            <div ref={categoryRef} data-label={label}>
                <PageMove
                    path={path}
                    label={label}
                    className={twMerge(
                        'rounded-[40px]',
                        isActive && 'border-[#01A69F] text-[#01A69F]'
                    )}
                />
            </div>
        );
    }
);

export default memo(HeaderCategory);

type CategoryProps = {
    isActive: boolean;
    path: string;
    label: string;
};
