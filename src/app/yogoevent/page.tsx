import YogoEvent from '@dev/views/YogoEvent';
import { twMerge } from 'tailwind-merge';

function page() {
    return (
        <main className={twMerge('flexCol px-5 bg-white')}>
            <YogoEvent />
        </main>
    );
}
export default page;
