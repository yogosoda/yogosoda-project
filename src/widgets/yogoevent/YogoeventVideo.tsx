import YogoeventVideoBottom from './components/YogoeventVideoBottom';
import YogoeventVideoTop from './components/YogoeventVideoTop';

// 상단 5번째 요고 소개 비디오 컴포넌트입니다
function YogoeventVideo() {
    return (
        <section className="flex-col-center w-full h-fit">
            <YogoeventVideoTop />
            <YogoeventVideoBottom />
        </section>
    );
}
export default YogoeventVideo;
