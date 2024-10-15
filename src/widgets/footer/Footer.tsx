import msit from '@devShared/images/footer/img_award03.png';
import ksa from '@devShared/images/footer/img_award01_0724.png';
import wiseuser from '@devShared/images/footer/logo_wiseuser.png';
import ncsi from '@devShared/images/footer/awards_ncsi.png';
import Image from 'next/image';
import Line from '@devShared/components/Line';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={'bg-[#F2F2F2] '}>
            <Line className={'mb-[15px]'} />
            <div
                className={
                    'flex-with-row min-h-fit items-center justify-between px-[20px]'
                }
            >
                <Link
                    className={'text-[13px]'}
                    href={'https://m.corp.kt.com/html/etc/agreement_02.html'}
                >
                    이용약관
                </Link>
                <Line className={'w-[1px] min-h-[19.5px]'} />
                <Link
                    className={'text-[13px]'}
                    href={'https://m.corp.kt.com/html/etc/privacy.html'}
                >
                    <strong>개인정보 방침</strong>
                </Link>
                <Line className={'w-[1px] min-h-[19.5px]'} />
                <Link
                    className={'text-[13px]'}
                    href={'https://m.shop.kt.com:444/m/support/guarantee.do'}
                >
                    구매안전서비스확인
                </Link>
            </div>
            <Line className={'my-[15px]'} />
            <div
                className={
                    'flex-with-row items-center justify-between px-[20px]'
                }
            >
                <Link
                    href={
                        'https://www.ncsi.or.kr/score/company.asp?sector=N08&industry=N0806'
                    }
                >
                    <Image
                        src={ncsi}
                        alt={
                            '국가고객만족도 1위 초고속인터넷,IPTV,인터넷전화,집전화'
                        }
                        width={80}
                        height={22}
                    />
                </Link>
                <Link href={'https://ks-qei.ksa.or.kr/ks-qei/2384/subview.do'}>
                    <Image
                        src={ksa}
                        alt={'한국품질만족지수 1위 이동전화,초고속인터넷,IPTV'}
                        width={80}
                        height={22}
                    />
                </Link>
                <Link href={'https://wiseuser.go.kr/usermain.do'}>
                    <Image
                        src={wiseuser}
                        alt={'와이즈유저 방송통신이용자정보포털'}
                        width={44}
                        height={22}
                    />
                </Link>
                <Link
                    href={
                        'https://www.webwatch.or.kr/Situation/WA_Situation.html?MenuCD=110'
                    }
                >
                    <Image
                        src={msit}
                        alt={
                            '과학기술정보통신부 WEB ACCESSIBILITY 마크(웹 접근성 품질인증 마크)'
                        }
                        width={94}
                        height={22}
                    />
                </Link>
            </div>
            <Line className={'my-[15px]'} />
            <div className="flex flex-col w-full  text-[#666666] gap-[11px]  pb-[20px] px-[20px]">
                <h1 className={'text-[15px]'}>
                    <strong>KT 공식 온라인샵</strong>
                </h1>
                <div className={'flex flex-col w-full text-[13px] gap-[11px]'}>
                    <div>
                        <p className={'break-words whitespace-pre-wrap'}>
                            (주) 케이티 대표이사 김영섭 사업자등록번호 :
                            102-81-42945 통신판매업신고 : 2002-경기성남-0048
                            <Link
                                className={'text-decoration: underline ml-1'}
                                href={
                                    'https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1028142945&apv_perm_no='
                                }
                            >
                                사업자정보확인
                            </Link>
                        </p>
                        <p>경기도 성남시 분당구 불정로 90 (정자동)</p>
                    </div>
                    <p>
                        <strong>
                            [휴대폰,인터넷/TV 가입문의] : 1588-8001(유료)
                            080-515-9000 (무료),
                        </strong>
                        (점심시간 휴식 12시~13시)
                    </p>
                    <p>
                        휴대폰 상담 평일09시~18시, 토요일09시~12시(내선번호 1번)
                        | 인터넷/TV 상담 평일09시~18시 (내선번호 2번) |
                        액세서리상담 평일09시~18시 (내선번호 3번) [5시핫딜
                        응모/당첨/배송 문의] : 080-515-9004
                    </p>
                    <p>
                        고객센터 : [모바일]휴대폰+114(무료), 1588-0010(유료)
                        [인터넷/TV/전화] 유선전화 (국번없이)100,
                        휴대폰(지역번호)+100, 1514(발신전용), 1524(발신전용)
                    </p>
                    <p>Copyrightⓒ kt corp. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
