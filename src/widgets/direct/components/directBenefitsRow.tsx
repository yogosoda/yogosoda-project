import { BenefitsRowProps } from '@dev/shared/types/direct.type';
import DirectBenefitsBox from './directBenefitsBox';

export default function DirectBenefitsRow({
    width = '140px',
    height = '140px',
    left = '10px',
    top = '-30px',
    className = '',
    benefits = [],
    children,
}: BenefitsRowProps) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
            {benefits.map((benefit, index) => {
                const imageAlt = benefit.imageAlt ?? ''; // 기본값 설정

                return (
                    benefit.imageSrc && (
                        <DirectBenefitsBox
                            width={width}
                            height={height}
                            left={left}
                            top={top}
                            key={index}
                            imageWidth={benefit.imageWidth}
                            imageHeight={benefit.imageHeight}
                            imageSrc={benefit.imageSrc}
                            imageAlt={imageAlt}
                            text={benefit.text}
                            className={className}
                        >
                            {children}
                        </DirectBenefitsBox>
                    )
                );
            })}
        </div>
    );
}
