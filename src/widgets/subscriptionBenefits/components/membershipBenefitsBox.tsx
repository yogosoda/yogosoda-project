import Box from '@dev/shared/components/box';
import { MembershipBenefitsBoxProps } from '@dev/shared/types/subscriptionBenefits.type';
import Image from 'next/image';

export default function MembershipBenefitsBox({
    height,
    iconSrc,
    iconAlt,
    mainImageSrc,
    mainImageAlt,
    title,
    subtitle,
    detailText,
    additionalInfo,
}: MembershipBenefitsBoxProps) {
    return (
        <Box
            width="350px"
            height={height}
            borderRadius="30px"
            borderColor="#ffffff"
            backgroundColor="white"
            className="flex relative mx-auto mb-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
            <div className="w-[320px] mx-auto flex flex-col justify-center gap-2">
                <Image src={iconSrc} alt={iconAlt} width={50} height={50} />
                <div>
                    <p>
                        {title}
                        <br />
                        <span className="font-bold">{subtitle}</span>
                    </p>
                </div>
                {detailText && (
                    <div>
                        <p className="text-[13px]">{detailText}</p>
                    </div>
                )}
                {additionalInfo && (
                    <div className="flex gap-1 text-[11px] text-[#A8A8A8]">
                        <p>*</p>
                        <p>{additionalInfo}</p>
                    </div>
                )}
            </div>
            <Image
                src={mainImageSrc}
                alt={mainImageAlt}
                width={160}
                height={130}
                className="h-[130px] absolute top-[15px] right-[10px]"
            />
        </Box>
    );
}
