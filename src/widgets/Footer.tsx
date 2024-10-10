const Footer = () => {
    return (
        <div className="flex flex-col w-full bg-[#F2F2F2] text-[#666666] gap-[11px]">
            <h1 className={'text-[15px]'}>
                <strong>KT 공식 온라인샵</strong>
            </h1>
            <div className={'flex flex-col w-full  text-[13px] gap-[11px]'}>
                <div>
                    <p className={'break-words whitespace-pre-wrap'}>
                        (주) 케이티 대표이사 김영섭 사업자등록번호 :
                        102-81-42945 통신판매업신고 : 2002-경기성남-0048
                        <a
                            className={'text-decoration: underline ml-1'}
                            href={'https://www.ftc.go.kr/bizCommPopView.do'}
                        >
                            사업자정보확인
                        </a>
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
                    휴대폰 상담 평일09시~18시, 토요일09시~12시(내선번호 1번) |
                    인터넷/TV 상담 평일09시~18시 (내선번호 2번) | 액세서리상담
                    평일09시~18시 (내선번호 3번) [5시핫딜 응모/당첨/배송 문의] :
                    080-515-9004
                </p>
                <p>
                    고객센터 : [모바일]휴대폰+114(무료), 1588-0010(유료)
                    [인터넷/TV/전화] 유선전화 (국번없이)100,
                    휴대폰(지역번호)+100, 1514(발신전용), 1524(발신전용)
                </p>
                <p>Copyrightⓒ kt corp. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
