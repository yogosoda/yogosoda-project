import Image, { StaticImageData } from 'next/image';
import buttonArrow from '@dev/shared/images/directImage/button_arrow.png';
import Link from 'next/link';
import DirectBenefitsBox from './directBenefitsBox';

interface BenefitsBottomProps {
    width?: string;
    height?: string;
    imageWidth?: number;
    imageHeight?: number;
    left?: string;
    top?: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    text: React.ReactNode;
    className?: string;
}

export default function DirectBenefitsBottom({
    width = '140px',
    height = '140px',
    imageHeight = 100,
    imageWidth = 100,
    left = '10px',
    top = '-30px',
    className = '',
    imageSrc,
    imageAlt,
    text,
}: BenefitsBottomProps) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
            <DirectBenefitsBox
                width={width}
                height={height}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                left={left}
                top={top}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                text={text}
                className={className}
            >
                <Link
                    href="https://shop.kt.com/display/olhsPlan.do?plnDispNo=2389"
                    passHref
                >
                    <div className="flex justify-between mx-auto mb-[15px] items-center w-[58px] border-b border-black">
                        <p className="text-[10px]">자세히 보기</p>
                        <Image
                            src={buttonArrow}
                            alt="Button Arrow"
                            width={15}
                            height={10}
                            className="w-[10px] h-[7px]"
                        />
                    </div>
                </Link>
            </DirectBenefitsBox>
        </div>
    );
}
