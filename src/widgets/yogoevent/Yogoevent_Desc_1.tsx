import Image from 'next/image';
import img from '../../shared/images/image 31.png';
import HighlitedSpan from '@dev/shared/components/HighlitedSpan';

function Yogoevent_Desc_1() {
    return (
        <section>
            <div className="max-w-full h-fit rounded-[20px] bg-gradient-to-r from-[#DFFFFC] via-[#EBF0FF] to-[#FFECF1] px-9 py-5">
                <div className="flex-row-center gap-3">
                    <Image src={img} className="w-28" alt="요고" />
                    <div className="flex flex-col justify-center items-start gap-2 font-neo-lt text-xs">
                        <p>
                            <HighlitedSpan>인터넷, TV도</HighlitedSpan>
                        </p>
                        <p>
                            <HighlitedSpan>무약정</HighlitedSpan>
                            <span>으로 결합하고 싶다면?</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Yogoevent_Desc_1;
