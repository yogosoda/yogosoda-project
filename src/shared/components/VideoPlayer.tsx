import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type IframeProps = ComponentPropsWithoutRef<'iframe'>;

// 비디오 플레이어 컴포넌트입니다.
// src로 비디오 소스를 받습니다
// className으로 스타일 요소를 받습니다
// props로 이벤트를 받습니다
function VideoPlayer({
    src,
    className,
    ...props
}: { src: string; className?: string } & IframeProps) {
    return (
        <iframe
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={twMerge('w-[150px] h-[270px] rounded-xl', className)}
            {...props}
        ></iframe>
    );
}
export default VideoPlayer;
