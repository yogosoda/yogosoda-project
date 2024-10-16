import Image from 'next/image';
import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';

export default function MembershipBenefitsTitle() {
    return (
        <div className="flex flex-col items-center pt-10 mb-5 gap-3">
            <div className="flex items-center gap-1">
                <Image
                    src={yogoMembershipLogo}
                    alt="Yogo Membership Logo"
                    width={50}
                    height={50}
                />
                <div className="relative">
                    <p className="font-bold text-[25px] relative z-10">
                        멤버십 혜택
                    </p>
                    <div className="w-[115px] h-[10px] bg-[#9BFFF5] absolute bottom-[5px] z-0"></div>
                </div>
            </div>
            <p className="text-[15px]">
                <span className="font-bold text-[15px]">혜택 제공 기간 : </span>
                24년 9월 1일(일) ~ 25년 6월 30일(월)
            </p>
            <p className="text-[12px] text-[#898783]">
                * 영화 예매권 1+1 제공 달달혜택 : ~ 24년 12월 31일까지 제공
            </p>
        </div>
    );
}
