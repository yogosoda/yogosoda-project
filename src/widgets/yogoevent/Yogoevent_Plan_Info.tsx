import { TextBox } from '@dev/shared/components/TextBox';
import { notosansKr } from '@dev/shared/fonts';
import { KTPlansType } from '@dev/shared/types/kt_plans.type';
import { twMerge } from 'tailwind-merge';

function Yogoevent_Plan_Info({
    isY,
    selectedPlan,
}: {
    isY: boolean;
    selectedPlan: KTPlansType;
}) {
    const { benefits, calls_and_texts, data, monthly_fee, plan_name } =
        selectedPlan;
    const basic_data = Number(data.total_data.replace('GB', ''));
    const additional_data = Number(
        benefits.additional_benefits
            .replace('출시기념 데이터', '')
            .replace('추가 제공', '')
            .replace('GB', '')
    );
    const limit_speed = data.speed_limit.replace('속도제한', '').trim();
    const benefit_data = [
        {
            src: 'bg-[url("../../shared/images/yogoevent/plans_call.png")]',
            desc: calls_and_texts,
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent/plans_present.png")]',
            desc: '혜택',
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent/plans_benefit.png")]',
            desc: '추가혜택',
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent/plans_coupon.png")]',
            desc: '쿠폰',
        },
    ];
    return (
        <div
            className={twMerge(
                'flex-col-center w-full h-fit max-h-[360px] rounded-2xl bg-gray-200 px-7 py-3',
                `${notosansKr.className}`
            )}
        >
            <TextBox className="flex-col-center">
                <p className={twMerge('text-2xl font-bold')}>{plan_name}</p>
            </TextBox>
            <TextBox className="flex flex-col gap-5">
                <div className="flex flex-row justify-start items-center gap-4">
                    <span className="font-bold text-gray-600 text-lg">
                        데이터
                    </span>
                    <div className="relative flex flex-row items-center gap-2">
                        {isNaN(basic_data + additional_data) ? (
                            <span className="font-bold text-black text-xl">
                                완전무제한
                            </span>
                        ) : (
                            <>
                                <span className="font-bold text-black text-xl">
                                    {isY
                                        ? `${basic_data * 2 + additional_data}GB`
                                        : `${basic_data + additional_data}GB`}
                                </span>
                                <span className="font-regular text-gray-500 text-xs">
                                    {`다 쓰면 ${limit_speed}로 무제한`}
                                </span>
                                <span className="absolute top-7 font-bold text-red-500 text-[10px]">
                                    {`* 기본 ${basic_data}GB`}
                                    {isY && `+ Y덤 ${basic_data}GB`}
                                    {additional_data > 0 &&
                                        ` + 프로모션 ${additional_data}GB`}
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                    <span className="font-bold text-gray-600 text-lg">
                        월정액
                    </span>
                    <span className="font-bold text-black text-xl">
                        {monthly_fee}
                    </span>
                </div>
            </TextBox>
            <TextBox className="flex flex-col border-none gap-3">
                {benefit_data.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-row items-center gap-2"
                        >
                            <div
                                className={twMerge(
                                    'w-6 h-6 rounded-full bg-white',
                                    'bg-center bg-no-repeat bg-cover',
                                    item.src
                                )}
                            ></div>
                            <span className="font-light text-gray-700 text-sm">
                                {item.desc}
                            </span>
                        </div>
                    );
                })}
            </TextBox>
        </div>
    );
}
export default Yogoevent_Plan_Info;
