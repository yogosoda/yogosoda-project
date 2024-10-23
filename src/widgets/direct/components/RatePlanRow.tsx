import RatePlan from '@dev/shared/components/RatePlan';
import yogoRecommendImage2 from '@dev/shared/images/directImage/yogo_recommend_image2.png';
import yogoRecommendImage3 from '@dev/shared/images/directImage/yogo_recommend_image3.png';

export default function RatePlanRow() {
    return (
        <>
            <RatePlan
                imageSrc={yogoRecommendImage2}
                ratePlanName="요고 30(시즌 2)"
                data="기본 5GB + Y덤 5GB + 추가 5GB"
                dataDetail="(다 써도 400Kpbs로 무제한)"
                callMessage="무제한"
                memerbership="혜택 제공"
                combinedDiscount="혜택 제공"
                price="30,000"
            />
            <RatePlan
                ratePlanName="요고 40(시즌 2)"
                data="기본 30GB + Y덤 30GB"
                callMessage="무제한"
                memerbership="VIP 업그레이드"
                combinedDiscount="혜택 제공"
                choiceBenefit="티빙 광고형 12개월"
                price="40,000"
            />
            <RatePlan
                ratePlanName="요고 55(시즌 2)"
                data="기본 200GB + Y덤 200GB"
                callMessage="무제한"
                memerbership="VIP 업그레이드"
                combinedDiscount="혜택 제공"
                choiceBenefit="티빙 광고형 or 디바이스 Lite 할인"
                plusBenefit="지니뮤직 or 밀리의 서재 or 블라이스 셀렉트 무료"
                smartDevice="스마트기기 1회선 무료"
                price="55,000"
            />
            <RatePlan
                imageSrc={yogoRecommendImage3}
                ratePlanName="요고 69(시즌 2)"
                data={
                    <>
                        속도 제한 없는
                        <br />
                        5G 완전 무제한
                    </>
                }
                sharedData="70GB"
                memerbership="VIP 업그레이드"
                combinedDiscount="혜택 제공"
                choiceBenefit={
                    <>
                        OTT (티빙, 유튜브 프리미엄, 디즈니+ 중 택 2)
                        <br />
                        or 디바이스 할인
                    </>
                }
                plusBenefit="지니뮤직 or 밀리의 서재 or 블라이스 셀렉트 무료"
                smartDevice="스마트기기 2회선 무료"
                price="69,000"
            />
        </>
    );
}
