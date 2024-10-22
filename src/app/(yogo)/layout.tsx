'use client';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@devWidgets/header/Header';
import Footer from '@devWidgets/footer/Footer';
import Chatbot from '@dev/shared/components/Chatbot';

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    const pathname = usePathname();

    const isSplashPage = pathname === '/splash';
    const isLandingPage = pathname === '/landing';

    return (
        <div
            className={
                'max-w-[500px] min-h-screen flex flex-col items-center relative'
            }
        >
            {!isSplashPage && !isLandingPage && <Header />}
            <main className="w-full flex-grow">{children}</main>
            {!isSplashPage && !isLandingPage && <Footer />}
            {!isSplashPage && <Chatbot />}
        </div>
    );
}
