import Box from '@dev/shared/components/box';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PlanComparisonProps {
    imageSrc?: StaticImageData;
    imageAlt?: string;
    title: string;
    titleColor: string;
    subtitle?: string;
    networkType: string;
    data: string;
    dataDetails: React.ReactNode;
    price: string;
    benefitTags?: string[];
    benefits: React.ReactNode[];
    backgroundColor: string;
    className?: string;
}

export default function PlanComparisonBox({
    imageSrc,
    imageAlt = '',
    title,
    titleColor,
    subtitle = '',
    networkType,
    data,
    dataDetails,
    price,
    benefitTags = [],
    benefits = [],
    backgroundColor,
    className,
}: PlanComparisonProps) {
    const heightArray = ['70px', '130px', '100px'];
    return (
        <Box
            width="150px"
            height="570px"
            borderRadius="30px"
            borderColor="#ffffff"
            backgroundColor="white"
            className="flex flex-col items-center relative shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        >
            <div
                className={`w-[150px] h-[50px] rounded-t-30px ${titleColor} flex justify-center items-center`}
            >
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={60}
                        height={60}
                        className="absolute top-[-55px] right-[20px]"
                    />
                )}
                <p className="text-white font-bold">
                    {title}
                    {subtitle && (
                        <span className="text-[14px] font-normal">
                            ({subtitle})
                        </span>
                    )}
                </p>
            </div>
            <div className="w-[150px] h-[50px] bg-[#FFFFFF] flex justify-center items-center">
                <p className={className}>{networkType}</p>
            </div>
            <div
                className={`w-[150px] h-[120px] ${backgroundColor} flex justify-center items-center`}
            >
                <p className="text-center">
                    <span className={className}>{data}</span>
                    <br />
                    <span className="text-[13px]">{dataDetails}</span>
                </p>
            </div>
            <div className="w-[150px] h-[50px] bg-[#FFFFFF] flex justify-center items-center">
                <p className={className}>{price}</p>
            </div>
            <div className="flex flex-col">
                {benefitTags && benefitTags.length > 0 ? (
                    benefitTags.map((tag, index) => (
                        <div
                            key={index}
                            className={`w-[150px] 
                    ${index % 2 === 0 ? backgroundColor : 'bg-white'} 
                    flex flex-col justify-center items-center gap-1 
                    ${index === benefitTags.length - 1 ? 'rounded-b-30px' : ''}`}
                            style={{
                                height: heightArray[index] || '100px', // 높이 배열에서 가져오기
                            }}
                        >
                            <div className="w-[55px] h-[20px] text-white bg-red-500 rounded-[15px] flex justify-center items-center text-[10px]">
                                {tag}
                            </div>
                            <p className="font-bold text-center">
                                {benefits[index]}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="w-[150px] h-[300px] rounded-b-30px bg-[#F5F5F5] flex justify-center items-center">
                        <p>불가능</p>
                    </div>
                )}
            </div>
        </Box>
    );
}
