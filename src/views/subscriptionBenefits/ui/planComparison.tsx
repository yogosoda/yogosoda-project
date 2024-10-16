import PlanComparisonBoxTable from '@dev/widgets/subscriptionBenefits/components/planComparisonBoxTable';
import PlanComparisonTitle from '@dev/widgets/subscriptionBenefits/components/planComparisonTitle';

export default function PlanComparison() {
    return (
        <div className="w-[390px] bg-[#FEFEF6] h-[fit] pb-[50px]">
            <PlanComparisonTitle />
            <PlanComparisonBoxTable />
        </div>
    );
}
