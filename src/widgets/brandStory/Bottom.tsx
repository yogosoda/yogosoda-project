'use client';

import Skeleton from '@dev/shared/components/Skeleton';
import React, { useState } from 'react';

export default function Bottom() {
    const [loadingCount, setLoadingCount] = useState(3);

    const handleIframeLoad = () => {
        setLoadingCount((prev) => prev - 1); // 각 iframe이 로드될 때마다 카운트 감소
    };
    return (
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
                <Skeleton width={300} height={514} display={loadingCount > 0} />
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
                className={'mt-[1.375rem] font-bold text-white text-[1.125rem]'}
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
    );
}
