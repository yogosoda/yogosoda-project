import DirectBenefitsBox from '@dev/widgets/direct/directBenefitsBox';
import { StaticImageData } from 'next/image';

interface BenefitsRowProps {
    width?: string;
    height?: string;
    imageWidth?: number;
    imageHeight?: number;
    left?: string;
    top?: string;
    benefits: {
        imageSrc: StaticImageData;
        imageAlt: string;
        text: React.ReactNode;
    }[];
    className?: string;
    children?: React.ReactNode;
}

export default function DirectBenefitsRow({
    width = '140px',
    height = '140px',
    imageHeight = 100,
    imageWidth = 100,
    left = '10px',
    top = '-30px',
    className = '',
    benefits,
    children,
}: BenefitsRowProps) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
            {benefits.map((benefit, index) => (
                <DirectBenefitsBox
                    width={width}
                    height={height}
                    imageWidth={imageWidth}
                    imageHeight={imageHeight}
                    left={left}
                    top={top}
                    key={index}
                    imageSrc={benefit.imageSrc}
                    imageAlt={benefit.imageAlt}
                    text={benefit.text}
                    className={className}
                >
                    {children}
                </DirectBenefitsBox>
            ))}
        </div>
    );
}
