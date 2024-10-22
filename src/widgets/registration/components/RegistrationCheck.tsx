import Image from 'next/image';
import RegisBg from '@devShared/images/bg_dual.png';
import { ReactComponent as Check } from '@devShared/svg/check-solid.svg';
import Divider from '@dev/shared/components/Divider';

export default function RegistrationCheck() {
    return (
        <article className="pt-14 ">
            <div className="bg-[#ECF5F8]  h-[46.875rem] w-[25rem]">
                <div className=" flex flex-col justify-center items-center">
                    <Image
                        className="absolute top-[34rem]"
                        src={RegisBg}
                        width={400}
                        alt="img"
                    />

                    <div className="flex flex-col justify-center items-center text-[1.125.rem] font-semibold pt-48">
                        <p>요고 요금제를</p>
                        <p>변경하기 전 확인해 주세요.</p>
                    </div>

                    <span className="pt-2">
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                        - - -
                    </span>

                    <div className="flex flex-col w-[18.75rem]">
                        <div className="flex justify-center gap-4 pt-4">
                            <Check />
                            <div className="text-[0.875rem] font-semibold">
                                <p>
                                    기존 KT를 사용하시는 고객님들이 핸드폰 등록
                                    후 요고 요금제로 변경할 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <Divider className="mt-4" />

                        <div className="flex justify-center gap-4 pt-4">
                            <Check />
                            <div className="text-[0.875rem] font-semibold">
                                <p>
                                    현재 사용 중인 핸드폰으로는 요고 요금제
                                    변경이 불가합니다.
                                </p>
                            </div>
                        </div>
                        <Divider className="mt-4" />

                        <div className="flex justify-center gap-4 pt-4">
                            <Check />
                            <div className="text-[0.875rem] font-semibold">
                                <p>
                                    현재 고객님의 약정이 만료된 상태에서 신청
                                    가능합니다.
                                </p>
                                <p className="text-[0.75rem] font-medium text-slate-500">
                                    (위약금 납부 시 가입가능)
                                </p>
                            </div>
                        </div>
                        <Divider className="mt-4" />

                        <div className="flex justify-center gap-4 pt-4">
                            <Check />
                            <div className="text-[0.875rem] font-semibold">
                                <p>
                                    미사용 상태의 중고폰/자급제 핸드폰(공기계)이
                                    준비되어야 합니다.
                                </p>
                                <p className="text-[0.75rem] font-medium text-slate-500">
                                    (KT에서 출고된 단말기 사용불가)
                                </p>
                            </div>
                        </div>
                        <Divider className="mt-4" />

                        <div className="flex justify-center gap-4 pt-4">
                            <Check />
                            <div className="text-[0.875rem] font-semibold">
                                <p>
                                    요금제 변경 시 가입되어 있는 결합 할인
                                    금액이 변경될 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
