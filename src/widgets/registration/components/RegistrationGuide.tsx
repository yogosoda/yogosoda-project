import Image from 'next/image';
import RegistrationImage from '@devShared/images/registration.png';
import RegistrationButton from '@devShared/components/RegistrationButton';
import Divider from '@dev/shared/components/Divider';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as Notice } from '@devShared/svg/circle-exclamation-solid.svg';
import { ReactComponent as RightArrow } from '@devShared/svg/chevron-right-solid.svg';

export default function RegistrationGuide() {
    return (
        <section>
            <article className="flex justify-center items-center gap-2">
                <div className="flex flex-col gap-2">
                    <p className="text-teal-500 text-base font-bold">
                        요고 요금제 변경
                    </p>
                    <div className="flex flex-col text-black text-xl font-bold">
                        <p>자급제폰 KT고객님</p>
                        <p>알뜰한 요금제</p>
                        <p>요고로 변경하세요.</p>
                    </div>
                </div>
                <Image
                    src={RegistrationImage}
                    width={180}
                    height={180}
                    alt="image"
                />
            </article>

            <RegistrationButton className={twMerge('text-sm font-bold')}>
                <div className="w-full flex justify-between items-center">
                    <span className="mx-auto  pl-8">
                        핸드폰 등록 및 요금제 변경하기
                    </span>
                    <div className="mr-4">
                        <RightArrow width={14} height={14} fill="white" />
                    </div>
                </div>
            </RegistrationButton>

            <Divider className="mt-8" />

            <article className="flex flex-col justify-center gap-2 pt-6 pr-20">
                <p className="font-bold text-lg">셀프 개통 가능 시간</p>
                <p className="text-sm">09시 ~ 20시(평일,토요일)</p>
                <div className="flex items-center gap-2 text-xs">
                    <Notice />
                    <p>일요일, 신정/설/추석 당일 개통은 불가합니다.</p>
                </div>
            </article>
        </section>
    );
}
