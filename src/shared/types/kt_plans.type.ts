export interface KTPlansType {
    benefits: {
        additional_benefits: string;
        choice_benefits: string;
        plus_benefits: string[];
        plus_benefits_limit: string;
        smart_device_benefits_limit: string;
        smart_device_lines: number;
    };
    calls_and_texts: string;
    data: {
        shared_data_limit: string;
        speed_limit: string;
        total_data: string;
    };
    info: string;
    monthly_fee: string;
    plan_name: string;
}

export interface PlanPropsType {
    isY: boolean;
    isSelectData: boolean;
    planIdx: number;
    setIsY: (_isY: boolean | ((_prev: boolean) => boolean)) => void;
    setIsSelectData: (_data: boolean | ((_prev: boolean) => boolean)) => void;
    setPlanIdx: (_value: number | ((_prev: number) => number)) => void;
    selectedPlan: KTPlansType;
}
