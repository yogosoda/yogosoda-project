'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';

export default function Top({ images }: { images: StaticImageData[] }) {
    const [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        background1,
        arrowLeft,
        arrowRight,
    ] = images;

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
            style={{ backgroundImage: `url(${background1})` }}
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
                        src={arrowLeft}
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
                        src={arrowRight}
                        alt={'brand-arrow-right'}
                    />
                </button>
            </div>
        </div>
    );
}
