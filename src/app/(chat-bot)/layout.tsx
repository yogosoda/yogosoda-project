export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={'max-w-[390px]  min-h-screen flex flex-col items-center'}
        >
            {children}
        </div>
    );
}
