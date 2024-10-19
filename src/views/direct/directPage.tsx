import DirectBenefits from './ui/directBenefits';
import DirectRecommend from './ui/directRecommend';
import DirectSignUpGuide from './ui/directSignUpGuide';
import DirectCheck from './ui/directCheck';
import DirectSlide from '@dev/widgets/direct/components/directSlide';

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
