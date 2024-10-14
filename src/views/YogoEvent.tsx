import Yogoevent_Banner from '@dev/widgets/yogoevent/Yogoevent_Banner';
import Yogoevent_Intro from '@dev/widgets/yogoevent/Yogoevent_Intro';
import Yogoevent_Search from '@dev/widgets/yogoevent/Yogoevent_Search';
import Yogoevent_ToEnter from '@dev/widgets/yogoevent/Yogoevent_ToEnter';

function YogoEvent() {
    return (
        <div className="flex-col-center">
            <Yogoevent_Intro />
            <Yogoevent_Search />
            <Yogoevent_Banner />
            <Yogoevent_ToEnter />
        </div>
    );
}
export default YogoEvent;
