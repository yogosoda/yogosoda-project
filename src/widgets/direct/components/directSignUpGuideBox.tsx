import Box from '@dev/shared/components/box';
import Image from 'next/image';
import buttonArrow from '@dev/shared/images/directImage/button_arrow.png';
import DirectButton from './directButton';
import { SignUpGuideProps } from '@dev/shared/types/direct.type';

export default function DirectSignUpGuideBox({
    title,
    description,
    buttonData,
    imageSrc,
    imageAlt = '',
    height,
}: SignUpGuideProps) {
    return (
        <Box className="mb-[20px]" height={height} width="calc(100vw - 10vw)">
            <div className="flex justify-around my-4">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={100}
                        height={100}
                    />
                )}
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
