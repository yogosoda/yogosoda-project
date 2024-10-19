'use client';

import Image from 'next/image';
import img from '@devShared/images/yogoevent/yogo_logo.png';
import img_season2 from '@devShared/images/yogoevent/yogo_season2_logo.png';
import benefit_up from '@devShared/images/yogoevent/yogoevent_benefit_up.png';
import arrow_down from '@devShared/images/arrow_down_simple.svg';
import { yogoevent_benefits } from '@dev/shared/images';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';

type DivPropsTypes = ComponentPropsWithoutRef<'div'>;

interface BenefitBoxPropsType {
    src: string;
    width: number;
    height: number;
    boxProps: {
        fontColor: string;
        borderGradient: string;
        bgGradient: string;
        arrowColor: string;
        text: string;
    };
    children?: React.ReactNode;
}

function YogoeventBenefit_1() {
    const [selectedId, setSelectedId] = useState(-1);

    useEffect(() => {
        const selectedSection = document.getElementById(`${selectedId}`);
        if (selectedSection) {
            const rect = selectedSection.getBoundingClientRect();
            window.scrollTo({
                top: rect.top + window.scrollY - 65,
                behavior: 'smooth', // 부드러운 스크롤을 유지
            });
        }
    }, [selectedId]);

    const boxPropsArr = [
        {
            fontColor: 'text-[#a569af]',
            borderGradient: 'bg-gradient-to-b from-[#aadcdd] to-[#e5c3e8]',
            bgGradient: 'bg-gradient-to-b from-[#f7fbfc] to-[#faf3fb]',
            arrowColor:
                'invert(96%) sepia(63%) saturate(778%) hue-rotate(228deg) brightness(90%) contrast(96%)',
            text: '초이스 + 플러스',
        },
        {
            fontColor: 'text-[#627ba3]',
            borderGradient: 'bg-gradient-to-b from-[#ded2f8] to-[#b4caf1]',
            bgGradient: 'bg-gradient-to-b from-[#fbfaff] to-[#f1fbfd]',
            arrowColor:
                'invert(77%) sepia(6%) saturate(3022%) hue-rotate(189deg) brightness(98%) contrast(91%)',
            text: '데이터 추가 혜택',
        },
        {
            fontColor: 'text-[#dc8f85]',
            borderGradient: 'bg-gradient-to-b from-[#a6a8db] to-[#fadeb9]',
            bgGradient: 'bg-gradient-to-b from-[#f7f6fc] to-[#fdf8f2]',
            arrowColor:
                'invert(82%) sepia(4%) saturate(1728%) hue-rotate(346deg) brightness(101%) contrast(94%)',
            text: '멤버십 프로모션',
        },
        {
            fontColor: 'text-[#8383bf]',
            borderGradient: 'bg-gradient-to-b from-[#f6bad4] to-[#bcbbf7]',
            bgGradient: 'bg-gradient-to-b from-[#fef8fa] to-[#f8f5fe]',
            arrowColor:
                'invert(67%) sepia(83%) saturate(187%) hue-rotate(203deg) brightness(95%) contrast(91%)',
            text: 'KT 쿠폰팩 혜택',
        },
    ];
    return (
        <section className="flex-col-center gap-8 p-8">
            <div className="flex-con-center">
                <div className="flex-row-center items-start gap-1 w-full h-fit">
                    <Image
                        src={img_season2}
                        alt="요고뭉치시즌2로고"
                        width={80}
                        height={28}
                    />
                    <span className="font-neo-hv text-2xl">에 가입하고</span>
                </div>
                <div className="flex-row-center items-start gap-1 w-full h-fit">
                    <Image
                        src={img}
                        alt="요고뭉치로고"
                        width={50}
                        height={28}
                    />
                    <span className="font-neo-hv text-2xl">
                        는 놓치면 안됨!
                    </span>
                </div>
            </div>
            <div className="flex-row-center flex-wrap gap-x-6 gap-y-3">
                {yogoevent_benefits.map((img, idx) => {
                    const { src, width, height } = img;
                    const boxProps = boxPropsArr[idx];
                    return (
                        <BenefitsBox
                            key={idx}
                            src={src}
                            width={width}
                            height={height}
                            boxProps={boxProps}
                            onClick={() => setSelectedId(idx)}
                        >
                            {idx === 0 && (
                                <Image
                                    src={benefit_up}
                                    alt="혜택UP"
                                    width={65}
                                    height={35}
                                    className="absolute -top-4"
                                />
                            )}
                        </BenefitsBox>
                    );
                })}
            </div>
        </section>
    );
}

const BenefitsBox = ({
    src,
    width,
    height,
    boxProps,
    children,
    ...props
}: BenefitBoxPropsType & DivPropsTypes) => {
    const { fontColor, borderGradient, bgGradient, arrowColor, text } =
        boxProps;
    return (
        <div
            className="relative flex-col-center justify-center gap-2"
            {...props}
        >
            {children}

            <div
                className={twMerge(
                    'flex-row-center items-center rounded-3xl p-0.5',
                    borderGradient
                )}
            >
                <div
                    className={twMerge(
                        'flex-col-center justifty-center rounded-3xl p-4',
                        bgGradient
                    )}
                >
                    <Image
                        src={src}
                        alt=""
                        width={width / 2}
                        height={height / 2}
                    />
                    <p className={twMerge('font-neo-rg text-sm', fontColor)}>
                        {text}
                    </p>
                </div>
            </div>
            <Image
                src={arrow_down}
                alt="화살표"
                width={30}
                height={30}
                style={{
                    filter: arrowColor,
                }}
            ></Image>
        </div>
    );
};

export default YogoeventBenefit_1;
