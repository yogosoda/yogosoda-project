import DirectSlide from '@dev/widgets/direct/directSlide';
import DirectBenefits from '@dev/views/direct/ui/directBenefits';
import DirectCheck from '@dev/views/direct/ui/directCheck';
import DirectRecommend from '@dev/views/direct/ui/directRecommend';
import DirectSignUpGuide from '@dev/views/direct/ui/directSignUpGuide';

const Page = () => {
    return (
        <>
            <DirectSlide />
            <DirectBenefits />
            <DirectRecommend />
            <DirectSignUpGuide />
            <DirectCheck />
        </>
    );
};

export default Page;
