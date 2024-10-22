import Image from 'next/image';
import arrow_next from '@devShared/images/arrow_next.svg';

export default function SplashButton() {
    return (
        <div className="w-2/5 flex justify-end items-center gap-3 mt-6">
            <Image
                src={arrow_next}
                alt="이미지"
                width={15}
                height={15}
                className="animate-moveLR"
            />
            밀어서 보기
        </div>
    );
}
