import VideoPlayer from '@dev/shared/components/VideoPlayer';
import { urls } from '@dev/shared/constants/yogoevent/url';

function YogoeventVideoBottom() {
    return (
        <div className="flex-row-center w-full h-fit gap-1 py-6 bg-[#F1FFFF]">
            <VideoDiv src={urls.youtube.videoBottom_1}>
                요고 69 (시즌 2)
            </VideoDiv>
            <VideoDiv src={urls.youtube.videoBottom_2}>
                요고 30 (시즌 2)
            </VideoDiv>
        </div>
    );
}

const VideoDiv = ({
    src,
    children,
}: {
    src: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="flex-col-center gap-3">
            <VideoPlayer src={src} />
            <p className="w-40 font-neo-eb text-sm text-center text-[#00CBB3]">
                {children}
            </p>
        </div>
    );
};
export default YogoeventVideoBottom;
