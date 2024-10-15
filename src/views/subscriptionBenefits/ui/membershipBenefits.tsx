import MembershipBenefitsTitle from '@dev/widgets/subscriptionBenefits/membershipBenefitsTitle';
import MembershipBenefitsRow from '@dev/widgets/subscriptionBenefits/membershipBenefitsRow';

export default function MembershipBenefits() {
    return (
        <div className="w-[390px] bg-[#FEFEF6] h-[850px]">
            <MembershipBenefitsTitle />
            <MembershipBenefitsRow />
        </div>
    );
}
