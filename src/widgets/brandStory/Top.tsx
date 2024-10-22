'use client';

import slide1 from '@devShared/images/brandStory/slider1.png';
import slide2 from '@devShared/images/brandStory/slider2.png';
import slide3 from '@devShared/images/brandStory/slider3.png';
import slide4 from '@devShared/images/brandStory/slider4.png';
import slide5 from '@devShared/images/brandStory/slider5.png';
import slide6 from '@devShared/images/brandStory/slider6.png';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Top() {
    const sliderRef = useRef<Slider | null>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // 이전 슬라이드로 이동하는 함수
    const handlePrevSlide = () => {
        sliderRef.current?.slickPrev(); // 이전 슬라이드로 이동
    };

    // 다음 슬라이드로 이동하는 함수
    const handleNextSlide = () => {
        sliderRef.current?.slickNext(); // 다음 슬라이드로 이동
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        afterChange: (current: number) => setCurrentSlide(current),
    };

    return (
        <div
            className={`bg-cover pt-[3.75rem] overflow-hidden`}
            style={{
                backgroundImage: `url(/images/brandStory/brand-story-background1.svg)`,
            }}
        >
            <Slider ref={sliderRef} {...settings}>
                <Image src={slide1} alt={'slide1'} />
                <Image src={slide2} alt={'slide2'} />
                <Image src={slide3} alt={'slide3'} />
                <Image src={slide4} alt={'slide4'} />
                <Image src={slide5} alt={'slide5'} />
                <Image src={slide6} alt={'slide6'} />
            </Slider>
            <div
                className={
                    'flex flex-row justify-center items-center gap-4 mb-[3.125rem] mt-[2.2rem]'
                }
            >
                <button onClick={handlePrevSlide}>
                    <Image
                        width={31}
                        height={41}
                        src={'/images/brandStory/brand-arrow-left.svg'}
                        alt={'brand-arrow-left'}
                    />
                </button>
                <div
                    className={`h-[2.188rem] flex flex-col items-center justify-center bg-white rounded-[2.5rem] pt-[0.35rem] pb-[0.35rem] pr-[0.7rem] pl-[0.7rem]`}
                >
                    <span className={'text-xl'}>{currentSlide + 1} / 6</span>
                </div>
                <button onClick={handleNextSlide}>
                    <Image
                        width={31}
                        height={41}
                        src={'/images/brandStory/brand-arrow-right.svg'}
                        alt={'brand-arrow-right'}
                    />
                </button>
            </div>
        </div>
    );
}
