import Image from 'next/image';
import RegisOtherBg from '@devShared/images/bg_otherCarrier.png';

import { twMerge } from 'tailwind-merge';
import { ReactComponent as RightArrow } from '@devShared/svg/chevron-right-solid.svg';
import RegistrationButton from '@devShared/components/button';

export default function RegistrationUsing() {
    return (
        <>
            <article className="flex flex-col gap-4">
                <div className="bg-[#F6F4EA]  h-[34.375rem] w-[25rem]">
                    <Image src={RegisOtherBg} width={400} alt="img" />

                    <div className="flex flex-col justify-center items-center font-bold">
                        <p>타 통신사 고객님이</p>
                        <p>요고 요금제를 사용하고 싶으시다면 ♥</p>
                    </div>
                    <div className="flex flex-col pt-6 gap-4">
                        <div className="flex justify-around items-center bg-white w-[22rem] h-[6rem] rounded-2xl mx-auto">
                            <div className="text-sm">
                                <p className="text-[#15A6A1]">
                                    사용하시는 폰이 있다면,
                                </p>
                                <p>요고 요금제만 가입하기</p>
                            </div>
                            <RegistrationButton
                                className={twMerge(
                                    'text-sm font-semibold w-[9rem] h-[2.5rem]'
                                )}
                            >
                                <div className=" flex justify-between items-center ">
                                    <span>USIM 개통하기</span>
                                    <div className="pl-2">
                                        <RightArrow
                                            width={14}
                                            height={14}
                                            fill="white"
                                        />
                                    </div>
                                </div>
                            </RegistrationButton>
                        </div>

                        <div className="flex justify-around items-center bg-white w-[22rem] h-[6rem] rounded-2xl mx-auto">
                            <div className="text-sm">
                                <p className="text-[#15A6A1]">
                                    새 핸드폰 구매하며
                                </p>
                                <p>요고 요금제 가입하기</p>
                            </div>
                            <RegistrationButton
                                className={twMerge(
                                    'text-sm font-semibold w-[9rem] h-[2.5rem]'
                                )}
                            >
                                <div className=" flex justify-between items-center ">
                                    <span>핸드폰 보러가기</span>
                                    <div className="pl-2">
                                        <RightArrow
                                            width={14}
                                            height={14}
                                            fill="white"
                                        />
                                    </div>
                                </div>
                            </RegistrationButton>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
