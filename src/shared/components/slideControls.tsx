import Image from 'next/image';
import playPauseButton from '@dev/shared/images/directImage/play-and-pause-button.png';
import videoStopButton from '@dev/shared/images/directImage/video-stop.png';
import { SlideControlsProps } from '../types/component.type';

export default function SlideControls({
    currentIndex,
    totalSlides,
    onPrev,
    onNext,
    onPause,
    isPaused,
}: SlideControlsProps) {
    return (
        <div className="flex items-center justify-evenly absolute bottom-[20px] left-[30px] w-[115px] z-10">
            {/* 전 슬라이드로 이동 */}
            <button
                onClick={onPrev}
                className="w-[20px] h-[20px] flex items-center justify-center text-[10px] font-bold border border-[#D9D9D9] text-[#A6A6A6] rounded-[5px]"
            >
                {'◀︎'}
            </button>
            {/* 현재 슬라이드/총 슬라이드 */}
            <span className="text-[#A6A6A6] text-[12px]">
                {currentIndex + 1} / {totalSlides}
            </span>
            {/* 후 슬라이드로 이동 */}
            <button
                onClick={onNext}
                className="w-[20px] h-[20px] flex items-center justify-center text-[10px] font-bold border border-[#D9D9D9] text-[#A6A6A6] rounded-[5px]"
            >
                {'▶'}
            </button>
            {/* 슬라이드 멈추기 */}
            <button
                onClick={onPause}
                className="w-[20px] h-[20px] flex items-center justify-center font-bold border border-[#D9D9D9] text-[#A6A6A6] rounded-[5px]"
            >
                {isPaused ? (
                    <Image
                        src={playPauseButton}
                        alt="Play Button"
                        width={8}
                        height={8}
                    />
                ) : (
                    <Image
                        src={videoStopButton}
                        alt="Stop Button"
                        width={8}
                        height={8}
                    />
                )}
            </button>
        </div>
    );
}
