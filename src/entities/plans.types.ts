type Gift = {
    category: string;
    description: string;
    endDate: string;
    eventTitle: string;
    receiptDate: string | null;
};

export type PlanMeta = {
    additionalWhenExhausted: string | null;
    fee: number;
    feeString: string;
    giftList: Gift[];
    isEsim: boolean;
    isSupportUsimOrder: boolean;
    mno: string;
    mobileData: number | null;
    mobileData2: number | null;
    mobileDataDateExhaustedDescription: string | null;
    mobileDataDescription: string | null;
    mobileDataStandard: string | null;
    mobileDataStr: string | null;
    mobileDataTotal: number | null;
    mobileMessage: number;
    mobileSignupUrl: string | null;
    mobileTransferPartnerLink: string | null;
    mobileVideo: string | null;
    mobileVoice: number;
    mvno: string;
    name: string;
    net: string;
    signupUrl: string | null;
    speedWhenExhausted: number | null;
    speedWhenExhaustedDescription: string | null;
    twMonthFee: number;
};
