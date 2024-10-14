'use client';

import { useState } from 'react';
import Yogoevent_Select_Plan from './Yogoevent_Select_Plan';
import Yogoevent_Plan_Info from './Yogoevent_Plan_Info';

function Yogoevent_Search() {
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
    };

    return (
        <>
            <Yogoevent_Select_Plan {...props} />
            <Yogoevent_Plan_Info />
        </>
    );
}

export default Yogoevent_Search;
