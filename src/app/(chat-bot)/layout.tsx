export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={
                'min-w-[390px] max-w-[390px]  min-h-screen flex flex-col items-center'
            }
        >
            {children}
        </div>
    );
}
