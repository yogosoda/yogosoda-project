import { TextBox } from '@dev/shared/components/TextBox';
import { notosansKr } from '@dev/shared/fonts';
import { twMerge } from 'tailwind-merge';

function Yogoevent_Plan_Info() {
    const benefit_data = [
        {
            src: 'bg-[url("../../shared/images/yogoevent_plan/plans_call.png")]',
            alt: '통화',
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent_plan/plans_present.png")]',
            alt: '혜택',
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent_plan/plans_benefit.png")]',
            alt: '추가혜택',
        },
        {
            src: 'bg-[url("../../shared/images/yogoevent_plan/plans_coupon.png")]',
            alt: '쿠폰',
        },
    ];
    return (
        <div
            className={twMerge(
                'flex-col-center w-full h-fit max-h-[360px] rounded-2xl bg-gray-200 px-7 py-3',
                `${notosansKr.className}`
            )}
        >
            <TextBox className="flex-col-center">
                <p className={twMerge('text-2xl font-bold')}>요고 36</p>
            </TextBox>
            <TextBox className="flex flex-col gap-5">
                <div className="flex flex-row justify-start items-center gap-4">
                    <span className="font-bold text-gray-600 text-lg">
                        데이터
                    </span>
                    <div className="relative flex flex-row items-center gap-2">
                        <span className="font-bold text-black text-xl">
                            50GB
                        </span>
                        <span className="font-regular text-gray-500 text-xs">
                            다 쓰면 1mps로 무제한
                        </span>
                        <span className="absolute top-7 text-red-500 text-xs">
                            * 기본 35GB + 프로모션 35GB
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center gap-4">
                    <span className="font-bold text-gray-600 text-lg">
                        월정액
                    </span>
                    <span className="font-bold text-black text-xl">
                        42,000원
                    </span>
                </div>
            </TextBox>
            <TextBox className="flex flex-col border-none gap-3">
                {benefit_data.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-row items-center gap-2"
                        >
                            <div
                                className={twMerge(
                                    'w-6 h-6 rounded-full bg-white',
                                    'bg-center bg-no-repeat bg-cover',
                                    item.src
                                )}
                            ></div>
                            <span className="font-light text-gray-700 text-sm">
                                {item.alt}
                            </span>
                        </div>
                    );
                })}
            </TextBox>
        </div>
    );
}
export default Yogoevent_Plan_Info;
