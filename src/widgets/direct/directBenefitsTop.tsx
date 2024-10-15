import Box from '@dev/shared/components/box';
import Image from 'next/image';
import yogoBenefitsImage1 from '@dev/shared/images/directImage/yogo_benefits_image1.png';
import yogoBenefitsImage2 from '@dev/shared/images/directImage/yogo_benefits_image2.png';
import yogoBenefitsImage3 from '@dev/shared/images/directImage/yogo_benefits_image3.png';
import yogoBenefitsImage4 from '@dev/shared/images/directImage/yogo_benefits_image4.png';
import yogoBenefitsImage5 from '@dev/shared/images/directImage/yogo_benefits_image5.png';
import yogoBenefitsImage6 from '@dev/shared/images/directImage/yogo_benefits_image6.png';
import DirectBenefitsTopRow from './directBenefitsTopRow';
import DirectBenefitsBox from './directBenefitsBox';

export default function DirectBenefitsTop() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
            <Box
                width="300px"
                height="570px"
                borderRadius="15px"
                borderColor="#D6E7F7"
                className="flex flex-col text-center"
            >
                <Image
                    src={yogoBenefitsImage1}
                    alt="Yogo Benefits Image1"
                    width={100}
                    height={100}
                    className="mx-auto mt-6"
                />
                <p className="mb-5 font-bold text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#01CBB3] via-[#31c9cf] to-[#365DFD]">
                    이렇게 더 좋아졌어요!
                </p>
                <DirectBenefitsTopRow
                    imageSrc={yogoBenefitsImage2}
                    imageAlt="Yogo Benefits Image2"
                >
                    <p>
                        새로운 OTT
                        <br />
                        <span className="text-[#355EFE] font-cafe">
                            유튜브 프리미엄 할인{' '}
                        </span>
                        혜택 추가!
                    </p>
                </DirectBenefitsTopRow>
                <DirectBenefitsTopRow
                    imageSrc={yogoBenefitsImage3}
                    imageAlt="Yogo Benefits Image3"
                >
                    <p>
                        전 구간 요금제에
                        <br />
                        <span className="text-[#355EFE] font-cafe">
                            티빙 무료 제공
                        </span>
                        은 오직 요고뿐!
                    </p>
                </DirectBenefitsTopRow>
                <DirectBenefitsTopRow
                    imageSrc={yogoBenefitsImage4}
                    imageAlt="Yogo Benefits Image4"
                >
                    <p>
                        <span className="text-[#355EFE] font-cafe">
                            디바이스 100% 할인 혜택
                        </span>
                        <br />
                        요고 55까지 확대 적용!
                    </p>
                </DirectBenefitsTopRow>
                <DirectBenefitsTopRow
                    imageSrc={yogoBenefitsImage5}
                    imageAlt="Yogo Benefits Image5"
                >
                    <p>
                        데이터 추가 제공 프로모션과 멤버쉽 혜택
                        <br />
                        <span className="text-[#355EFE] font-cafe">
                            한번 더 연장!
                        </span>
                    </p>
                </DirectBenefitsTopRow>
                <div className="mx-auto mt-[80px]">
                    <DirectBenefitsBox
                        width="250px"
                        height="110px"
                        borderColor="#F8F8F8"
                        backgroundColor="#F8F8F8"
                        imageSrc={yogoBenefitsImage6}
                        imageAlt="Yogo Benefits Image6"
                        imageWidth={120}
                        imageHeight={70}
                        top="-75px"
                        text={
                            <>
                                <div className="mb-3 flex flex-col gap-2">
                                    <span className="text-[9px]">
                                        <p>더욱 다양해진 혜택 선택으로</p>
                                        <p>
                                            OTT/스마트기기/멤버쉽까지 모두
                                            즐겨요!
                                        </p>
                                    </span>
                                    <p className="text-[12px]">
                                        나에게 딱 맞는{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01CBB3] to-[#365DFD] font-cafe">
                                            요금제와 혜택
                                        </span>
                                        을 선택해 보세요!
                                    </p>
                                </div>
                            </>
                        }
                        className="flex flex-col text-center"
                    />
                </div>
            </Box>
        </div>
    );
}
