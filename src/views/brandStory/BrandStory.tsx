'use client';
import React, { useRef, useState } from 'react';
import background1 from '@devShared/images/brandStory/brand-story-background1.svg';
import arrowLeft from '@devShared/images/brandStory/brand-arrow-left.svg';
import arrowRight from '@devShared/images/brandStory/brand-arrow-right.svg';
import slide1 from '@devShared/images/brandStory/slider1.png';
import slide2 from '@devShared/images/brandStory/slider2.png';
import slide3 from '@devShared/images/brandStory/slider3.png';
import slide4 from '@devShared/images/brandStory/slider4.png';
import slide5 from '@devShared/images/brandStory/slider5.png';
import slide6 from '@devShared/images/brandStory/slider6.png';
import Image from 'next/image';
import Slider from 'react-slick';
import Skeleton from '@devShared/components/Skeleton';

export default function BrandStory() {
    const sliderRef = useRef<Slider | null>(null);

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loadingCount, setLoadingCount] = useState(3);

    // 이전 슬라이드로 이동하는 함수
    const handlePrevSlide = () => {
        sliderRef.current?.slickPrev(); // 이전 슬라이드로 이동
    };

    // 다음 슬라이드로 이동하는 함수
    const handleNextSlide = () => {
        sliderRef.current?.slickNext(); // 다음 슬라이드로 이동
    };

    const handleIframeLoad = () => {
        setLoadingCount((prev) => prev - 1); // 각 iframe이 로드될 때마다 카운트 감소
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
        <div className="w-[24.375rem] font-neo-hv">
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
                        <span className={'text-xl'}>
                            {currentSlide + 1} / 6
                        </span>
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

            <div
                className={
                    'min-w-full flex flex-col items-center bg-black pt-[3.125rem] pb-[3.75rem]'
                }
            >
                <span
                    className={
                        'bg-gradient-to-r from-[#00D2BB] to-[#00AEA4] font-bold text-white pt-[0.313rem] pb-[0.313rem] pr-[0.7rem] pl-[0.7rem] rounded-[2.5rem] mb-[2.5rem]'
                    }
                >
                    요고를 영상으로 만나 보세요.
                </span>
                <div className={'rounded-[0.938rem] overflow-hidden'}>
                    <Skeleton
                        width={300}
                        height={514}
                        display={loadingCount > 0}
                    />
                    <iframe
                        style={{ display: loadingCount > 0 ? 'none' : 'flex' }}
                        src={'https://youtube.com/embed/EEKovGsbLWg'}
                        allowFullScreen
                        width={300}
                        height={514}
                        onLoad={handleIframeLoad}
                    />
                </div>
                <span
                    className={
                        'mt-[1.375rem] font-bold text-white text-[1.125rem]'
                    }
                >
                    요금은 줄이고 혜택은 가득한 요고!!
                </span>
                <div
                    className={
                        'min-w-full flex flex-row items-center justify-center pt-[5rem] gap-[1.25rem]'
                    }
                >
                    <div
                        className={
                            'flex flex-col items-center justify-center gap-3'
                        }
                    >
                        <div className={'rounded-[0.938rem] overflow-hidden'}>
                            <Skeleton
                                width={170}
                                height={323}
                                display={loadingCount > 0}
                            />
                            <iframe
                                style={{
                                    display: loadingCount > 0 ? 'none' : 'flex',
                                }}
                                src={'https://youtube.com/embed/RStVl4lilxM'}
                                allowFullScreen
                                width={170}
                                height={323}
                                onLoad={handleIframeLoad}
                            />
                        </div>
                        <span className={'font-bold text-white'}>
                            요고 69 (시즌 2)
                        </span>
                    </div>

                    <div
                        className={
                            'flex flex-col items-center justify-center gap-3'
                        }
                    >
                        <div className={'rounded-[0.938rem] overflow-hidden'}>
                            <Skeleton
                                width={170}
                                height={323}
                                display={loadingCount > 0}
                            />
                            <iframe
                                style={{
                                    display: loadingCount > 0 ? 'none' : 'flex',
                                }}
                                src={'https://youtube.com/embed/bxFI64dzg1E'}
                                allowFullScreen
                                width={170}
                                height={323}
                                onLoad={handleIframeLoad}
                            />
                        </div>
                        <span className={'font-bold text-white'}>
                            요고 30 (시즌 2)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}