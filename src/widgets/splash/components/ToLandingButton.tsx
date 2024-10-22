import Image from 'next/image';
import splashArrowRight from '@dev/shared/images/splash/splash_arrow_right.png';
import Link from 'next/link';

export default function ToLandingButton() {
    return (
        <div className="w-[260px] flex justify-end items-center gap-3 mx-auto mt-[30px]">
            <Link href="/landing">
                <Image
                    src={splashArrowRight}
                    alt="splashArrowRight"
                    width={50}
                    height={50}
                ></Image>
            </Link>
        </div>
    );
}
