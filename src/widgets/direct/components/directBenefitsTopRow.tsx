import { BenefitsTopRowProps } from '@dev/shared/types/direct.type';
import Image from 'next/image';

export default function DirectBenefitsTopRow({
    imageSrc,
    imageAlt = '',
    children,
}: BenefitsTopRowProps) {
    return (
        <div className="flex items-center gap-2 w-[70vw] mx-auto py-2 border-t border-[#DADADA]">
            {imageSrc && (
                <Image src={imageSrc} alt={imageAlt} width={55} height={35} />
            )}
            <div className="text-[12px] text-left">{children}</div>
        </div>
    );
}
