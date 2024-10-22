'use client';
import Image from 'next/image';
import logo from '@devShared/images/logo.svg';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Line from '@devShared/components/Line';
import arrowUp from '@devShared/images/arrow_up.svg';
import arrowDown from '@devShared/images/arrow_down.svg';
import Button from '@dev/shared/components/Button';

const HeaderTitle = ({ label, isForm, setIsForm, hideForm }: TitleProps) => {
    useEffect(() => {
        return () => {
            setIsForm(false);
        };
    }, [hideForm]);

    return (
        <div className={`w-full bg-white fixed z-40`}>
            <div
                className={twMerge(
                    'flex flex-row items-center gap-[6px] px-[20px] h-[65px] box-border',
                    hideForm && 'justify-between'
                )}
            >
                {hideForm || (
                    <Image src={logo} alt={'logo'} width={28} height={23} />
                )}
                <h1
                    className={twMerge(
                        hideForm ? 'text-[17px]' : 'text-[16px] '
                    )}
                >
                    <strong>{hideForm ? label : 'Shop'}</strong>
                </h1>
                {hideForm && (
                    <Button
                        className={'min-h-full flex-with-row gap-2'}
                        onClick={() => {
                            setIsForm((prev) => !prev);
                        }}
                    >
                        <Image
                            src={isForm ? arrowUp : arrowDown}
                            alt={'on/off'}
                            width={13}
                            height={13}
                        />
                    </Button>
                )}
            </div>
            <Line className={`min-w-full`} />
        </div>
    );
};

export default HeaderTitle;

type TitleProps = {
    label?: string;
    hideForm: boolean;
    isForm: boolean;
    setIsForm: Dispatch<SetStateAction<boolean>>;
};
