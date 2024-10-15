export const PATH_INFO: Record<string, PathTypes> = {
    direct: {
        path: '/direct',
        label: '요고 다이렉트',
    },
    'subscription-benefits': {
        path: '/subscription-benefits',
        label: '요고 가입 해택',
    },
    'brand-story': {
        path: '/brand-story',
        label: '요고 브랜드 스토리',
    },
    'registration-modification-plan': {
        path: '/registration-modification-plan',
        label: '핸드폰 등록 및 요금제 변경',
    },
} as const;

export type PathTypes = {
    path: string;
    label: string;
};
