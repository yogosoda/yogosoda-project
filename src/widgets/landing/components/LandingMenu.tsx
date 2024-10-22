import LandingBoxRow from './LandingBoxRow';

export default function LandingMenu() {
    return (
        <div className="flex flex-col gap-6">
            <p className="w-fit font-bold text-[1.1rem] mt-[30px] ml-[30px]">
                👀 요고 서비스 한눈에 보기
            </p>
            <LandingBoxRow />
        </div>
    );
}
