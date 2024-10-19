import { forwardRef } from 'react';
import Image from 'next/image';
import yogo_plan_banner from '@devShared/images/yogoevent/yogo_plan_banner.png';
import yogo_plan_table from '@devShared/images/yogoevent/yogo_plan_table.png';

function YogoeventPlanTable() {
    return (
        <section id="1" className="flex-col-center w-full bg-[#f1ffff] py-8">
            <Image src={yogo_plan_banner} alt="배너" width={358}></Image>
            <Image src={yogo_plan_table} alt="테이블" width={358}></Image>
        </section>
    );
}
export default forwardRef(YogoeventPlanTable);
