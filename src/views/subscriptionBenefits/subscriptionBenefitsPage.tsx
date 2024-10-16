import CheckNotice from './ui/checkNotice';
import CouponInfo from './ui/couponInfo';
import MembershipBenefits from './ui/membershipBenefits';
import PlanComparison from './ui/planComparison';
import PlanDetail from './ui/planDetail';
import PlanDetailEvent from './ui/planDetailEvent';

export default function SubscriptionBenefitsPage() {
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
}
