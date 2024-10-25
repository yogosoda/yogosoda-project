import Box from '@dev/shared/components/box';
import { YogoButtonProps } from '@dev/shared/types/direct.type';
import Image from 'next/image';
import Link from 'next/link';

export default function DirectButton({
    text,
    imageSrc,
    imageAlt = '',
    url,
}: YogoButtonProps) {
    return (
        <Link href={url}>
            <div className="flex justify-center my-[10px]">
                <Box
                    width="80vw"
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
