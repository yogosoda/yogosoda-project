import { KTPlansType } from '@dev/shared/types/kt_plans.type';
import api from '@dev/shared/utils/api';
import Yogoevent_Banner from '@dev/widgets/yogoevent/Yogoevent_Banner';
import Yogoevent_Intro from '@dev/widgets/yogoevent/Yogoevent_Intro';
import Yogoevent_Search from '@dev/widgets/yogoevent/Yogoevent_Search';
import Yogoevent_ToEnter from '@dev/widgets/yogoevent/Yogoevent_ToEnter';

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

const getKTPlan = async () => {
    const res = await api.post('http://3.35.51.214/api/search_kt_plan', {
        searchKeyword: '',
    });
    const data = await res.data;
    return data as KTPlansType[];
};

export default YogoEvent;
