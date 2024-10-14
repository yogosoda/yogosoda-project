'use client';

import { useState } from 'react';
import Yogoevent_Select_Plan from './Yogoevent_Select_Plan';
import Yogoevent_Plan_Info from './Yogoevent_Plan_Info';
import { KTPlansType } from '@dev/shared/types/kt_plans.type';

// 상단 2번째 요금제 컴포넌트입니다
function Yogoevent_Search({ ktPlanData }: { ktPlanData: KTPlansType[] }) {
    const [isY, setIsY] = useState(false);
    const [isSelectData, setIsSelectData] = useState(true);
    const [planIdx, setPlanIdx] = useState(6);

    const props = {
        isY,
        isSelectData,
        planIdx,
        setIsY,
        setIsSelectData,
        setPlanIdx,
        selectedPlan: ktPlanData[ktPlanData.length - 1 - planIdx],
    };

    return (
        <>
            <Yogoevent_Select_Plan {...props} />
            <Yogoevent_Plan_Info
                isY={isY}
                selectedPlan={ktPlanData[ktPlanData.length - 1 - planIdx]}
            />
        </>
    );
}

export default Yogoevent_Search;
