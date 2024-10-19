import DirectBenefits from './ui/directBenefits';
import DirectRecommend from './ui/directRecommend';
import DirectSignUpGuide from './ui/directSignUpGuide';
import DirectCheck from './ui/directCheck';
import DirectSlide from '@dev/widgets/direct/components/directSlide';
import SplashPage from '../splash/splashPage';

export default function DirectPage() {
    return (
        <>
            <DirectSlide />
            <SplashPage />
            <DirectBenefits />
            <DirectRecommend />
            <DirectSignUpGuide />
            <DirectCheck />
        </>
    );
}
