import Box from '@dev/shared/components/box';
import { CouponInfoBoxProps } from '@dev/shared/types/subscriptionBenefits.type';
import Image from 'next/image';

export default function CouponInfoBox({
    topImage,
    topImageAlt,
    mainImage,
    mainImageAlt,
    couponTitle,
    couponSubTitle,
}: CouponInfoBoxProps) {
    return (
        <Box
            width="280px"
            height="250px"
            borderRadius="30px"
            borderColor="#ffffff"
            backgroundColor="white"
            className="flex flex-col justify-evenly items-center relative mx-auto shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
            <div className="flex flex-col items-center justify-center gap-3 mt-[10px]">
                <Image
                    src={topImage}
                    alt={topImageAlt}
                    width={80}
                    height={50}
                    className="absolute top-[-2px] left-1/2 transform -translate-x-1/2"
                />
                <Image
                    src={mainImage}
                    alt={mainImageAlt}
                    width={150}
                    height={150}
                    className="h-[130px]"
                />
                <div>
                    <p className="text-center">
                        <span className="text-[12px]">{couponTitle}</span>
                        <br />
                        <span className="font-bold pb-[5px] relative double-underline">
                            {couponSubTitle}
                        </span>
                    </p>
                </div>
            </div>
        </Box>
    );
}
