import Image from 'next/image';
import Bg1 from '@devShared/images/directPayment_1.png';
import Bg2 from '@devShared/images/directPayment_2.png';
import BgLine from '@devShared/images/bg_jum_line.png';

export default function RegistrationChange() {
    return (
        <>
            <article className="pt-14">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg font-bold">요고 요금제 변경 방법</p>

                    <div className="pt-4">
                        <div className="bg-[#F7F7F7] w-[20rem] h-[18rem] rounded-2xl flex flex-col pl-10">
                            <div className="flex items-center gap-4 text-xs pt-8">
                                <Image
                                    className="pb-8"
                                    src={Bg1}
                                    width={60}
                                    height={60}
                                    alt="img"
                                />
                                <div className="flex flex-col justify-center gap-2">
                                    <div className="flex justify-center items-center bg-[#525252] rounded-lg w-[3.8rem] h-[1.4rem]">
                                        <span className="text-[0.7rem] text-white font-semibold">
                                            STEP 01
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <p>기기변경할</p>
                                            <p>핸드폰(자급제 및중고폰) 등록</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-6 flex gap-12">
                                <Image
                                    className="pb-8"
                                    src={BgLine}
                                    width={3.5}
                                    height={3.5}
                                    alt="img"
                                />
                                <p className="text-[0.65rem] w-[12rem]">
                                    KT에서 출고된 핸드폰은 요고 요금제 변경이
                                    불가합니다.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image
                                    src={Bg2}
                                    width={60}
                                    height={60}
                                    alt="img"
                                />
                                <div className="flex flex-col text-xs gap-2">
                                    <div className="flex justify-center items-center bg-[#525252] rounded-lg w-[3.8rem] h-[1.4rem]">
                                        <span className="text-[0.7rem] text-white font-semibold">
                                            STEP 02
                                        </span>
                                    </div>
                                    <p>요금제 변경 신청</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
