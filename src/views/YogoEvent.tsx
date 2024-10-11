import Yogoevent_Banner from '@dev/widgets/yogoevent/Yogoevent_Banner';
import Yogoevent_Intro from '@dev/widgets/yogoevent/Yogoevent_Intro';
import Yogoevent_Search from '@dev/widgets/yogoevent/Yogoevent_Search';

function YogoEvent() {
    return (
        <div className="flex-col-center">
            <Yogoevent_Intro />
            <Yogoevent_Search />
            <Yogoevent_Banner />
        </div>
    );
}
export default YogoEvent;
