import { KTPlansType } from '@dev/entities/kt_plans.type';
import api from '@dev/shared/utils/api';
import YogoeventBanner from '@dev/widgets/yogoevent/YogoeventBanner';
import YogoeventBenefit_1 from '@dev/widgets/yogoevent/YogoeventBenefit_1';
import YogoeventBenefit_2 from '@dev/widgets/yogoevent/YogoeventBenefit_2';
import YogoeventImprove from '@dev/widgets/yogoevent/YogoeventImprove';
import YogoeventIntro from '@dev/widgets/yogoevent/YogoeventIntro';
import YogoeventPlanTable from '@dev/widgets/yogoevent/YogoeventPlanTable';
import YogoeventSearch from '@dev/widgets/yogoevent/YogoeventSearch';
import YogoeventToEnter from '@dev/widgets/yogoevent/YogoeventToEnter';
import YogoeventVideo from '@dev/widgets/yogoevent/YogoeventVideo';

// 요고 가입 혜택 페이지
async function YogoEvent() {
    const ktPlanData = await getKTPlan();
    return (
        <div className="flex-col-center">
            <YogoeventIntro />
            <YogoeventSearch ktPlanData={ktPlanData} />
            <YogoeventBanner />
            <YogoeventToEnter />
            <YogoeventVideo />
            <YogoeventImprove />
            <YogoeventBenefit_1 />
            <YogoeventBenefit_2 />
            <YogoeventPlanTable />
        </div>
    );
}
// [FIXME] KT 요고 요금제를 받아와 가입 혜택 페이지로 전달합니다
const getKTPlan = async () => {
    const res = await api.post(`${process.env.NEXT_PUBLIC_API_KT_URL}`, {
        searchKeyword: '',
    });
    const data = await res.data;
    return data as KTPlansType[];
};

export default YogoEvent;
