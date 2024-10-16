import Image from 'next/image';
import yogoLogo from '@dev/shared/images/directImage/yogo_logo.png';
import yogoRecommendImage1 from '@dev/shared/images/directImage/yogo_recommend_image1.png';

export default function DirectRecommend() {
    return (
        <div className="w-[100%] bg-[#F7F4EB] h-[fit]">
            <div className="flex flex-col items-center py-10">
                <p className="font-bold">나에게 맞는</p>
                <div className="flex items-center gap-1 mb-2">
                    <Image
                        src={yogoLogo}
                        alt="Yogo Logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-[25px]">요금제는?</p>
                </div>
                <div className="flex items-center gap-1 mb-2">
                    <Image
                        src={yogoRecommendImage1}
                        alt="Yogo Recommend Image1"
                        width={50}
                        height={50}
                    />
                    <p className="text-[12px]">34세 이하는 데이터 2배 적용!</p>
                </div>
            </div>
        </div>
    );
}
