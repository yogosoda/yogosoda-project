import Box from '@dev/shared/components/box';
import Image, { StaticImageData } from 'next/image';
import buttonArrow from '@dev/shared/images/directImage/button_arrow.png';
import DirectButton from './directButton';

interface SignUpGuideProps {
    title: React.ReactNode; // 제목
    description: React.ReactNode; // 설명
    buttonData: {
        // 버튼 정보 배열
        text: string;
        url: string;
    }[];
    imageSrc: StaticImageData; // 이미지 소스
    imageAlt: string; // 이미지의 alt 텍스트
    height?: string;
}

export default function DirectSignUpGuideBox({
    title,
    description,
    buttonData,
    imageSrc,
    imageAlt,
    height,
}: SignUpGuideProps) {
    return (
        <Box className="mb-[15px]" height={height}>
            <div className="flex justify-around my-4">
                <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
                <div className="flex flex-col mt-2 gap-2 w-[188px]">
                    <p className="font-bold text-[14px]">{title}</p>
                    <p className="text-[12px]">{description}</p>
                </div>
            </div>
            {/* 버튼 컴포넌트 */}
            {buttonData.map((button, index) => (
                <DirectButton
                    key={index}
                    text={button.text}
                    imageSrc={buttonArrow}
                    imageAlt="Button Arrow"
                    url={button.url}
                />
            ))}
        </Box>
    );
}
