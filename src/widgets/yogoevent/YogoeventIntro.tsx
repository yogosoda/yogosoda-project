'use client';

import HighlitedSpan from '@dev/shared/components/HighlitedSpan';
import image from '@devShared/images/yogoevent/yogoevent_intro.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

// 상단 첫번쨰 배너 컴포넌트
function YogoeventIntro() {
    return (
        <section className={twMerge('flex-col-center py-5 gap-5')}>
            <Image src={image} alt="소개 이미지" />
            <div className={twMerge('flex-col-center gap-1')}>
                <p className="text-lg font-neo-rg">요금제 고민 끝!</p>
                <p className="font-neo-hv">
                    <HighlitedSpan className="text-[22px]">
                        내게 맞는 요금제를 만들어 보세요!
                    </HighlitedSpan>
                </p>
                <p className="font-neo-eb mt-2">
                    <span className="text-red-500">12개월간 추가 데이터</span>{' '}
                    증정!
                </p>
            </div>
        </section>
    );
}
export default YogoeventIntro;
