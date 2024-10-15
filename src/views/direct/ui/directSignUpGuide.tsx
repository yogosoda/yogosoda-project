import Image from 'next/image';
import yogoLogo from '@dev/shared/images/directImage/yogo_logo.png';
import yogoSignUpGuideImage1 from '@dev/shared/images/directImage/yogo_signup_guide_image1.png';
import yogoSignUpGuideImage2 from '@dev/shared/images/directImage/yogo_signup_guide_image2.png';
import yogoSignUpGuideImage3 from '@dev/shared/images/directImage/yogo_signup_guide_image3.png';
import DirectSignUpGuideBox from '@dev/widgets/direct/directSignUpGuideBox';

export default function DirectSignUpGuide() {
    const buttonData1 = [
        {
            text: '핸드폰 보러가기',
            url: 'https://shop.kt.com/mobile/products.do?&=&category=mobile&pplId=0920',
        },
        {
            text: '가입 혜택 보기',
            url: 'https://shop.kt.com/unify/yogoEvent.do',
        },
    ];

    const buttonData2 = [
        {
            text: 'USIM 가입하기',
            url: 'https://shop.kt.com/direct/directUsim.do',
        },
        {
            text: '가입 혜택 보기',
            url: 'https://shop.kt.com/display/olhsPlan.do?plnDispNo=2388',
        },
    ];

    const buttonData3 = [
        {
            text: '핸드폰 등록하기',
            url: 'https://shop.kt.com/direct/directChangeRate.do',
        },
    ];

    return (
        <div className="w-[100%] flex flex-col items-center bg-[#F8F8F8] h-[860px]">
            <div className="flex items-center font-bold gap-1 my-7 mb-4">
                <Image src={yogoLogo} alt="Yogo Logo" width={50} height={50} />
                <p>
                    <span className="text-[23px]">다이렉트 가입은</span>{' '}
                    <span className="text-[20px]">이렇게 하세요.</span>
                </p>
            </div>
            <DirectSignUpGuideBox
                title="새로운 핸드폰이 필요하신 가요?"
                description={
                    <>
                        KT닷컴에서 핸드폰 고르고,
                        <br />
                        요고 다이렉트 요금제로 주문하세요.
                    </>
                }
                buttonData={buttonData1}
                imageSrc={yogoSignUpGuideImage1}
                imageAlt="Yogo SignUp Guide Image1"
            />
            <DirectSignUpGuideBox
                title={
                    <>
                        자급제폰/중고폰은 있고
                        <br />
                        요금제 가입만 원하시나요?
                    </>
                }
                description={
                    <>
                        KT닷컴에서
                        <br />
                        요금제만 가입하세요.
                    </>
                }
                buttonData={buttonData2}
                imageSrc={yogoSignUpGuideImage2}
                imageAlt="Yogo SignUp Guide Image2"
            />
            <DirectSignUpGuideBox
                title={
                    <>
                        KT 고객님!
                        <br />
                        요고 요금제로 바꾸고 싶으신가요?
                    </>
                }
                description={
                    <>
                        사용할 &apos;핸드폰 등록&apos; 후
                        <br />
                        요금제 변경이 가능합니다.
                    </>
                }
                buttonData={buttonData3} // 버튼 없음
                imageSrc={yogoSignUpGuideImage3} // 동일 이미지 사용 가능
                imageAlt="Yogo SignUp Guide Image3"
                height="200px"
            />
        </div>
    );
}
