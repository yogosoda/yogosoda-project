type Benefits = {
    additional_benefits: string;
    choice_benefits: string;
    plus_benefits: string[];
    plus_benefits_limit: string;
    smart_device_benefits_limit: string;
    smart_device_lines: number;
};

type Data = {
    shared_data_limit: string;
    speed_limit: string;
    total_data: string;
};

export type Yogo = {
    benefits: Benefits;
    calls_and_texts: string;
    data: Data;
    info: string;
    monthly_fee: string;
    plan_name: string;
    launch_promo_data_bonus?: null | number;
    base_data?: null | number | '5G 완전 무제한';
};
