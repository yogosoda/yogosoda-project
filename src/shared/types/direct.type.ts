import {
    CommonButtonProps,
    CommonImageProps,
    CommonLayoutProps,
    CommonTextProps,
} from './common.type';

export type BenefitsBoxProps = CommonLayoutProps &
    CommonImageProps &
    CommonTextProps & {
        children?: React.ReactNode;
    };

export type BenefitsBottomProps = CommonLayoutProps &
    CommonImageProps &
    CommonTextProps;

export type BenefitsRowProps = CommonLayoutProps & {
    benefits: (CommonImageProps & CommonTextProps)[];
    children?: React.ReactNode;
};

export type BenefitsTopRowProps = CommonImageProps & {
    children: React.ReactNode;
};

export type YogoButtonProps = CommonLayoutProps &
    CommonImageProps &
    CommonButtonProps;

export type CheckItemProps = { children: React.ReactNode };

export type SignUpGuideProps = CommonTextProps &
    CommonImageProps & {
        buttonData: CommonButtonProps[]; // 버튼 데이터 배열
        height?: string;
    };
