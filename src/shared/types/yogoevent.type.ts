import { KTPlansType } from '@dev/entities/kt_plans.type';
import { Dispatch, SetStateAction } from 'react';

interface PlanPropsType {
    isY: boolean;
    isSelectData: boolean;
    planIdx: number;
    setIsY: Dispatch<SetStateAction<boolean>>;
    setIsSelectData: Dispatch<SetStateAction<boolean>>;
    setPlanIdx: Dispatch<SetStateAction<number>>;
}

export type PlanInfoPropsType = Pick<PlanPropsType, 'isY'> &
    Omit<KTPlansType, 'info'>;
export type SelectPlanType = PlanPropsType &
    Omit<KTPlansType, 'call_and_text' | 'plan_name' | 'info'>;
