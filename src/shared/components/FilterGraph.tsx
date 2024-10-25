'use client';

import {
    ComponentPropsWithoutRef,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { useFilter } from '../hooks/useFilter';
import { KTPlansType } from '@dev/entities/kt_plans.type';
import filter from '@devShared/images/filter.svg';
import ToggleButton from './ToggleButton';

type filterType = {
    array: KTPlansType[];
    setFilteredData: Dispatch<SetStateAction<KTPlansType[]>>;
} & ComponentPropsWithoutRef<'div'>;

function FilterGraph({ array, setFilteredData, ...props }: filterType) {
    const [isOpen, setIsOpen] = useState(false);
    // startPoint는 0, endPoint는 필터의 전체 길이에서 조절 버튼(원)의 너비만큼을 뺀 곳에서 시작
    const [initStartPoint, initEndPoint] = [0, 318 - 48];
    const [currentBar, setCurrentBar] = useState('');
    const [startPoint, setStartPoint] = useState(initStartPoint);
    const [endPoint, setEndPoint] = useState(initEndPoint);
    const [filterType, setFilterType] = useState('fee');

    // useFilter Hook을 사용합니다
    const {
        getInitBoundary,
        setInitBoundary,
        getFilterBoundary,
        setFilterBoundary,
        getFilteredData,
    } = useFilter(array);

    // 필터 타입이 변경 될 때 마다 필터 단위를 변경합니다
    useEffect(() => {
        setInitBoundary(filterType);
    }, [filterType]);

    //필터를 열 때
    const openFilter = () => {
        setInitBoundary(filterType);
        setIsOpen(true);
    };
    //필터를 닫을 때
    const closeFilter = () => {
        setIsOpen(false);
    };
    //필터 초기화
    const refreshFilter = () => {
        setStartPoint(initStartPoint);
        setEndPoint(initEndPoint);
        setFilteredData(array);
    };

    //필터의 양 끝 값(최소 값과 최대값)을 가져옵니다
    const limitBoundary = getInitBoundary();
    const filterBoundary = getFilterBoundary();

    //필터 슬라이드를 이동시키는 함수
    const moveFilter = (e: React.TouchEvent, currentBar: string) => {
        const innerWidth = window.innerWidth;
        if (currentBar === 'start') {
            // start 터치 포인트는 화면 내 터치 위치에서 (좌측 padding + 조절 버튼의 반지름)을 뺀 위치로 설정
            // 조절 버튼 중앙을 이동시키기 위한 계산 방식
            const touchPoint =
                e.touches[0].clientX - ((innerWidth - 318) / 2 + 12);
            if (touchPoint >= initStartPoint && touchPoint < endPoint) {
                setStartPoint(touchPoint);
            } else {
                return;
            }
        } else {
            // end 터치 포인트는 화면 내 터치 위치에서 (우측 padding + 조절 버튼의 너비 + 조절 버튼의 반지름)을 뺀 위치로 설정
            const touchPoint =
                e.touches[0].clientX - ((innerWidth - 318) / 2 + 36);
            if (touchPoint <= initEndPoint && touchPoint > startPoint) {
                setEndPoint(touchPoint);
            } else {
                return;
            }
        }
    };

    //필터링 할 최솟값과 최댓값을 설정합니다
    useEffect(() => {
        setFilterBoundary(startPoint, endPoint);
    }, [startPoint, endPoint]);

    return (
        <div
            className={twMerge(
                'flex flex-col-center w-full h-fit rounded-md font-neo-rg px-2 py-4 my-2',
                isOpen && 'shadow-md'
            )}
            {...props}
        >
            <div className="flex justify-end w-full h-fit text-sm text-blue-500 px-4">
                <div
                    className="flex gap-1"
                    onClick={isOpen ? closeFilter : openFilter}
                >
                    <Image
                        src={filter}
                        alt="필터"
                        width={15}
                        height={15}
                        style={{
                            filter: 'invert(55%) sepia(69%) saturate(4508%) hue-rotate(201deg) brightness(97%) contrast(99%)',
                        }}
                    />
                    <button>{isOpen ? '필터 닫기' : '필터 열기'}</button>
                </div>
            </div>
            <div
                className={twMerge(
                    'flex flex-col-center w-full gap-4 overflow-hidden',
                    'transition-all duration-500',
                    isOpen ? 'max-h-screen py-4' : 'max-h-0 p-0'
                )}
            >
                <div className="flex flex-row justify-between items-center w-full h-fit text-sm">
                    <div className="flex flex-row justify-start items-center gap-2 w-full h-fit">
                        <span onClick={() => setFilterType('fee')}>요금</span>
                        <ToggleButton
                            isSelectData={filterType === 'fee'}
                            buttonSize={3}
                            width={40}
                            className="bg-blue-500"
                            onClick={() =>
                                setFilterType(
                                    filterType === 'fee' ? 'data' : 'fee'
                                )
                            }
                        />
                        <span onClick={() => setFilterType('data')}>
                            데이터
                        </span>
                    </div>
                    <button
                        className="w-1/4 h-fit text-gray-400"
                        onClick={refreshFilter}
                    >
                        초기화
                    </button>
                </div>

                <div className="flex flex-row-center items-center gap-2 w-full h-fit font-neo-hv text-xl">
                    {filterType === 'fee' ? (
                        <>
                            <span>
                                {array[filterBoundary.minimum]?.monthly_fee}
                            </span>
                            <span>~</span>
                            <span>
                                {array[filterBoundary.maximum]?.monthly_fee}
                            </span>
                        </>
                    ) : (
                        <>
                            <span>
                                {array[filterBoundary.minimum]?.data.total_data}
                            </span>
                            <span>~</span>
                            <span>
                                {array[filterBoundary.maximum]?.data.total_data}
                            </span>
                        </>
                    )}
                </div>
                <FilterBarBackGround
                    startPoint={startPoint}
                    endPoint={endPoint + 36}
                    onTouchMove={(e) => moveFilter(e, currentBar)}
                >
                    <div
                        className="relative w-6 h-6 rounded-full bg-blue-500 z-10"
                        style={{
                            transform: `translateX(${startPoint}px)`,
                        }}
                        onTouchStart={() => setCurrentBar('start')}
                    ></div>
                    <div
                        className="relative w-6 h-6 rounded-full bg-blue-500 z-10"
                        style={{
                            transform: `translateX(${endPoint}px)`,
                        }}
                        onTouchStart={() => setCurrentBar('end')}
                    ></div>
                </FilterBarBackGround>
                <div className="flex flex-row justify-between w-full h-fit font-neo-bd text-[10px]">
                    <>
                        <p>
                            <span>
                                {limitBoundary?.minimum.toLocaleString()}
                            </span>
                            <span>{filterType === 'fee' ? '원' : 'GB'}</span>
                        </p>

                        <p>
                            <span>
                                {limitBoundary?.maximum > 999999
                                    ? '무제한'
                                    : limitBoundary?.maximum.toLocaleString()}
                            </span>
                            <span>
                                {filterType === 'fee'
                                    ? '원'
                                    : (limitBoundary?.maximum > 999999 ?? 'GB')}
                            </span>
                        </p>
                    </>
                </div>
                <button
                    className="w-1/6 h-fit bg-blue-500 text-white text-sm rounded-lg p-1"
                    onClick={() => setFilteredData(getFilteredData())}
                >
                    적용
                </button>
            </div>
        </div>
    );
}

const FilterBarBackGround = ({
    startPoint,
    endPoint,
    children,
    ...props
}: {
    startPoint: number;
    endPoint: number;
    children: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>) => {
    return (
        <div className="flex-col-center w-[318px] h-fit">
            <div
                className="relative flex flex-row items-center w-full h-fit py-3"
                {...props}
            >
                <div
                    className={twMerge(
                        'absolute top-1/2 left-0 h-1 bg-blue-500 rounded-2xl -translate-y-1/2 z-[5]'
                    )}
                    style={{
                        width: `${endPoint}px`,
                    }}
                />
                <div
                    className={twMerge(
                        'absolute top-1/2 left-0 h-1 bg-gray-200 rounded-2xl -translate-y-1/2 z-[5]'
                    )}
                    style={{
                        width: `${startPoint}px`,
                    }}
                />
                <div
                    className={twMerge(
                        'absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-2xl -translate-y-1/2'
                    )}
                />
                {children}
            </div>
        </div>
    );
};
export default FilterGraph;
