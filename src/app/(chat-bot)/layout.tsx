export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'max-w-full h-[100vh] flex-with-col'}>{children}</div>
    );
}
