import icon from '@devShared/icons/device.png';
import Image from 'next/image';

export default function RecommendMobile() {
    return (
        <div className="md:flex hidden flex-col items-center gap-10 w-full h-fit ">
            <p className="font-neo-eb text-2xl text-center leading-relaxed">
                본 페이지는 모바일 환경에 최적화 되어 있습니다
                <br />
                모바일 환경에서 접속해 주시길 바랍니다
            </p>

            <ul className="text-gray-700 text-gray">
                <p className="font-neo-bd text-black text-lg leading-relaxed">
                    모바일 환경 접속 방법
                </p>
                <li>
                    1. 개발자 도구{' '}
                    <span className="font-bold">
                        (Windows: F12 / Mac: command + option + I) &nbsp;
                    </span>
                    열기
                </li>
                <li className="flex items-center">
                    2. 좌측 상단&nbsp;
                    <span className="font-bold">디바이스 모드</span> &#40;
                    <Image
                        src={icon}
                        alt="아이콘"
                        width={32}
                        height={32}
                        className="w-4 h-3 mx-1"
                    ></Image>
                    &#41; &nbsp;클릭
                </li>
                <li>
                    3. 디바이스 모드를&nbsp;
                    <span className="font-bold">iPhone 12 Pro</span>로 변경
                </li>
            </ul>
        </div>
    );
}
