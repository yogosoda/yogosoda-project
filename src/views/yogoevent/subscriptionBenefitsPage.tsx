import CheckNotice from './ui/checkNotice';
import PlanComparison from './ui/planComparison';
import PlanDetail from './ui/planDetail';
import PlanDetailEvent from './ui/planDetailEvent';

export default function SubscriptionBenefitsPage() {
    return (
        <>
            <PlanComparison />
            <PlanDetail />
            <PlanDetailEvent />
            <CheckNotice />
        </>
    );
}
