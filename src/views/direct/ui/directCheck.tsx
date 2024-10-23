import DirectCheckItem from '@dev/widgets/direct/components/directCheckItem';

export default function DirectCheck() {
    return (
        <div className="mt-8 mb-5 p-4 mx-auto w-calc-92">
            <p className="flex justify-center font-bold mb-5 text-[25px]">
                꼭 확인하세요!
            </p>
            <ul className="flex flex-col gap-2 py-4 border-t-[4px] border-t-black border-b-[2px] border-b-[#D9D9D9] list-none">
                <DirectCheckItem>
                    요고 요금제는 온라인 전용 요금제로, KT닷컴에서만 가입
                    가능하며
                    <br />
                    일반 대리점 및 플라자에서는 가입이 불가능합니다.
                </DirectCheckItem>
                <DirectCheckItem>
                    가입,변경 시점부터 요금 월정액 및 기본 제공 데이터량을
                    <br />
                    일별 계산하여 부과 혹은 제공 됩니다.
                </DirectCheckItem>
                <DirectCheckItem>
                    요고 다이렉트에 가입하시려면 기존 약정은 해지하셔야 하며,
                    <br />
                    해지 시 위약금이 발생할 수 있습니다.
                </DirectCheckItem>
                <DirectCheckItem>
                    요고 다이렉트는 무약정으로 공시지원금 혹은
                    <br />
                    요금할인 대상이 아닙니다.
                </DirectCheckItem>
                <DirectCheckItem>
                    미납 혹은 회선 초과 등의 이유로 개통이 제한될 수 있으며
                    <br />
                    이런 경우 별도 연락을 드립니다.
                </DirectCheckItem>
                <DirectCheckItem>
                    동일한 회선번호로 중복 주문은 불가합니다.
                </DirectCheckItem>
            </ul>
        </div>
    );
}
