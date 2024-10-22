import YogoeventBenefit_1 from '@dev/widgets/yogoevent/YogoeventBenefit_1';
import YogoeventBenefit_2 from '@dev/widgets/yogoevent/YogoeventBenefit_2';
import YogoeventPlanTable from '@dev/widgets/yogoevent/YogoeventPlanTable';
import CouponInfo from './ui/couponInfo';
import MembershipBenefits from './ui/membershipBenefits';

function YogoEventBenefits() {
    return (
        <div>
            <YogoeventBenefit_1 />
            <YogoeventBenefit_2 />
            <YogoeventPlanTable />
            <MembershipBenefits />
            <CouponInfo />
        </div>
    );
}
export default YogoEventBenefits;
