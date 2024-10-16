import PlanComparisonBox from './planComparisonBox';
import yogoComparisionImage1 from '@dev/shared/images/subscriptionImage/yogo_comparision_image1.png';

export default function PlanComparisonBoxTable() {
    return (
        <div className="flex justify-evenly">
            <PlanComparisonBox
                title="알뜰폰 A사"
                titleColor="bg-[#CCCCCC]"
                networkType="LTE"
                data="71GB"
                dataDetails={<>(11GB + 일 2GB)</>}
                price="33,000원"
                benefits={['불가능']}
                backgroundColor="bg-[#F5F5F5]" // 배경 색상 지정
            />
            <div className="text-[#99998D] text-[13px] font-bold flex flex-col">
                <p className="flex justify-center items-center h-[50px] text-[16px]">
                    VS
                </p>
                <p className="flex justify-center items-center h-[50px]"></p>
                <p className="flex justify-center items-center h-[120px]">
                    데이터
                </p>
                <p className="flex justify-center items-center h-[50px]">
                    월 요금
                </p>
                <p className="flex justify-center items-center h-[70px]">
                    멤버십
                </p>
                <p className="flex justify-center items-center h-[130px]">
                    결합
                    <br />
                    할인
                </p>
                <p className="flex justify-center items-center h-[100px]">
                    쿠폰팩
                </p>
            </div>
            <PlanComparisonBox
                imageSrc={yogoComparisionImage1}
                imageAlt="Yogo Comparision Image1"
                title="요고40"
                subtitle="시즌2"
                titleColor="bg-[#01CBB3]"
                networkType="5G"
                data="90GB"
                dataDetails={
                    <>
                        기본 30GB <br /> + 추가 데이터 30GB <br /> Y덤 30GB
                    </>
                }
                price="40,000원"
                benefitTags={['추가 혜택', '추가 혜택', '추가 혜택']}
                benefits={[
                    'VIP',
                    <>
                        모든 유무선 결합,
                        <br />
                        무선끼리도 결합 가능
                        <br />
                        <span className="font-normal text-[11px]">
                            인터넷 최대 5,500원 할인
                        </span>
                    </>,
                    <>
                        월 2,000원
                        <br />
                        쿠폰 제공
                    </>,
                ]}
                backgroundColor="bg-[#E3FDFA]"
                className="font-bold"
            />
        </div>
    );
}
