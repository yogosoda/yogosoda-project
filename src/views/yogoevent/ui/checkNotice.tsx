'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CheckNotice() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);

    return (
        <div className="w-full pt-[30px]">
            <div className="flex justify-center items-center gap-2 mb-[25px]">
                <Image
                    src="https://image.shop.kt.com/upload/editor/display/event_galS105G_0305_m_icon_note.png"
                    alt="Notice Icon"
                    width={20}
                    height={20}
                />
                <p>꼭 확인하세요.</p>
            </div>
            <ul>
                <li className="relative leading-[30px] text-[#333]">
                    <div
                        className="bg-[#e9e9e9] py-[20px] px-[25px] border-t border-[#666] flex items-center justify-between cursor-pointer"
                        onClick={() => setShowDetails1(!showDetails1)}
                        aria-expanded={showDetails1}
                    >
                        ※ 요고 요금제 유의사항
                        <Image
                            src={
                                showDetails1
                                    ? 'https://image.shop.kt.com/upload/editor/display/pc_event1152_gals105G_close.gif' // Close 아이콘
                                    : 'https://image.shop.kt.com/upload/editor/display/pc_event1152_gals105G_open.gif'
                            } // Open 아이콘
                            alt={
                                showDetails1
                                    ? 'Close details'
                                    : 'Expand details'
                            }
                            width={20}
                            height={20}
                        />
                    </div>
                    {showDetails1 && (
                        <div>
                            <ul className="list-disc pl-5 text-[15px] mt-5 mb-8 px-[20px]">
                                <li>
                                    KT닷컴에서만 가입 가능한 온라인 전용
                                    요금제입니다.
                                </li>
                                <li>
                                    본 요금제는 약정이 없는 요금제로 약정 혜택을
                                    받을 수 없습니다.
                                </li>
                                <li>
                                    약정이 만료된 고객님만 가입이 가능합니다.
                                </li>
                                <li>
                                    요금제를 월 중 가입 또는 변경하는 경우,
                                    월정액을 일자 별 계산하여 제공합니다.
                                </li>
                                <li>
                                    결합 할인 서비스는 결합상품 페이지 및 결합
                                    약관을 참고하시기 바랍니다.
                                </li>
                                <li>
                                    초이스/플러스 혜택은 최대 24개월간
                                    제공됩니다.
                                </li>
                                <li>혜택은 각 월 1회 변경 가능합니다.</li>
                                <li>
                                    부가/기타 서비스의 상세 내용은 KT닷컴 내
                                    서비스별 안내 페이지를 참고하세요.
                                </li>
                                <li>
                                    이용하시는 요금제에 따라 혜택이 제공됩니다.
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
                <li className="relative text-[18px] leading-[30px] text-[#333]">
                    <div
                        className="bg-[#e9e9e9] py-[20px] px-[25px] border-t border-[#666] flex items-center justify-between cursor-pointer"
                        onClick={() => setShowDetails2(!showDetails2)}
                        aria-expanded={showDetails2}
                    >
                        ※ 스타벅스 커피 이벤트 유의사항
                        <Image
                            src={
                                showDetails2
                                    ? 'https://image.shop.kt.com/upload/editor/display/pc_event1152_gals105G_close.gif' // Close 아이콘
                                    : 'https://image.shop.kt.com/upload/editor/display/pc_event1152_gals105G_open.gif'
                            } // Open 아이콘
                            alt={
                                showDetails2
                                    ? 'Close details'
                                    : 'Expand details'
                            }
                            width={20}
                            height={20}
                        />
                    </div>
                    {showDetails2 && (
                        <div>
                            <ul className="list-disc pl-5 text-[15px] mt-5 mb-8 px-[20px]">
                                <li>
                                    KT닷컴에서 8월 24일부터 요고 요금제로 개통한
                                    고객님 대상입니다.
                                </li>
                                <li>
                                    스타벅스 쿠폰 발송일은 개통 완료 후 최대
                                    24개월까지 매월 스타벅스 이용권 추가
                                    증정입니다.
                                </li>
                                <li>
                                    기본적으로 선택하는 쿠폰팩 외에 추가로
                                    증정하는 이벤트입니다.
                                </li>
                                <li>
                                    이벤트는 요고 요금제로 개통하고 유지 시 최대
                                    24개월 제공됩니다.
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}
