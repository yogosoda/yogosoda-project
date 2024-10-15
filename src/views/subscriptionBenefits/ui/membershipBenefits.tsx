import MembershipBenefitsRow from '@dev/widgets/subscriptionBenefits/components/membershipBenefitsRow';
import MembershipBenefitsTitle from '@dev/widgets/subscriptionBenefits/components/membershipBenefitsTitle';

export default function MembershipBenefits() {
    return (
        <div className="w-[390px] bg-[#FEFEF6] h-[fit] pb-[20px]">
            <MembershipBenefitsTitle />
            <MembershipBenefitsRow />
        </div>
    );
}
