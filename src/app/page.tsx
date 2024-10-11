'use client';
import React from 'react';
import background from '@devShared/images/brandStory/brand-story-background.svg';
import slide1 from '@devShared/images/brandStory/slide-1.svg';
import slide2 from '@devShared/images/brandStory/slide-2.svg';
import slide3 from '@devShared/images/brandStory/slide-3.svg';
import slide4 from '@devShared/images/brandStory/slide-4.svg';
import slide5 from '@devShared/images/brandStory/slide-5.svg';
import Image from 'next/image';
import Slider from 'react-slick';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };
    return (
        <div
            className={`min-h-screen min-w-full bg-cover pt-[60px]`}
            style={{ backgroundImage: `url(${background.src})` }}
        >
            <Slider {...settings}>
                <Image src={slide1} alt={'slide1'} />
                <Image src={slide2} alt={'slide2'} />
                <Image src={slide3} alt={'slide3'} />
                <Image src={slide4} alt={'slide4'} />
                <Image src={slide5} alt={'slide5'} />
            </Slider>
        </div>
    );
}
