import { KTPlansType } from '@dev/entities/kt_plans.type';
import api from '@devShared/utils/api';
import YogoeventBanner from '@dev/widgets/yogoevent/YogoeventBanner';
import YogoeventImprove from '@dev/widgets/yogoevent/YogoeventImprove';
import YogoeventIntro from '@dev/widgets/yogoevent/YogoeventIntro';
import YogoeventSearch from '@dev/widgets/yogoevent/YogoeventSearch';
import YogoeventToEnter from '@dev/widgets/yogoevent/YogoeventToEnter';
import YogoeventVideo from '@dev/widgets/yogoevent/YogoeventVideo';

// 요고 가입 혜택 페이지
async function YogoEvent() {
    const ktPlanData = await getKTPlan();
    return (
        <div className="flex-col-center">
            <YogoeventIntro />
            {ktPlanData.length > 0 ? (
                <YogoeventSearch ktPlanData={ktPlanData} />
            ) : (
                <div>데이터가 없습니다.</div> // 데이터가 없을 경우 표시할 내용
            )}
            <YogoeventBanner />
            <YogoeventToEnter />
            <YogoeventVideo />
            <YogoeventImprove />
        </div>
    );
}

// [FIXME] KT 요고 요금제를 받아와 가입 혜택 페이지로 전달합니다
const getKTPlan = async () => {
    try {
        const res = await api.get<KTPlansType[]>(`/api/yogos`);
        const data = res.data;
        if (!data) {
            return [];
        }
        return data;
    } catch {
        return [];
    }
};

export default YogoEvent;
