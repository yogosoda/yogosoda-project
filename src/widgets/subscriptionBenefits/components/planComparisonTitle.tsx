import Image from 'next/image';
import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';

export default function PlanComparisonTitle() {
    return (
        <div className="flex flex-col items-center pt-10 mb-5">
            <p className="text-center">알뜰폰과 비교해서도</p>
            <div className="flex items-center gap-1">
                <Image
                    src={yogoMembershipLogo}
                    alt="Yogo Membership Logo"
                    width={50}
                    height={50}
                />
                <div className="relative">
                    <p className="font-bold text-[25px] relative">라고요</p>
                </div>
            </div>
        </div>
    );
}
