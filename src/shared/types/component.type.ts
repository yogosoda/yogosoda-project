import { CommonLayoutProps } from './common.type';

export type BoxProps = CommonLayoutProps & {
    children: React.ReactNode;
};

export type SlideControlsProps = {
    currentIndex: number;
    totalSlides: number;
    onPrev: () => void;
    onNext: () => void;
    onPause: () => void;
    isPaused: boolean;
};
