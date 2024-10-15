'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import yogoSlideImage1 from '@dev/shared/images/directImage/yogo_slide_image1.png';
import yogoSlideImage2 from '@dev/shared/images/directImage/yogo_slide_image2.png';
import yogoSlideImage3 from '@dev/shared/images/directImage/yogo_slide_image3.png';
import yogoSlideImage4 from '@dev/shared/images/directImage/yogo_slide_image4.png';
import yogoSlideImage5 from '@dev/shared/images/directImage/yogo_slide_image5.png';
import yogoSlideImage6 from '@dev/shared/images/directImage/yogo_slide_image6.png';
import yogoSlideImage7 from '@dev/shared/images/directImage/yogo_slide_image7.png';
import yogoSlideImage8 from '@dev/shared/images/directImage/yogo_slide_image8.png';
import yogoSlideImage9 from '@dev/shared/images/directImage/yogo_slide_image9.png';
import yogoSlideImage10 from '@dev/shared/images/directImage/yogo_slide_image10.png';
import yogoSlideImage11 from '@dev/shared/images/directImage/yogo_slide_image11.png';
import yogoSlideImage12 from '@dev/shared/images/directImage/yogo_slide_image12.png';
import SlideControls from '@dev/shared/components/slideControls';

const slideImages = [
    yogoSlideImage1,
    yogoSlideImage2,
    yogoSlideImage3,
    yogoSlideImage4,
    yogoSlideImage5,
    yogoSlideImage6,
    yogoSlideImage7,
    yogoSlideImage8,
    yogoSlideImage9,
    yogoSlideImage10,
    yogoSlideImage11,
    yogoSlideImage12,
];

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
        }, 3000); // 1초마다 전환

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
