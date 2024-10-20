'use client';

import Image from 'next/image';
import splashArrowRight from '@dev/shared/images/splash/splash_arrow_right.png';
import { useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';

export default function SplashSwiper() {
    const router = useRouter();

    const handlers = useSwipeable({
        onSwipedRight: () => router.push('/direct'),
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className="w-[260px] flex items-center gap-3 mx-auto mt-[40px]"
        >
            <Image
                src={splashArrowRight}
                alt="splashArrowRight"
                width={40}
                height={20}
                className="h-[10px]"
            ></Image>
            <div>
                <span className="text-[#898783] text-sm">밀어서 보기</span>
            </div>
        </div>
    );
}
