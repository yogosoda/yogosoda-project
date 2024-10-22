import YogoEvent from '@dev/views/YogoEvent';
import SubscriptionBenefitsPage from '@devViews/subscriptionBenefits/subscriptionBenefitsPage';

// 요고 가입 혜택을 나타내기 위한 페이지입니다
function page() {
    return (
        <main>
            <YogoEvent />
            <SubscriptionBenefitsPage />
        </main>
    );
}

export default page;
