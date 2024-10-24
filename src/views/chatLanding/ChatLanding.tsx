import yogo from '@devShared/images/chatBot/yogo.svg';
import chatbotLogo from '@devShared/images/chatBot/chatbot_logo.svg';
import PageMove from '@devShared/components/PageMove';

const ChatLanding = () => {
    return (
        <div className={'h-[100vh]'}>
            <header className={'w-full h-[1vh] bg-[#01A59B]'}></header>
            <main
                className={
                    'w-full h-[99vh] flex flex-col justify-between items-center pt-[5rem] pb-[3rem] gap-5'
                }
            >
                <h1 className={'font-neo-rg text-[2rem] flex-with-row gap-3'}>
                    챗봇 상담원
                    <img src={yogo} alt={'요고봇'} width={100} height={50} />
                </h1>
                <p className={'text-center'}>
                    요고 요금제에 대해 궁금한 내용을 <br />
                    실시간으로 묻고 답하기!
                </p>
                <img src={chatbotLogo} alt={'로고'} width={250} />
                <div className="flex flex-col items-center gap-5">
                    <PageMove
                        className={
                            'rounded-[2rem] bg-[#01A59B] text-white text-[1rem] text-center py-4 px-10 box-border'
                        }
                        path={'/chat-bot/yogo'}
                        label={'요고 요금제 상담하기'}
                    />
                    <PageMove
                        className={
                            'rounded-[2rem] bg-[#017FA5] text-white text-[1rem] text-center py-4 px-10 box-border'
                        }
                        path={'/chat-bot/comparison'}
                        label={'타사 요금제와 비교하기'}
                    />
                </div>
            </main>
        </div>
    );
};

export default ChatLanding;
