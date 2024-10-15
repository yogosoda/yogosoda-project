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
            {/* props로 text를 넘기지 말고 children을 넘기고 태그 안에 text를 작성하는 것은 어떨까요? */}
            <div className="text-[12px] text-left">{children}</div>
        </div>
    );
}
