import { ReactNode } from 'react';
import Header from '@dev/widgets/Header';
import Footer from '@dev/widgets/Footer';

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div
            className={
                'min-w-[390px] max-w-[390px]  min-h-screen flex flex-col items-center'
            }
        >
            <Header />

            {children}
            <Footer />
        </div>
    );
}
