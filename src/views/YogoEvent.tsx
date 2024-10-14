import { KTPlansType } from '@dev/shared/types/kt_plans.type';
import api from '@dev/shared/utils/api';
import Yogoevent_Banner from '@dev/widgets/yogoevent/Yogoevent_Banner';
import Yogoevent_Intro from '@dev/widgets/yogoevent/Yogoevent_Intro';
import Yogoevent_Search from '@dev/widgets/yogoevent/Yogoevent_Search';
import Yogoevent_ToEnter from '@dev/widgets/yogoevent/Yogoevent_ToEnter';

// 요고 가입 혜택 페이지
async function YogoEvent() {
    const ktPlanData = await getKTPlan();
    return (
        <div className="flex-col-center">
            <Yogoevent_Intro />
            <Yogoevent_Search ktPlanData={ktPlanData} />
            <Yogoevent_Banner />
            <Yogoevent_ToEnter />
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
