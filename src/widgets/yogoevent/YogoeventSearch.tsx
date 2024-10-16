'use client';

import { useState } from 'react';
import { KTPlansType } from '@dev/entities/kt_plans.type';
import YogoeventPlanInfo from './components/YogoeventPlanInfo';
import YogoeventSelectPlan from './components/YogoeventSelectPlan';

// 상단 2번째 요금제 컴포넌트입니다
function Yogoevent_Search({ ktPlanData }: { ktPlanData: KTPlansType[] }) {
    const [isY, setIsY] = useState(false);
    const [isSelectData, setIsSelectData] = useState(true);
    const [planIdx, setPlanIdx] = useState(6);

    const { benefits, calls_and_texts, data, monthly_fee, plan_name } =
        ktPlanData[ktPlanData.length - 1 - planIdx];

    return (
        <>
            <YogoeventSelectPlan
                isY={isY}
                isSelectData={isSelectData}
                planIdx={planIdx}
                setIsY={setIsY}
                setIsSelectData={setIsSelectData}
                setPlanIdx={setPlanIdx}
                benefits={benefits}
                calls_and_texts={calls_and_texts}
                data={data}
                monthly_fee={monthly_fee}
            />
            <YogoeventPlanInfo
                isY={isY}
                benefits={benefits}
                calls_and_texts={calls_and_texts}
                data={data}
                monthly_fee={monthly_fee}
                plan_name={plan_name}
            />
        </>
    );
}

export default Yogoevent_Search;
