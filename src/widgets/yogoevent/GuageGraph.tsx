import Image from 'next/image';
import img from '@devShared/images/graph_bar.png';
import { twMerge } from 'tailwind-merge';
import { Dispatch, SetStateAction } from 'react';

//가입혜택 - 데이터 플랜 보기 메뉴에서 사용하는 게이지 그래프입니다
function GuageGraph({
    planIdx,
    setPlanIdx,
}: {
    planIdx: number;
    setPlanIdx: Dispatch<SetStateAction<number>>;
}) {
    return (
        <div className="relative flex justify-center items-center w-full h-10 px-2 py-1 mr-2">
            <GuageBarBG setPlanIdx={setPlanIdx}></GuageBarBG>
            <Image
                src={img}
                className="absolute top-0 left-0 w-full h-full z-10"
                alt="그래프"
            ></Image>
            <div className="w-full h-full overflow-hidden">
                <div
                    className={twMerge(
                        'w-full h-8 bg-gradient-to-r from-[#69F1FA] to-[#0DD9D3]'
                    )}
                    style={{
                        transform: `translateX(-${(12 - planIdx) * 18.5}px)`,
                    }}
                ></div>
            </div>
        </div>
    );
}

const GuageBarBG = ({
    setPlanIdx,
}: {
    setPlanIdx: (_planIdx: number) => void;
}) => {
    return (
        <div className="absolute flex flex-row justify-evenly items-center w-full h-full rounded-2xl px-[7px] py-1.5 shadow-inner z-20">
            {Array(13)
                .fill(0)
                .map((_, idx) => (
                    <div
                        key={idx}
                        className="w-3 h-full rounded-md rotate-12"
                        onClick={() => setPlanIdx(idx)}
                    />
                ))}
        </div>
    );
};
export default GuageGraph;
