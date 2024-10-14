import Image from 'next/image';
import img from '@devShared/images/yogoevent/image 32.png';
import Link from 'next/link';

function Yogoevent_ToEnter() {
    return (
        <div className="flex-col-center w-full h-fit gap-4 rounded-2xl px-10 py-6 bg-gray-200 shadow-[10px_10px_5px_rgba(0,0,0,0.2)]">
            <div className="flex-row-center gap-2">
                <Image src={img} alt="요고뭉치" width={80} height={24} />
                <h2 className="font-bold text-xl">요금제 가입하려면</h2>
            </div>
            <div className="flex-col-center w-full gap-3">
                <Button link="https://shop.kt.com/mobile/products.do?=&category=mobile&pplId=0946">
                    핸드폰 보러가기
                </Button>
                <Button link="https://shop.kt.com/direct/directUsim.do">
                    USIM 개통하러 가기
                </Button>
                <Button link="https://shop.kt.com/direct/directChangeRate.do">
                    요금제 변경하기
                </Button>
            </div>
            <p className="text-[10px] text-gray-500">
                *기존 KT 고객님이 요금제만 요고로 변경을 원하는 경우 사용할
                핸드폰 등록 후 요금제 변경이 가능합니다.
            </p>
        </div>
    );
}

const Button = ({
    children,
    link,
}: {
    children: React.ReactNode;
    link: string;
}) => {
    return (
        <Link
            href={link}
            className="flex-row-center items-center w-full h-fit rounded-md bg-black text-white py-2"
        >
            {children}
        </Link>
    );
};

export default Yogoevent_ToEnter;
