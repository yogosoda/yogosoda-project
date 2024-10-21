import DirectBenefits from './ui/directBenefits';
import DirectRecommend from './ui/directRecommend';
import DirectSignUpGuide from './ui/directSignUpGuide';
import DirectCheck from './ui/directCheck';
import DirectSlide from '@dev/widgets/direct/components/directSlide';
import Chatbot from '@dev/shared/components/Chatbot';

export default function DirectPage() {
    return (
        <>
            <DirectSlide />
            <DirectBenefits />
            <DirectRecommend />
            <DirectSignUpGuide />
            <DirectCheck />
            <Chatbot />
        </>
    );
}
