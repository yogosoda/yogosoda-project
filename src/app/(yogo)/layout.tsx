'use client';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@devWidgets/header/Header';
import Footer from '@devWidgets/footer/Footer';

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    const pathname = usePathname();

    const isSplashPage = pathname === '/splash';
    return (
        <div
            className={
                'max-w-[390px]  min-h-screen flex flex-col items-center relative'
            }
        >
            {!isSplashPage && <Header />}
            <main className="relative">{children}</main>
            {!isSplashPage && <Footer />}
        </div>
    );
}
