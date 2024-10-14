import GuageGraph from '@dev/shared/components/GuageGraph';
import RoundedButton from '@dev/shared/components/RoundedButton';
import { TextBox } from '@dev/shared/components/TextBox';
import ToggleButton from '@dev/shared/components/ToggleButton';
import { notosansKr } from '@dev/shared/fonts';
import { PlanPropsType } from '@dev/shared/types/kt_plans.type';
import { twMerge } from 'tailwind-merge';

function Yogoevent_Select_Plan({
    isY,
    isSelectData,
    planIdx,
    setIsY,
    setIsSelectData,
    setPlanIdx,
    selectedPlan,
}: PlanPropsType) {
    const { benefits, data, monthly_fee } = selectedPlan;
    const additional_data = benefits.additional_benefits
        .replace('출시기념 데이터', '')
        .replace('추가 제공', '')
        .trim();

    const showPrevPlan = () => {
        if (planIdx > 0) setPlanIdx((_prev) => _prev - 1);
    };
    const showNextPlan = () => {
        if (planIdx < 12) setPlanIdx((_prev) => _prev + 1);
    };
    return (
        <div
            className={twMerge(
                'flex-col-center w-full h-fit max-h-[360px] rounded-2xl bg-gray-100 px-7 py-3',
                `${notosansKr.className}`
            )}
        >
            <TextBox className="flex-col-center">
                <p className={twMerge('text-2xl font-bold')}>
                    Y에겐 데이터가 2배!
                </p>
                <div className="flex-row-center items-center gap-1">
                    <p className={twMerge('text-[#0F807B] text-sm font-bold')}>
                        34세 이하의 Y라면? Y덤 혜택받기!
                    </p>
                    <input
                        type="checkbox"
                        className={twMerge(
                            'appearance-none w-4 h-4 border-[1px] border-gray-500 rounded',
                            'bg-[url("../../shared/images/yogoevent/check_gray-300.svg")] bg-no-repeat bg-center',
                            isY &&
                                'checked:bg-[url("../../shared/images/yogoevent/check_white.svg")] checked:bg-[#0F807B]'
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
                <span onClick={() => setIsSelectData(true)}>데이터 용량</span>
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
                        {isSelectData ? (
                            <div className="flex-row-center items-center text-xl font-normal">
                                <span>
                                    {isY &&
                                    Number(data.total_data.replace('GB', ''))
                                        ? `${Number(data.total_data.replace('GB', '')) * 2}GB`
                                        : data.total_data}
                                </span>
                                {benefits.additional_benefits && (
                                    <>
                                        <span>+</span>
                                        <span className="text-red-500">
                                            {additional_data}
                                        </span>
                                        <div className="flex justify-center items-center w-8 h-4 bg-red-500 text-xs text-white rounded-sm p-1 ml-1">
                                            추가
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="flex-row-center items-center text-xl font-normal">
                                <span>{monthly_fee}</span>
                            </div>
                        )}
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
                <div className="flex flex-row items-center justify-between w-full h-fit font-bold text-xs px-2">
                    <span>5GB</span>
                    <span>35GB</span>
                    <span>무제한</span>
                </div>
                <div
                    className={twMerge(
                        'flex-row-center justify-center items-center w-full h-fit bg-sky-100 text-[10px] px-2 py-1 mt-2',
                        additional_data ? 'visible' : 'invisible'
                    )}
                >
                    <p>
                        ※ 출시 기념 추가 데이터 {additional_data}가 12개월간
                        제공됩니다.
                    </p>
                </div>
            </TextBox>
        </div>
    );
}
export default Yogoevent_Select_Plan;
