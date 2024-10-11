'use client';
import {
    story_bg,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
} from '../assets/images/index';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import '../assets/styles/index.css';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };
    return (
        <>
            <div className="story_bg">
                <Image src={story_bg} alt="배경" />

                <Slider {...settings}>
                    <div>
                        <Image src={slider1} alt="1번째" />
                    </div>
                    <div>
                        <Image src={slider2} alt="2번째" />
                    </div>
                    <div>
                        <Image src={slider3} alt="3번째" />
                    </div>
                    <div>
                        <Image src={slider4} alt="4번째" />
                    </div>
                    <div>
                        <Image src={slider5} alt="5번째" />
                    </div>
                    <div>
                        <Image src={slider6} alt="6번째" />
                    </div>
                </Slider>
            </div>
        </>
    );
}
