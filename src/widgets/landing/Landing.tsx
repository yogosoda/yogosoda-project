import LandingImage from './components/LandingImage';
import LandingMenu from './components/LandingMenu';
import LandingTitle from './components/LandingTitle';

export default function Landing() {
    return (
        <div className="h-fit bg-[#F2FEFC] pb-[10px] relative overflow-hidden">
            <LandingTitle />
            <LandingImage />
            <LandingMenu />
        </div>
    );
}
