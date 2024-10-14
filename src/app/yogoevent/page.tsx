import YogoEvent from '@dev/views/YogoEvent';
import { twMerge } from 'tailwind-merge';

function page() {
    return (
        <main className={twMerge('flex-col-center h-fit px-5 bg-white')}>
            <YogoEvent />
        </main>
    );
}
export default page;
