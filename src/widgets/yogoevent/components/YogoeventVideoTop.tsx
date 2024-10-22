import VideoPlayer from '@dev/shared/components/VideoPlayer';
import logo from '@devShared/images/yogoevent/yogo_season2_logo.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { urls } from '@dev/shared/constants/yogoevent/url';

function YogoeventVideoTop() {
    const background =
        'bg-[url("../../shared/images/yogoevent/yogoevent_vedeo_bg.png")]';
    return (
        <div
            className={twMerge(
                'flex-col-center gap-3 w-full h-fit px-6 pt-12 pb-6 bg-[#F1FFFF] bg-cover bg-no-repeat',
                background
            )}
        >
            <div className="flex-row-center items-end w-full h-fit mb-8">
                <Image src={logo} alt="요고뭉치로고" width={80} height={28} />
                <span className="font-neo-hv text-xl">를 소개합니다!</span>
            </div>
            <VideoPlayer src={urls.youtube.videoTop_1} />
            <p className="w-40 font-neo-eb text-center text-[#00CBB3]">
                요금은 줄이고 혜택은 가득한 요고!!
            </p>
        </div>
    );
}
export default YogoeventVideoTop;
