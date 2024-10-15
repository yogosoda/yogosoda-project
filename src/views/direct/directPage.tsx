import DirectSlide from '@dev/widgets/direct/directSlide';
import DirectBenefits from './ui/directBenefits';
import DirectRecommend from './ui/directRecommend';
import DirectSignUpGuide from './ui/directSignUpGuide';
import DirectCheck from './ui/directCheck';

export default function DirectPage() {
    return (
        <>
            <DirectSlide />
            <DirectBenefits />
            <DirectRecommend />
            <DirectSignUpGuide />
            <DirectCheck />
        </>
    );
}
