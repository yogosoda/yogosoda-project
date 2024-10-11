'use client';

import ToggleButton from '@dev/shared/components/ToggleButton';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { notosansKr } from '@dev/shared/fonts';
import RoundedButton from '@dev/shared/components/RoundedButton';
import GuageGraph from '@dev/shared/components/GuageGraph';

function Yogoevent_Search() {
    const [isY, setIsY] = useState(false);
    const [isSelectData, setIsSelectData] = useState(true);
    const [planIdx, setPlanIdx] = useState(6);

    const showPrevPlan = () => {
        if (planIdx > 0) setPlanIdx((_prev) => _prev - 1);
    };
    const showNextPlan = () => {
        if (planIdx < 12) setPlanIdx((_prev) => _prev + 1);
    };

    return (
        <>
            <div
                className={twMerge(
                    'flex-col-center w-full h-fit rounded-2xl bg-gray-100 p-4',
                    `${notosansKr.className}`
                )}
            >
                <TextBox className="flex-col-center">
                    <p className={twMerge('text-2xl font-bold')}>
                        Y에겐 데이터가 2배!
                    </p>
                    <div className="flex-row-center items-center gap-1">
                        <p
                            className={twMerge(
                                'text-[#0F807B] text-sm font-bold'
                            )}
                        >
                            34세 이하의 Y라면? Y덤 혜택받기!
                        </p>
                        <input
                            type="checkbox"
                            className={twMerge(
                                'appearance-none w-4 h-4 border-[1px] border-gray-500 rounded',
                                'bg-[url("../../shared/images/check_gray-300.svg")] bg-no-repeat bg-center',
                                isY &&
                                    'checked:bg-[url("../../shared/images/check_white.svg")] checked:bg-[#0F807B]'
                            )}
                            onClick={() => setIsY((isY) => !isY)}
                        ></input>
                    </div>
                </TextBox>
                <TextBox
                    className={twMerge(
                        'flex-row-center items-center text-base gap-4 font-light',
                        `${notosansKr.className}`
                    )}
                >
                    <span onClick={() => setIsSelectData(true)}>
                        데이터 용량
                    </span>
                    <ToggleButton
                        className="bg-[#0F807B]"
                        value={isSelectData}
                        setValue={setIsSelectData}
                    ></ToggleButton>
                    <span onClick={() => setIsSelectData(false)}>월정액</span>
                </TextBox>
                <TextBox className="flex-col-center border-none px-4">
                    <div className="flex-col-center w-full">
                        <div className="relative flex flex-row justify-between items-center w-full">
                            <RoundedButton
                                className='bg-[url("../../shared/images/minus.svg")]'
                                clickHandler={showPrevPlan}
                            ></RoundedButton>
                            <div className="flex-row-center items-center text-xl font-normal">
                                <span>30GB</span>
                                {isSelectData && (
                                    <>
                                        <span>+</span>
                                        <span className="text-red-500">
                                            30GB
                                        </span>
                                        <div className="flex justify-center items-center w-8 h-4 bg-red-500 text-xs text-white rounded-sm p-1 ml-1">
                                            추가
                                        </div>
                                    </>
                                )}
                            </div>
                            <RoundedButton
                                className='bg-[url("../../shared/images/plus.svg")]'
                                clickHandler={showNextPlan}
                            ></RoundedButton>
                        </div>
                    </div>
                    <GuageGraph
                        planIdx={planIdx}
                        setPlanIdx={setPlanIdx}
                    ></GuageGraph>
                </TextBox>
            </div>
        </>
    );
}

const TextBox = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={twMerge(
                'w-full h-fit gap-2 border border-transparent border-b-gray-300 py-4',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Yogoevent_Search;
