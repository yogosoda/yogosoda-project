import { KTPlansType } from '@dev/entities/kt_plans.type';

interface PlanPropsType {
    isY: boolean;
    isSelectData: boolean;
    planIdx: number;
    setIsY: (_isY: boolean | ((_prev: boolean) => boolean)) => void;
    setIsSelectData: (_data: boolean | ((_prev: boolean) => boolean)) => void;
    setPlanIdx: (_value: number | ((_prev: number) => number)) => void;
}

export type PlanInfoPropsType = Pick<PlanPropsType, 'isY'> &
    Omit<KTPlansType, 'info'>;
export type SelectPlanType = PlanPropsType &
    Omit<KTPlansType, 'call_and_text' | 'plan_name' | 'info'>;
