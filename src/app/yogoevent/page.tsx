import YogoEvent from '@dev/views/YogoEvent';
import { twMerge } from 'tailwind-merge';

// 요고 가입 혜택을 나타내기 위한 페이지입니다
function page() {
    return (
        <main className={twMerge('flex-col-center h-fit px-5 bg-white')}>
            <YogoEvent />
        </main>
    );
}
export default page;
