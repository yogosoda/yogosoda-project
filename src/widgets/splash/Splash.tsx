import SplashTitle from './components/SplashTitle';
import ToLandingButton from './components/ToLandingButton';

export default function Splash() {
    return (
        <div className="h-[100vh] bg-[#FEFEF6] pb-[10px] relative overflow-hidden">
            <SplashTitle />
            <ToLandingButton />
        </div>
    );
}
