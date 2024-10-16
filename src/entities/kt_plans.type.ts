// KT 요금제 플랜의 데이터 타입입니다.
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
