export default function CouponInfoTitle() {
    return (
        <div className="flex flex-col items-center pt-10 mb-5 gap-3">
            <div className="flex items-center gap-1">
                <div className="relative">
                    <p className="text-center">원하는 인기 제휴사 쿠폰팩과</p>
                    <p className="font-bold text-[25px] relative z-10">
                        스타벅스 커피 쿠폰 매 달 증정!
                    </p>
                    <div className="w-[295px] h-[10px] bg-[#9BFFF5] absolute bottom-[5px] z-0"></div>
                </div>
            </div>
            <p className="text-[15px]">
                <span className="font-bold text-[15px]">대상 : </span>
                KT닷컴에서 5G 요고 요금제 개통한 고객님
            </p>
            <p className="text-[12px] text-[#898783]">
                * 본 이벤트는 제휴사의 사정에 따라 조기 종료 될 수 있습니다.
            </p>
        </div>
    );
}
