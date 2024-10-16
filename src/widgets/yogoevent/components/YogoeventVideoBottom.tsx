import VideoPlayer from '@dev/shared/components/VideoPlayer';

function YogoeventVideoBottom() {
    return (
        <div className="flex-row-center w-full h-fit gap-1 py-6 bg-[#F1FFFF]">
            <VideoDiv src="https://www.youtube.com/embed/RStVl4lilxM?si=8mvWveBryt-NNAZG">
                요고 69 (시즌 2)
            </VideoDiv>
            <VideoDiv src="https://www.youtube.com/embed/bxFI64dzg1E?si=6JKtXgIOH7B-IPUZ">
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
