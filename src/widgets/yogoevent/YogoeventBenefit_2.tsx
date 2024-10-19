'use client';

import Image from 'next/image';
import HighlitedSpan from '@dev/shared/components/HighlitedSpan';
import { choice_benefits, plus_benefits } from '@dev/shared/images';
import yogoCouponPlus from '@dev/shared/images/subscriptionImage/yogo_coupon_plus.png';
import new_button from '@devShared/images/new_button.png';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { LinkButton } from '@dev/shared/components/LinkButton';

interface ContentBoxProps {
    item: {
        src: string;
        width: number;
        height: number;
    };
    style: {
        bgGradient: string;
        maintext: string;
        subText: string | null;
        link: string | null;
        isNew: boolean;
    };
    className: string;
}

function YogoeventBenefit_2() {
    const boxPropsArr = [
        {
            bgGradient: 'bg-gradient-to-br from-[#fff2ea] to-[#fee8ea]',
            maintext: '유튜브 프리미엄',
            subText: null,
            link: null,
            isNew: true,
        },
        {
            bgGradient: 'bg-gradient-to-br from-[#e4f7fb] to-[#e5edfa]',
            maintext: '디즈니+',
            subText: null,
            link: null,
            isNew: false,
        },
        {
            bgGradient: 'bg-gradient-to-br from-[#e7edf9] to-[#f9ecf5]',
            maintext: '티빙',
            subText: '(베이직, 광고형 스탠다드)',
            link: null,
            isNew: false,
        },
        {
            bgGradient: 'bg-gradient-to-br from-[#efeeec] to-[#f0eceb]',
            maintext: '디바이스 할인',
            subText: '(A/B/Lite형)',
            link: 'https://shop.kt.com/unify/yogoEvent.do#layerPop01',
            isNew: true,
        },
        {
            bgGradient: 'bg-white',
            maintext: '지니뮤직',
            subText: null,
            link: null,
            isNew: false,
        },
        {
            bgGradient: 'bg-white',
            maintext: '밀리의 서재',
            subText: null,
            link: null,
            isNew: false,
        },
        {
            bgGradient: 'bg-white',
            maintext: '블라이스',
            subText: null,
            link: null,
            isNew: false,
        },
    ];

    return (
        <section
            id="0"
            className="flex-col-center w-full h-fit gap-4 bg-[#fefef6] px-4 py-8"
        >
            <div className="flex-col-center w-full h-fit gap-1">
                <SpeechBubble />
                <p className="font-neo-rg">혜택 초이스 하고 또 플러스 하고</p>
                <HighlitedSpan className="font-neo-hv text-2xl">
                    티빙, 디즈니+, 지니뮤직 3개
                </HighlitedSpan>
                <p className="font-neo-hv text-2xl">모~두 무료!</p>
                <p className="font-neo-lt text-xs text-gray-500">
                    요고 69 (시즌 2)
                </p>
                <p className="font-neo-rg text-[13px] mt-2">
                    선택한 초이스/플러스 혜택 요금제 별 6~24개월간 제공
                </p>
            </div>
            <div className="flex-col-center w-full h-fit rounded-3xl bg-white border-[#01cbb3] border-2 overflow-hidden">
                <div className="relative flex-col-center w-full h-fit">
                    <div className="w-fit h-fut px-5 py-1 rounded-b-md bg-[#01cbb3]">
                        <span className="font-neo-eb text-white text-sm">
                            초이스 혜택
                        </span>
                    </div>
                    <div className="flex-row-center flex-wrap py-4">
                        {choice_benefits.map((item, idx) => (
                            <ContentBox
                                key={idx}
                                item={item}
                                style={boxPropsArr[idx]}
                                className="w-1/2 mb-4"
                            ></ContentBox>
                        ))}
                    </div>
                    <Image
                        src={yogoCouponPlus}
                        alt="plus"
                        width={30}
                        height={30}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                    ></Image>
                </div>
                <div className="flex-col-center w-full h-fit bg-[#e0f6f4]">
                    <div className="flex-row-center items-center gap-3 pt-8 pb-4">
                        {plus_benefits.map((item, idx) => (
                            <ContentBox
                                key={idx}
                                item={item}
                                style={boxPropsArr[4 + idx]}
                                className="w-1/3"
                            ></ContentBox>
                        ))}
                    </div>
                    <div className="w-fit h-fut px-5 py-1 rounded-t-md bg-[#01cbb3]">
                        <span className="font-neo-eb text-white text-sm">
                            플러스 혜택
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-col-center w-full gap-2">
                <LinkButton
                    link="https://product.kt.com/wDic/productDetail.do?ItemCode=1567&benefit=season2&_ga=2.183259238.1990336362.1728868213-20960216.1717459451"
                    className="w-3/4 my-2"
                >
                    혜택 자세히 보기
                </LinkButton>
                <div className="flex flex-col items-start font-neo-rg text-[10px] text-gray-500">
                    <p>※ 디바이스 할인B는 초이스 혜택 1개만 제공됩니다.</p>
                    <p>
                        ※ 유튜브 프리미엄은 월정액 외 5000원이 추가 과금됩니다.
                    </p>
                    <p>
                        ※ 요고 30~55는 티빙 광고형, 요고 61,69는 티빙 베이직이
                        제공됩니다
                    </p>
                </div>
            </div>
        </section>
    );
}

const SpeechBubble = () => {
    return (
        <div className="flex-col-center mb-1">
            <div className="relative flex-row-center items-center w-fit h-fit bg-blue-600 rounded-2xl px-8 py-1">
                <p className="font-cafe text-white">
                    더욱 강력해진 시즌 2 혜택
                </p>
            </div>
            <div className="w-0 h-0 border-solid border-t-8 border-x-[6px] border-b-0 border-t-[#345eff] border-x-transparent"></div>
        </div>
    );
};

const ContentBox = ({ item, style, className }: ContentBoxProps) => {
    const { src, width, height } = item;
    const { bgGradient, maintext, subText, link, isNew } = style;
    return (
        <div className={twMerge('relative flex-col-center', className)}>
            {isNew && (
                <Image
                    src={new_button}
                    alt="new"
                    width={30}
                    height={30}
                    className="absolute right-8"
                />
            )}
            <div
                className={twMerge(
                    'flex-col-center justify-center w-30 h-30 rounded-full mb-2 p-5',
                    bgGradient
                )}
            >
                <Image
                    src={src}
                    alt=""
                    width={width / 2}
                    height={height / 2}
                ></Image>
            </div>
            <p className="font-neo-eb">
                {maintext}
                {link && subText && (
                    <span className="font-neo-lt text-xs">{subText}</span>
                )}
            </p>
            {!link && subText && (
                <p className="font-neo-lt text-sm">{subText}</p>
            )}
            {link && (
                <Link
                    href={link}
                    className="font-neo-rg text-sm border-b-[1px] border-black"
                >
                    디바이스 확인하기 &gt;
                </Link>
            )}
        </div>
    );
};
export default YogoeventBenefit_2;
