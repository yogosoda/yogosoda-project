import Box from '@dev/shared/components/box';
import { BenefitsBoxProps } from '@dev/shared/types/direct.type';
import Image from 'next/image';

export default function DirectBenefitsBox({
    width,
    height,
    borderColor = '#D6E7F7',
    backgroundColor,
    imageHeight,
    imageWidth,
    top,
    left,
    imageSrc,
    imageAlt = '',
    text,
    className,
    children,
}: BenefitsBoxProps) {
    return (
        <Box
            width={width}
            height={height}
            borderRadius="15px"
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            className="flex items-end justify-center relative"
        >
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    style={{
                        position: 'absolute',
                        top: top,
                        left: left,
                        transform: 'translateX(-50%)',
                    }}
                />
            )}
            <div>
                <div className={className}>{text}</div>
                {children}
            </div>
        </Box>
    );
}
