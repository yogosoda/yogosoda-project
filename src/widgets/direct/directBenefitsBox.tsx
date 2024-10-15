import Box from '@dev/shared/components/box';
import Image, { StaticImageData } from 'next/image';

interface BenefitsBoxProps {
    width?: string;
    height?: string;
    imageWidth?: number;
    imageHeight?: number;
    borderColor?: string;
    backgroundColor?: string;
    left?: string;
    top?: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    text: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

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
    imageAlt,
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
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{ position: 'absolute', top: top, left: left }}
            />
            <div>
                <div className={className}>{text}</div>
                {children}
            </div>
        </Box>
    );
}
