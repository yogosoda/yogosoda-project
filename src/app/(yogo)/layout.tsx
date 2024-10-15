import React, { ReactNode } from 'react';

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div
            className={
                'max-w-[390px] min-h-screen flex flex-col items-center relative'
            }
        >
            {children}
        </div>
    );
}
