'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { slideImages } from '@dev/shared/images/directImage';
import SlideControls from '@dev/shared/components/slideControls';

export default function DirectSlide() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const pauseSlides = () => {
        setIsPaused((prev) => !prev);
    };

    // 자동 슬라이드 전환 설정
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // 3초마다 전환

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 클리어
    }, []);

    return (
        <div className="relative w-[390px] h-[234px] mx-auto overflow-hidden flex items-center">
            <div className="w-full flex transition-transform duration-500 ease-in-out">
                {slideImages.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 w-full h-full transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {index === currentIndex && (
                            <Image
                                src={image}
                                alt={`Yogo Slide ${index + 1}`}
                                layout="fill"
                                className="w-full h-auto"
                            />
                        )}
                    </div>
                ))}
            </div>
            <SlideControls
                currentIndex={currentIndex}
                totalSlides={slideImages.length}
                onPrev={prevSlide}
                onNext={nextSlide}
                onPause={pauseSlides}
                isPaused={isPaused}
            />
        </div>
    );
}
