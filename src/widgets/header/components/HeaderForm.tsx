'use client';
import { twMerge } from 'tailwind-merge';
import { PATH_INFO } from '@devShared/constants/header/path';
import Button from '@devShared/components/Button';
import Line from '@devShared/components/Line';
import Image from 'next/image';
import arrowUp from '@devShared/images/arrow_up.svg';
import arrowDown from '@devShared/images/arrow_down.svg';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import HeaderCategory from '@dev/widgets/header/components/HeaderCategory';

const HeaderForm = ({ hideForm, isForm, setIsForm, setLabel }: FormProps) => {
    const pathName = usePathname();

    const container = useRef<HTMLDivElement>(null);
    const categoryList = useRef<Record<string, HTMLDivElement>>({});

    useEffect(() => {
        if (!(container.current && categoryList.current[pathName])) {
            return;
        }

        const activeCategory = categoryList.current[pathName];

        container.current.scrollTo({
            left: activeCategory.offsetLeft,
            behavior: 'smooth',
        });

        const dataSetLabel = activeCategory.dataset.label ?? '';

        setLabel(dataSetLabel);
    }, [pathName, isForm]);

    return (
        <div
            className={twMerge(
                ' bg-white',
                hideForm && isForm && 'fixed top-[66px]'
            )}
        >
            <div className={'flex-with-row'}>
                <div
                    ref={container}
                    className={twMerge(
                        `min-h-[53px] flex-1 flex-with-row gap-x-2 items-center
                         px-[20px] py-[10px]`,
                        isForm
                            ? 'flex-wrap gap-y-4'
                            : 'overflow-x-auto no-scrollbar'
                    )}
                >
                    {Object.entries(PATH_INFO).map(([key, value], index) => {
                        const isActive = pathName === value.path;

                        return (
                            <HeaderCategory
                                ref={(e) => {
                                    if (e) {
                                        categoryList.current[value.path] = e;
                                    }
                                }}
                                key={`${key}_${index}`}
                                path={value.path}
                                label={value.label}
                                isActive={isActive}
                            />
                        );
                    })}
                </div>
                {hideForm || (
                    <Button
                        className={'min-h-full flex-with-row gap-2'}
                        onClick={() => {
                            setIsForm((prev) => !prev);
                        }}
                    >
                        <Line
                            className={'w-[1px]'}
                            style={{ minHeight: '70%' }}
                        />
                        <Image
                            src={isForm ? arrowUp : arrowDown}
                            alt={'on/off'}
                            width={13}
                            height={13}
                        />
                    </Button>
                )}
            </div>
            <Line />
        </div>
    );
};

export default HeaderForm;

type FormProps = {
    hideForm: boolean;
    isForm: boolean;
    setIsForm: Dispatch<SetStateAction<boolean>>;
    setLabel: Dispatch<SetStateAction<string>>;
};
