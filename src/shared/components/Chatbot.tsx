import Image from 'next/image';
import chatbotIconver1 from '@dev/shared/images/landing/chatbot_icon_ver1.png';
import Link from 'next/link';

export default function Chatbot() {
    return (
        <Link href="/chat-bot">
            <Image
                src={chatbotIconver1}
                alt="Chatbot Icon.ver1"
                width={50}
                height={50}
                className="fixed bottom-4 right-4 z-40"
            ></Image>
        </Link>
    );
}
