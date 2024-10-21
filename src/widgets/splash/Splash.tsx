import SplashTitle from './components/SplashTitle';
import SplashButton from './components/SplashButton';

export default function Splash() {
    return (
        <div className="h-[100vh] bg-[#FEFEF6] pb-[10px] relative overflow-hidden">
            <SplashTitle />
            <SplashButton />
        </div>
    );
}
