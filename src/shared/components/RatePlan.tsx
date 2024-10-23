import Image, { StaticImageData } from 'next/image';
import Box from './box';

export default function RatePlan({
    imageSrc,
    ratePlanName,
    data,
    dataDetail,
    callMessage,
    sharedData,
    memerbership,
    combinedDiscount,
    choiceBenefit,
    plusBenefit,
    smartDevice,
    price,
}: RatePlanProps) {
    return (
        <section>
            <Box className="mb-[15px]" height="fit" width="calc(100vw - 10vw)">
                <div className="flex flex-col relative">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt="Yogo Recommend Image"
                            width={50}
                            height={50}
                            className="absolute top-[-4px] left-[15px]"
                        />
                    )}
                    <p className="w-[90%] font-bold text-center text-[1.2rem] mt-5 mx-auto pb-5 border-b-[2px] border-[#D9D9D9]">
                        {ratePlanName}
                    </p>
                    <div className="w-[90%] my-5 mx-auto pb-5 border-b-[2px] border-[#D9D9D9] flex flex-col gap-2 text-sm">
                        <div className="flex justify-between">
                            <p className="text-[#161616]">데이터</p>
                            <div className="flex flex-col items-end text-right">
                                <p className="font-bold">{data}</p>
                                <p className="text-sm text-[#535353]">
                                    {dataDetail}
                                </p>
                            </div>
                        </div>
                        {callMessage ? (
                            <div className="flex justify-between">
                                <p className="text-[#161616]">전화/문자</p>
                                <p className="font-bold">{callMessage}</p>
                            </div>
                        ) : (
                            <div className="flex justify-between">
                                <p className="text-[#161616]">공유 데이터</p>
                                <p className="font-bold">{sharedData}</p>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <p className="text-[#161616]">KT멤버쉽</p>
                            <p className="font-bold">{memerbership}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#161616]">유무선 결합할인</p>
                            <p className="font-bold">{combinedDiscount}</p>
                        </div>
                    </div>
                    {(choiceBenefit || plusBenefit || smartDevice) && (
                        <div className="w-[90%] mx-auto mb-5 pb-5 border-b-[2px] border-[#D9D9D9] flex flex-col gap-2">
                            {choiceBenefit && (
                                <div className="flex flex-col gap-1 text-xs font-bold">
                                    <p className="text-[#2CB5AF]">
                                        초이스 혜택
                                    </p>
                                    <p className="text-[#525252]">
                                        {choiceBenefit}
                                    </p>
                                </div>
                            )}
                            {plusBenefit && (
                                <div className="flex flex-col gap-1 text-xs font-bold">
                                    <p className="text-[#2CB5AF]">
                                        플러스 혜택
                                    </p>
                                    <p className="text-[#525252]">
                                        {plusBenefit}
                                    </p>
                                </div>
                            )}
                            {smartDevice && (
                                <div className="flex flex-col gap-1 text-xs font-bold">
                                    <p className="text-[#2CB5AF]">
                                        {smartDevice}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                    <p className="w-[90%] mb-5 mx-auto text-right text-[1rem]">
                        월{' '}
                        <span className="font-bold text-[1.2rem]">{price}</span>
                        원
                    </p>
                </div>
            </Box>
        </section>
    );
}

export type RatePlanProps = {
    imageSrc?: StaticImageData;
    ratePlanName: string;
    data: React.ReactNode;
    dataDetail?: string;
    callMessage?: string;
    sharedData?: string;
    memerbership: string;
    combinedDiscount: string;
    choiceBenefit?: React.ReactNode;
    plusBenefit?: string;
    smartDevice?: string;
    price: string;
};
