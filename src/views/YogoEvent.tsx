import { KTPlansType } from '@dev/entities/kt_plans.type';
import api from '@devShared/utils/api';
import YogoeventBanner from '@dev/widgets/yogoevent/YogoeventBanner';
import YogoeventIntro from '@dev/widgets/yogoevent/YogoeventIntro';
import YogoeventSearch from '@dev/widgets/yogoevent/YogoeventSearch';
import YogoeventToEnter from '@dev/widgets/yogoevent/YogoeventToEnter';

// 요고 가입 혜택 페이지
async function YogoEvent() {
    const ktPlanData = await getKTPlan();
    return (
        <div className="flex-col-center">
            <YogoeventIntro />
            <YogoeventSearch ktPlanData={ktPlanData} />
            <YogoeventBanner />
            <YogoeventToEnter />
        </div>
    );
}

// [FIXME] KT 요고 요금제를 받아와 가입 혜택 페이지로 전달합니다
const getKTPlan = async () => {
    const res = await api.get<KTPlansType[]>(`/api/yogos`);
    const data = await res.data;
    if (!data) {
        return [];
    }
    return data;
};

export default YogoEvent;
