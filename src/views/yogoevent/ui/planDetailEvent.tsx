import yogoDetailImage2 from '@dev/shared/images/subscriptionImage/yogo_detail_image2.png';
import SubscriptionBenefitsButtonSmall from '@dev/widgets/subscriptionBenefits/components/subscriptionBenefitsButtonSmall';
import Image from 'next/image';

export default function PlanDetailEvent() {
    return (
        <div className="w-full relative">
            <Image
                src={yogoDetailImage2}
                alt="Yogo Detail Image2"
                width={390}
                height={150}
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col px-5 ">
                <p className="text-[12px] text-[#535857]">
                    유심 개통하면 최대 44만원 혜택까지!
                </p>
                <p className="font-bold text-[18px]">
                    알뜰 요금은 그대로
                    <br />더 좋아진{' '}
                    <span className="text-[#00978D]">요고 시즌2!</span>
                </p>
                <SubscriptionBenefitsButtonSmall
                    text="자세히 보기"
                    url="https://shop.kt.com/display/olhsPlan.do?plnDispNo=2388"
                />
            </div>
        </div>
    );
}
