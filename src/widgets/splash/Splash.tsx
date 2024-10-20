import SplashClose from './components/SplashClose';
import SplashSwiper from './components/SplashSwiper';
import SplashTitle from './components/SplashTitle';

export default function Splash() {
    return (
        <div className="h-[100vh] bg-[#FEFEF6] pb-[10px] relative overflow-hidden">
            <SplashClose />
            <SplashTitle />
            <SplashSwiper />
        </div>
    );
}
