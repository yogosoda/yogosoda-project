'use client';

import SplashTitle from './components/SplashTitle';
import { useState, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import ToLandingButton from './components/ToLandingButton';

export default function Splash() {
    const ref = useRef<HTMLDivElement>(null);

    const [startPoint, setStartPoint] = useState(0);
    const [translate, setTranslate] = useState(0);

    const startSwipe = (e: React.TouchEvent) => {
        const touchPoint = e.touches[0].clientX;
        setStartPoint(touchPoint);
    };
    const moveSwipe = (e: React.TouchEvent) => {
        const movePoint = e.touches[0].clientX;
        if (movePoint < startPoint) {
            return;
        } else {
            setTranslate(movePoint - startPoint);
        }
    };
    const endSwipe = () => {
        if (translate > 1) {
            setTranslate(window.innerWidth);
        }
    };

    return (
        <div
            ref={ref}
            className={twMerge(
                'fixed top-0 left-0 w-full h-[100vh] bg-[#FEFEF6] pb-[10px] overflow-hidden z-50',
                'transition-transform duration-300 ease-in-out'
            )}
            onTouchStart={startSwipe}
            onTouchMove={moveSwipe}
            onTouchEnd={endSwipe}
            style={{
                transform: `translateX(${translate}px)`,
            }}
        >
            <SplashTitle />
            <ToLandingButton />
        </div>
    );
}
