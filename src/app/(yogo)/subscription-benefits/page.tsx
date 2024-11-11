import YogoEventIntroduction from '@dev/views/yogoevent/YogoEventIntroduction';
import SubscriptionBenefitsPage from '@dev/views/yogoevent/subscriptionBenefitsPage';
import YogoEventBenefits from '@dev/views/yogoevent/YogoEventBenefits';

// 요고 가입 혜택을 나타내기 위한 페이지입니다
function page() {
    return (
        <main className="flex-col-center h-fit bg-white">
            <YogoEventIntroduction />
            <YogoEventBenefits />
            <SubscriptionBenefitsPage />
        </main>
    );
}

export default page;
