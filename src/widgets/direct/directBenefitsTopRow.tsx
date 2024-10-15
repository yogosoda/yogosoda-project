import Image, { StaticImageData } from 'next/image';

interface BenefitsTopRowProps {
    imageSrc: StaticImageData;
    imageAlt: string;
    children: React.ReactNode;
}

export default function DirectBenefitsTopRow({
    imageSrc,
    imageAlt,
    children,
}: BenefitsTopRowProps) {
    return (
        <div className="flex items-center gap-2 w-[270px] mx-auto py-2 border-t border-[#DADADA]">
            <Image src={imageSrc} alt={imageAlt} width={55} height={35} />
            <div className="text-[12px] text-left">{children}</div>
        </div>
    );
}
