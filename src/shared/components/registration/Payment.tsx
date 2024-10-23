'use client';
import api from '@devShared/utils/api';
import Divider from '@devShared/components/Divider';
import { useEffect, useState } from 'react';
import { ReactComponent as KtLogo } from '@devShared/svg/KT.svg';
import { ReactComponent as Gift } from '@devShared/svg/gift.svg';
import { ReactComponent as Question } from '@devShared/svg/Vector.svg';
import { ReactComponent as Down } from '@devShared/svg/chevron-down-solid.svg';
import { ReactComponent as Up } from '@devShared/svg/chevron-up-solid.svg';
import { KTPlansALLType, KTPlansType } from '@dev/entities/kt_plans.type';

export default function Payment() {
    const [payData, setPayData] = useState<KTPlansType[]>([]);
    const [payAllData, setPayAllData] = useState<KTPlansALLType[]>([]);
    const [isToggle, setIsToggle] = useState<boolean[]>([]);
    const [isQuestion, setIsQuestion] = useState<number | null>(null);

    const toggleHandler = (index: number) => {
        setIsToggle((prevToggle) => {
            const newToggle = [...prevToggle]; // 이전 상태 배열을 복사
            newToggle[index] = !newToggle[index]; // 해당 인덱스의 값만 토글'/n'
            return newToggle; // 새로운 배열을 반환하여 상태 업데이트
        });
    };

    const questionHandler = (index: number) => {
        if (isQuestion === index) {
            setIsQuestion(null);
        } else {
            setIsQuestion(index);
        }
    };

    const paymentFetchData = async () => {
        try {
            const res = await api.get<[]>('/api/yogos');
            if (res.data) {
                setPayData(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const paymentFetchAllData = async () => {
        try {
            const res = await api.get<[]>('/api/plans/KT');
            if (res.data) {
                setPayAllData(res.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        paymentFetchData();
        paymentFetchAllData();
    }, []);

    return (
        <section>
            {payData.map((plan, index) => (
                <div
                    key={index}
                    className="pt-14 pb-14 flex flex-col justify-center items-center"
                >
                    <div className="w-[21rem] shadow-box bg-white rounded-2xl flex flex-col justify-center gap-4 p-4">
                        <KtLogo width={25} height={25} />
                        <p className="text-[#ADB5BD] text-xs">
                            {plan.plan_name}
                        </p>

                        <div className="flex gap-3 items-center relative">
                            <p className="font-bold text-[1.3rem]">
                                월 {plan.data.total_data}
                            </p>

                            <button onClick={() => questionHandler(index)}>
                                <Question />
                            </button>

                            <div className="absolute bottom-8 left-24 ">
                                {isQuestion === index && payAllData[index] && (
                                    <div className="border rounded-lg p-2 text-white bg-slate-700 ">
                                        {plan.data.total_data.includes(
                                            '무제한'
                                        ) ? (
                                            <p className="text-[0.55rem] font-semibold">
                                                무제한
                                            </p>
                                        ) : (
                                            <p className="text-[0.55rem] font-semibold">
                                                {
                                                    payAllData[index]
                                                        .speedWhenExhaustedDescription
                                                }
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <ul className="flex flex-col gap-2 text-[#979797] text-[0.65rem] font-semibold">
                            <div className="flex gap-2">
                                <li>통화 {plan.calls_and_texts}</li>
                                <span>|</span>
                                <li>문자 {plan.calls_and_texts}</li>
                                <span>|</span>
                                <li>
                                    공유데이터{' '}
                                    {`${plan.data.shared_data_limit ? plan.data.shared_data_limit : '기본 데이터 한도내에서 사용'} `}
                                </li>
                            </div>

                            <div>
                                {`Y덤 혜택 (${plan.info} / ${plan.data.total_data.includes('무제한') ? plan.data.total_data : `${plan.data.total_data} + ${plan.data.total_data}`})`}
                            </div>
                        </ul>

                        <div className="flex gap-2 items-center">
                            <p className="font-semibold text-[#425AD5]">
                                {`월 ${plan.monthly_fee}`}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Divider className="w-[18.5rem]" />
                        </div>

                        <div
                            onClick={() => toggleHandler(index)}
                            className="flex items-center gap-4"
                        >
                            <ul className="flex gap-1">
                                {Array.from(
                                    {
                                        length:
                                            plan.benefits.plus_benefits.length +
                                            plan.benefits.choice_benefits.split(
                                                '/n'
                                            ).length,
                                    },
                                    (_, index) => (
                                        <li key={index}>
                                            <Gift width={25} height={25} />
                                        </li>
                                    )
                                )}
                            </ul>

                            <p className="text-[#ADB5BD] text-[0.6rem]">
                                사은품 최대{' '}
                                {plan.benefits.plus_benefits.length +
                                    plan.benefits.choice_benefits.split('/n')
                                        .length}
                                개
                            </p>

                            <div className="absolute pl-[17rem]">
                                {isToggle[index] ? (
                                    <Up
                                        fill="#666"
                                        className="cursor-pointer"
                                    />
                                ) : (
                                    <Down
                                        fill="#666"
                                        className="cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>

                        <ul
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                isToggle[index] ? 'max-h-[12.5rem]' : 'max-h-0'
                            } flex flex-col gap-2 text-[#666] text-[0.7rem]`}
                        >
                            <li className="flex flex-col gap-2">
                                <p className="text-[0.9rem]">초이스 혜택</p>
                                {plan.benefits.choice_benefits}
                            </li>

                            <li className="flex flex-col gap-2 pb-2">
                                {plan.benefits.plus_benefits.length > 0 ? (
                                    <>
                                        <p className="text-[0.9rem]">
                                            플러스 혜택
                                        </p>{' '}
                                        <div className="flex flex-col">
                                            {plan.benefits.plus_benefits.map(
                                                (e, index) => (
                                                    <p key={index}>{e}</p>
                                                )
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    ''
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
}
