import Landing from '@dev/widgets/landing/Landing';
import Splash from '@dev/widgets/splash/Splash';

export default function LandingPage() {
    return (
        <div className="relative w-full h-[100vh] overflow-scroll">
            <Splash />
            <Landing />
        </div>
    );
}
