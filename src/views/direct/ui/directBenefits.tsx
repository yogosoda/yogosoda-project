import Image from 'next/image';
import yogoLogo from '@dev/shared/images/directImage/yogo_logo.png';
import yogoBenefitsImage7 from '@dev/shared/images/directImage/yogo_benefits_image7.png';
import yogoBenefitsImage8 from '@dev/shared/images/directImage/yogo_benefits_image8.png';
import yogoBenefitsImage9 from '@dev/shared/images/directImage/yogo_benefits_image9.png';
import yogoBenefitsImage10 from '@dev/shared/images/directImage/yogo_benefits_image10.png';
import yogoBenefitsImage11 from '@dev/shared/images/directImage/yogo_benefits_image11.png';
import yogoBenefitsImage12 from '@dev/shared/images/directImage/yogo_benefits_image12.png';
import yogoBenefitsImage13 from '@dev/shared/images/directImage/yogo_benefits_image13.png';
import DirectBenefitsTop from '@dev/widgets/direct/directBenefitsTop';
import DirectBenefitsRow from '@dev/widgets/direct/directBenefitsRow';
import DirectBenefitsBottom from '@dev/widgets/direct/directBenefitsBottom';

const benefitsData = [
    [
        {
            imageSrc: yogoBenefitsImage7,
            imageAlt: 'Yogo Benefits Image 7',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    언제 어디서나 간편하게
                    <br />
                    KT닷컴에서 가입
                </>
            ),
        },
        {
            imageSrc: yogoBenefitsImage8,
            imageAlt: 'Yogo Benefits Image 8',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    요금은 42% Down
                    <br />
                    약정부담 NO
                </>
            ),
        },
    ],
    [
        {
            imageSrc: yogoBenefitsImage9,
            imageAlt: 'Yogo Benefits Image 9',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    34세 이하 Y라면
                    <br />
                    데이터 2배 더!
                </>
            ),
        },
        {
            imageSrc: yogoBenefitsImage10,
            imageAlt: 'Yogo Benefits Image 10',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    결합할인? OK
                    <br />
                    KT멤버쉽? OK
                </>
            ),
        },
    ],
    [
        {
            imageSrc: yogoBenefitsImage11,
            imageAlt: 'Yogo Benefits Image 11',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    데이터는 5GB 단위로
                    <br />
                    필요한 만큼만 촘촘하게
                </>
            ),
        },
        {
            imageSrc: yogoBenefitsImage12,
            imageAlt: 'Yogo Benefits Image 12',
            imageWidth: 100,
            imageHeight: 100,
            text: (
                <>
                    OTT와 스마트기기를
                    <br />
                    요고 하나로 종결!
                </>
            ),
        },
    ],
];

export default function DirectBenefits() {
    return (
        <div className="w-[100%] bg-gray-200 bg-gradient-to-r from-[#eceef9] to-[#f6f1ed] h-[fit]">
            <div className="flex flex-col items-center pt-10 mb-5">
                <p className="font-bold">
                    KT닷컴에서만 만날 수 있는 온라인 전용 요금제
                </p>
                <div className="flex items-center gap-1">
                    <Image
                        src={yogoLogo}
                        alt="Yogo Logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-[25px]">요금제</p>
                </div>
                <p className="font-bold text-[20px]">무엇이 좋은가요?</p>
            </div>
            <DirectBenefitsTop />
            {benefitsData.map((benefits, index) => (
                <DirectBenefitsRow
                    key={index}
                    left={`${13 + index * 2}px`} // left값을 동적으로 조정
                    className="text-[12px] text-center mb-3"
                    benefits={benefits}
                />
            ))}
            <DirectBenefitsBottom
                width="300px"
                height="160px"
                imageWidth={180}
                top="-45px"
                left="55px"
                className="text-[12px] text-center mb-[15px]"
                imageSrc={yogoBenefitsImage13}
                imageAlt="Yogo Benefits Image 13"
                text={
                    <>
                        핸드폰/인터넷/TV 모두{' '}
                        <span className="text-[#00A7A0]">요고</span>로{' '}
                        <span className="text-[#00A7A0]">뭉치</span>면
                        <br />
                        통신비 최대 32% 할인!
                    </>
                }
            />
        </div>
    );
}
