import image from '@devShared/images/image 25.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

function Yogoevent_Intro() {
    return (
        <section className={twMerge('flexCol py-5 gap-5')}>
            <Image src={image} alt="소개 이미지" />
            <div className={twMerge('flexCol gap-1')}>
                <p className="text-lg font-neo-rg">요금제 고민 끝!</p>
                <p className="relative text-[22px] font-neo-hv px-0.5">
                    <div className="absolute bottom-0 inset-x-0 h-3 bg-[#b3fdf5] z-0"></div>
                    <span className="relative z-10 my-10">
                        내게 맞는 요금제를 만들어 보세요!
                    </span>
                </p>
                <p className="font-neo-eb mt-2">
                    <span className="text-red-500">12개월간 추가 데이터</span>{' '}
                    증정!
                </p>
            </div>
        </section>
    );
}
export default Yogoevent_Intro;
