import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';
import Image from 'next/image';

export default function SplashTitle() {
    return (
        <div className="w-[100%] h-[844px] bg-[#FEFEF6] pb-[10px]">
            <div className="w-fit h-[300px] text-xl mx-auto pt-[130px]">
                <p>
                    <span className="text-[#01A59B] font-bold">약정</span> 부담
                    없이,
                </p>
                <p>
                    <span className="text-[#01A59B] font-bold">요금</span>도
                    저렴하고,
                </p>
                <p>
                    <span className="text-[#01A59B] font-bold">혜택</span>이 더
                    많은 <span className="font-cafe">다이렉트 요금제</span>
                </p>
                <Image
                    src={yogoMembershipLogo}
                    alt="Yogo Membership Logo"
                    width={100}
                    height={100}
                    className="mx-[-10px] my-[10px]"
                />
                <div className="flex gap-1">
                    <div className="relative">
                        <p className="font-bold text-xl relative z-10">지금</p>
                        <div className="w-[35px] h-[10px] bg-[#9BFFF5] absolute bottom-[5px] z-0"></div>
                    </div>
                    <p className="text-xl">만나보세요 :)</p>
                </div>
            </div>
        </div>
    );
}