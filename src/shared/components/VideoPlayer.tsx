import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type IframeProps = ComponentPropsWithoutRef<'iframe'>;

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
