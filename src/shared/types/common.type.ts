import { StaticImageData } from 'next/image';

export type CommonImageProps = {
    imageSrc?: StaticImageData;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
};

export type CommonLayoutProps = {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
    borderColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    backgroundColor?: string;
    titleColor?: string;
    className?: string;
};

export type CommonTextProps = {
    title?: React.ReactNode; // 제목
    description?: React.ReactNode; // 설명
    subtitle?: React.ReactNode; // 부제목
    text?: React.ReactNode; // 일반 텍스트
    detailText?: React.ReactNode; // 디테일 텍스트
    additionalInfo?: React.ReactNode; // 추가 정보
};

export type CommonButtonProps = {
    url: string; // 링크 URL
    text: string; // 버튼 텍스트
};
