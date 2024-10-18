export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'max-w-[390px] min-h-screen flex-with-col'}>
            {children}
        </div>
    );
}
