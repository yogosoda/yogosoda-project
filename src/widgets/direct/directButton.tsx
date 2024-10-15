import Box from '@dev/shared/components/box';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface YogoButtonProps {
    text: string; // 버튼에 표시할 텍스트
    imageSrc?: StaticImageData; // 버튼에 표시할 이미지 소스
    imageAlt?: string; // 이미지의 alt 텍스트
    url: string; // 클릭 시 이동할 URL
}

export default function DirectButton({
    text,
    imageSrc,
    imageAlt = '',
    url,
}: YogoButtonProps) {
    return (
        <Link href={url} passHref>
            <div className="flex justify-center mb-[10px]">
                <Box
                    width="300px"
                    height="40px"
                    borderRadius="8px"
                    borderColor="#A8A8A8"
                    className="flex items-center relative cursor-pointer"
                >
                    <p className="font-bold text-[15px] m-auto">{text}</p>
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={15}
                            height={10}
                            className="absolute right-[10px]"
                        />
                    )}
                </Box>
            </div>
        </Link>
    );
}
