import Image, { StaticImageData } from 'next/image';
import logo from '@devShared/images/yogoevent/yogo_season2_logo.png';
import balloon_black from '@devShared/images/yogo_balloon_black.png';
import balloon_gradient from '@devShared/images/yogo_balloon_gradient.png';
import yogo_asset from '@devShared/images/yogoevent/yogo_asset_img.png';
import { TextBox } from '@dev/shared/components/TextBox';
import { twMerge } from 'tailwind-merge';

function YogoeventImprove() {
    return (
        <div className="flex-col-center w-full p-6 bg-gray-100">
            <div className="flex-row-center items-end gap-1 w-full h-fit mb-6">
                <Image src={logo} alt="요고뭉치로고" width={80} height={28} />
                <span className="font-neo-hv text-xl">이렇게 좋아졌어요!</span>
            </div>
            <Improvements category="NEW" src={balloon_gradient} filter="">
                새로운 OTT&nbsp;
                <span className="font-cafe-sr text-lg text-[#325eff] align-middle">
                    유튜브 프리미엄 할인
                </span>
                &nbsp;혜택 추가!
            </Improvements>
            <Improvements
                category="ONLY"
                src={balloon_black}
                filter="invert(29%) sepia(41%) saturate(6724%) hue-rotate(255deg) brightness(97%) contrast(109%)"
            >
                전 구간 요금제에&nbsp;
                <span className="font-cafe-sr text-lg text-[#8934ff] align-middle">
                    티빙 무료 제공
                </span>
                은 오직 요고뿐!
            </Improvements>
            <Improvements
                category="FREE"
                src={balloon_black}
                filter="invert(48%) sepia(51%) saturate(7382%) hue-rotate(283deg) brightness(85%) contrast(109%)"
            >
                <span className="font-cafe-sr text-lg text-[#ff34ef] align-middle">
                    디바이스 100% 할인
                </span>
                &nbsp;혜택 요고 55까지 확대 적용!
            </Improvements>
            <Improvements
                category="BONUS"
                src={balloon_black}
                filter="invert(29%) sepia(61%) saturate(2479%) hue-rotate(329deg) brightness(80%) contrast(101%)"
            >
                데이터 추가 프로모션과 멤버십&nbsp;
                <span className="font-cafe-sr text-lg text-[#ff3455] align-middle">
                    혜택 한번 더 연장!
                </span>
            </Improvements>
            <ImprovementBanner />
        </div>
    );
}

const Improvements = ({
    category,
    src,
    filter,
    children,
}: {
    category: string;
    src: StaticImageData;
    filter: string;
    children: React.ReactNode;
}) => {
    return (
        <TextBox
            className={twMerge(
                'flex justify-start items-center border-t-gray-300 px-3',
                'font-neo-rg'
            )}
        >
            <div className="flex-row-center items-center gap-4 w-fit h-fit">
                <div className="relative flex-row-center items-center">
                    <Image
                        src={src}
                        alt=""
                        width={104}
                        height={56}
                        style={{
                            filter: filter,
                        }}
                    />
                    <span className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-cafe-sr align-middle text-white">
                        {category}
                    </span>
                </div>
                <p className="font-neo-rg text-sm">{children}</p>
            </div>
        </TextBox>
    );
};

const ImprovementBanner = () => {
    return (
        <div className="w-full h-[325px] px-6 py-8">
            <div className="relative flex-col-center">
                <Image src={yogo_asset} alt="요고이미지" width={200}></Image>
                <div
                    className="relative w-1/4 h-10 z-10"
                    style={{
                        background:
                            'repeating-linear-gradient(-45deg, #74e1fe, #74e1fe 15px, #e41a84 0, #e41a84 35px)',
                    }}
                />
                <div className="absolute flex-col-center gap-1 top-[87.5%] w-full h-fit bg-white pt-8 pb-6 rounded-xl shadow-md">
                    <p className="font-neo-rg text-xs text-center">
                        더욱 다양해진 혜택 선택으로
                        <br />
                        OTT/스마트기기/멤버십까지 모두 즐겨요!
                    </p>
                    <p className="font-neo-eb text-lg text-center">
                        나에게 딱 맞는
                        <span
                            className="font-cafe-sr text-xl"
                            style={{
                                background:
                                    'linear-gradient(to right, #24c7b6, #345bfe)',
                                color: 'transparent',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            요금제와 혜택
                        </span>
                        을
                        <br />
                        선택해 보세요!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default YogoeventImprove;
