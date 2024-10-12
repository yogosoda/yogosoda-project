import React, { ReactNode } from 'react';
import Header from '@devWidgets/header/Header';
import Footer from '@devWidgets/footer/Footer';

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div
            className={
                'max-w-[390px] max-w-[390px]  min-h-screen flex flex-col items-center relative'
            }
        >
            <Header />
            {children}
            <Footer />
        </div>
    );
}
