import Image from 'next/image';
import Box from '@dev/shared/components/box';
import {
    CommonImageProps,
    CommonLayoutProps,
    CommonTextProps,
} from '@dev/shared/types/common.type';
import Link from 'next/link';

export type LandingBoxProps = CommonLayoutProps &
    CommonImageProps &
    CommonTextProps & { url: string };

export default function LandingBox({
    borderColor,
    backgroundColor,
    imageSrc,
    imageAlt = '',
    title,
    subtitle,
    url,
}: LandingBoxProps) {
    return (
        <Box
            width="40vw"
            height="45vw"
            borderRadius="30px"
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            className="flex flex-col items-center justify-center relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
            <Link href={url}>
                <div className="flex flex-col justify-center items-center gap-3">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={80}
                            height={80}
                        />
                    )}
                    <p className="text-[#676767] text-[0.7rem]">{subtitle}</p>
                    <p className="font-bold text-[0.9rem]">{title}</p>
                </div>
            </Link>
        </Box>
    );
}
