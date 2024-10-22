import yogoDetailImage1 from '@dev/shared/images/subscriptionImage/yogo_detail_image1.png';
import PlanDetailTitle from '@dev/widgets/subscriptionBenefits/components/planDetailTitle';
import SubscriptionBenefitsButtonBlack from '@dev/widgets/subscriptionBenefits/components/subscriptionBenefitsButtonBlack';
import Image from 'next/image';

export default function PlanDetail() {
    return (
        <div className="bg-[#FCFAFF] h-[fit] pb-[20px]">
            <PlanDetailTitle />
            <Image
                src={yogoDetailImage1}
                alt="Yogo Detail Image1"
                width={350}
                height={100}
                className="mx-auto mt-[-5px]"
            />
            <SubscriptionBenefitsButtonBlack
                text="요고뭉치 자세히 보기"
                url="https://m.shop.kt.com:444/m/display/olhsPlan.do?plnDispNo=2389"
            />
        </div>
    );
}
