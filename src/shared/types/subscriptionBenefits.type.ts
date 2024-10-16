import { StaticImageData } from 'next/image';
import {
    CommonButtonProps,
    CommonImageProps,
    CommonLayoutProps,
    CommonTextProps,
} from './common.type';

export type CouponInfoBoxProps = {
    topImage: StaticImageData;
    topImageAlt: string;
    mainImage: StaticImageData;
    mainImageAlt: string;
    couponTitle: string;
    couponSubTitle: string;
};

export type MembershipBenefitsBoxProps = CommonLayoutProps &
    CommonTextProps & {
        iconSrc: StaticImageData;
        iconAlt: string;
        mainImageSrc: StaticImageData;
        mainImageAlt: string;
    };

export type PlanComparisonProps = CommonImageProps &
    CommonTextProps &
    CommonLayoutProps & {
        networkType: string; // 네트워크 타입
        data: string; // 데이터
        dataDetails: React.ReactNode; // 데이터 세부정보
        price: string; // 가격
        benefitTags?: string[]; // 혜택 태그
        benefits: React.ReactNode[]; // 혜택 목록
    };

export type SubscriptionBenefitsButton = CommonButtonProps;
