'use client';
import Line from '@devShared/components/Line';
import React, { useEffect, useState } from 'react';
import HeaderTitle from '@dev/widgets/header/components/HeaderTitle';
import { twMerge } from 'tailwind-merge';
import HeaderForm from '@dev/widgets/header/components/HeaderForm';

const Header = () => {
    const [isForm, setIsForm] = useState<boolean>(false);
    const [hideForm, setHideForm] = useState<boolean>(false);
    const [label, setLabel] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 55) {
                setHideForm(true);
            } else {
                setHideForm(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={twMerge('flex flex-col w-full')}>
            <HeaderTitle
                hideForm={hideForm}
                label={label}
                isForm={isForm}
                setIsForm={setIsForm}
            />
            <Line className={'mt-[65px] bg-white'} />
            <HeaderForm
                hideForm={hideForm}
                isForm={isForm}
                setIsForm={setIsForm}
                setLabel={setLabel}
            />
        </div>
    );
};

export default Header;
