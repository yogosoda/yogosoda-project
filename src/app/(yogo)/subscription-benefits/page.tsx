import CheckNotice from '@dev/views/subscriptionBenefits/ui/checkNotice';
import CouponInfo from '@dev/views/subscriptionBenefits/ui/couponInfo';
import MembershipBenefits from '@dev/views/subscriptionBenefits/ui/membershipBenefits';
import PlanComparison from '@dev/views/subscriptionBenefits/ui/planComparison';
import PlanDetail from '@dev/views/subscriptionBenefits/ui/planDetail';
import PlanDetailEvent from '@dev/views/subscriptionBenefits/ui/planDetailEvent';

const Page = () => {
    return (
        <>
            <MembershipBenefits />
            <CouponInfo />
            <PlanComparison />
            <PlanDetail />
            <PlanDetailEvent />
            <CheckNotice />
        </>
    );
};

export default Page;
