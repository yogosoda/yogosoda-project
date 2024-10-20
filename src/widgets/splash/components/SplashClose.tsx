import Link from 'next/link';

export default function SplashClose() {
    return (
        <Link href="/direct">
            <button className="text-sm float-right p-[20px]">닫기</button>
        </Link>
    );
}
