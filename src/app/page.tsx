'use client';
import React, { useRef } from 'react';
import background1 from '@devShared/images/brandStory/brand-story-background1.svg';
import background2 from '@devShared/images/brandStory/brand-story-background2.svg';
import slide1 from '@devShared/images/brandStory/slide-1.svg';
import slide2 from '@devShared/images/brandStory/slide-2.svg';
import slide3 from '@devShared/images/brandStory/slide-3.svg';
import slide4 from '@devShared/images/brandStory/slide-4.svg';
import slide5 from '@devShared/images/brandStory/slide-5.svg';
import slide6 from '@devShared/images/brandStory/slide-6.svg';
import Image from 'next/image';
import Slider from 'react-slick';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Home() {
    const sliderRef = useRef<Slider | null>(null);
    // 이전 슬라이드로 이동하는 함수
    const handlePrevSlide = () => {
        sliderRef.current?.slickPrev(); // 이전 슬라이드로 이동
    };

    // 다음 슬라이드로 이동하는 함수
    const handleNextSlide = () => {
        sliderRef.current?.slickNext(); // 다음 슬라이드로 이동
    };
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // 모든 이벤트 핸들러에서 event.target을 통해 플레이어에 접근할 수 있음
        event.target.pauseVideo();
    };
    const opts: YouTubeProps['opts'] = {
        height: '513',
        width: '350',

        playerVars: {
            autoplay: 1,
        },
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    return (
        <>
            <div className="m-plan-article-visual">
                <div
                    className={`min-w-full bg-cover pt-[60px]`}
                    style={{ backgroundImage: `url(${background1.src})` }}
                >
                    <Slider {...settings}>
                        <Image src={slide1} alt={'slide1'} />
                        <Image src={slide2} alt={'slide2'} />
                        <Image src={slide3} alt={'slide3'} />
                        <Image src={slide4} alt={'slide4'} />
                        <Image src={slide5} alt={'slide5'} />
                        <Image src={slide6} alt={'slide6'} />
                    </Slider>
                    {/* 슬라이더 제어 버튼 */}
                    {/* <button 
                onClick={() => sliderRef.current?.slickNext()} 
                type="button" 
                className="slick-arrow slick-next"
            >
                Next
            </button> */}
                </div>
                <div className="bx-controls bx-has-pager bx-has-controls-direction">
                    <div className="bx-pager bx-default-pager">
                        <div className="bx-controls-direction">
                            {/* 이전 슬라이드로 이동하는 버튼 */}
                            <button
                                onClick={handlePrevSlide}
                                style={{ marginRight: '10px' }}
                            >
                                Previous
                            </button>

                            {/* 다음 슬라이드로 이동하는 버튼 */}
                            <button onClick={handleNextSlide}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${background2.src})` }}>
                <div
                    id="player"
                    style={{
                        display: 'grid', // Grid 레이아웃 사용
                        placeItems: 'center', // 수직 및 수평 가운데 정렬
                    }}
                >
                    <YouTube
                        videoId="EEKovGsbLWg" // 재생할 YouTube 동영상 ID (예시 ID)
                        opts={opts} // YouTube 플레이어 옵션 (크기, 자동재생 등)
                        onReady={onPlayerReady} // 플레이어가 준비되었을 때 호출되는 함수
                    />
                </div>
            </div>
        </>
    );
}
