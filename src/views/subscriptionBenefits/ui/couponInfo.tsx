import yogoCouponImage1 from '@dev/shared/images/subscriptionImage/yogo_coupon_image1.png';
import yogoCouponImage2 from '@dev/shared/images/subscriptionImage/yogo_coupon_image2.png';
import yogoCouponImage3 from '@dev/shared/images/subscriptionImage/yogo_coupon_image3.png';
import yogoCouponImage4 from '@dev/shared/images/subscriptionImage/yogo_coupon_image4.png';
import yogoCouponPlus from '@dev/shared/images/subscriptionImage/yogo_coupon_plus.png';
import CouponInfoBox from '@dev/widgets/subscriptionBenefits/components/couponInfoBox';
import CouponInfoTitle from '@dev/widgets/subscriptionBenefits/components/couponInfoTitle';
import Image from 'next/image';

export default function CouponInfo() {
    return (
        <div className="w-[390px] bg-[#FCFAFF] h-[fit] pb-[50px]">
            <CouponInfoTitle />
            <CouponInfoBox
                topImage={yogoCouponImage1}
                topImageAlt="Yogo Coupon Image1"
                mainImage={yogoCouponImage3}
                mainImageAlt="Yogo Coupon Image3"
                couponTitle="인기 쿠폰팩 9종 택 1"
                couponSubTitle="최대 96,000원"
            />
            <div className="w-[280px] h-[100px] flex justify-center items-center mx-auto">
                <Image
                    src={yogoCouponPlus}
                    alt="Top Image"
                    width={30}
                    height={30}
                />
            </div>
            <CouponInfoBox
                topImage={yogoCouponImage2}
                topImageAlt="Yogo Coupon Image2"
                mainImage={yogoCouponImage4}
                mainImageAlt="Yogo Coupon Image4"
                couponTitle="스타벅스 아메리카노 4,500원 이용권"
                couponSubTitle="최대 108,000원"
            />
        </div>
    );
}
