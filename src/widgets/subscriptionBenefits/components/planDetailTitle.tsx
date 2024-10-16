import Image from 'next/image';
import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';

export default function PlanDetailTitle() {
    return (
        <div className="flex flex-col items-center pt-10 gap-1">
            <p className="text-center text-[17px]">핸드폰 / 인터넷 / TV까지</p>
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="flex items-center">
                        <Image
                            src={yogoMembershipLogo}
                            alt="Yogo Membership Logo"
                            width={50}
                            height={50}
                        />
                        <p className="font-bold text-[25px]">
                            로 뭉치면 약정 걱정 없이
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-bold text-[25px] relative z-10">
                            통신비 최대 32% 할인!
                        </p>
                        <div className="w-[230px] h-[10px] bg-[#9BFFF5] absolute bottom-[5px] z-0"></div>
                    </div>
                </div>
            </div>
            <p className="text-center mt-[10px]">
                인터넷, TV도 모두
                <br />
                <span className="font-bold">
                    약정없이 저렴한 요고뭉치 결합
                </span>{' '}
                등장!
            </p>
        </div>
    );
}
