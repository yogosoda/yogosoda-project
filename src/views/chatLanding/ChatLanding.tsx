import yogo from '@devShared/images/chatBot/yogo.svg';
import chatbotLogo from '@devShared/images/chatBot/chatbot_logo.svg';
import PageMove from '@devShared/components/PageMove';

const ChatLanding = () => {
    return (
        <div className={'flex-1 flex-with-col'}>
            <header className={'w-full h-[30px] bg-[#01A59B]'}></header>
            <main className={'w-full flex-col-center flex-1 gap-5'}>
                <h1
                    className={
                        'font-neo-rg text-[2rem] flex-with-row gap-3 mt-[4rem]'
                    }
                >
                    챗봇 상담원
                    <img src={yogo} alt={'요고봇'} width={100} height={50} />
                </h1>
                <p className={'text-center'}>
                    요고 요금제에 대해 궁금한 내용을 <br />
                    실시간으로 묻고 답하기!
                </p>
                <img
                    src={chatbotLogo}
                    alt={'로고'}
                    width={350}
                    className={'mt-[4rem]'}
                />
                <PageMove
                    className={
                        'rounded-[2rem] bg-[#01CBB3] text-white text-[1rem] text-center py-4 px-10 box-border font-cafe mt-[6rem]'
                    }
                    path={'/chat-bot/yogo'}
                    label={'요금제 상담하기'}
                />
                <PageMove
                    className={
                        'rounded-[2rem] bg-[#1A97D6] text-white text-[1rem] text-center py-4 px-10 box-border font-cafe'
                    }
                    path={'/chat-bot/comparison'}
                    label={'요금제 비교하기'}
                />
            </main>
        </div>
    );
};

export default ChatLanding;
