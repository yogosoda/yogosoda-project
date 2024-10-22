'use client';

import Image from 'next/image';
import img from '@devShared/images/yogoevent/yogo_logo.png';
import img_season2 from '@devShared/images/yogoevent/yogo_season2_logo.png';
import benefit_up from '@devShared/images/yogoevent/yogoevent_benefit_up.png';
import arrow_down from '@devShared/images/arrow_down_simple.svg';
import { yogoevent_benefits } from '@dev/shared/images';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { boxPropsArr } from '@dev/shared/constants/yogoevent/style';

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

// 요고 혜택 설명 컴포넌트입니다
// 각 이미지 컴포넌트를 클릭하면 해당 페이지로 스크롤 합니다
function YogoeventBenefit_1() {
    const [selectedId, setSelectedId] = useState(-1);

    useEffect(() => {
        const selectedSection = document.getElementById(`${selectedId}`);
        if (selectedSection) {
            const rect = selectedSection.getBoundingClientRect();
            window.scrollTo({
                top: rect.top + window.scrollY - 65,
                behavior: 'smooth',
            });
        }
    }, [selectedId]);

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
