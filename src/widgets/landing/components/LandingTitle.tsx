import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';
import landingLogoKT from '@dev/shared/images/landing/landing_logo_kt.png';
import chatbotIconver2 from '@dev/shared/images/landing/chatbot_icon_ver2.png';
import chatbotNotice from '@dev/shared/images/landing/chatbot_notice.png';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingTitle() {
    return (
        <div className="flex justify-between items-center">
            <Image
                src={yogoMembershipLogo}
                alt="Yogo Membership Logo"
                width={50}
                height={50}
                className="m-[10px]"
            />
            <div className="flex items-center gap-2 m-[10px]">
                <Image
                    src={chatbotNotice}
                    alt="Chatbot Notice"
                    width={100}
                    height={100}
                />
                {/* 챗봇 추가 후, 경로 수정 */}
                <Link href="/">
                    <Image
                        src={chatbotIconver2}
                        alt="Chatbot Icon.ver2"
                        width={17}
                        height={20}
                    />
                </Link>
                <Image
                    src={landingLogoKT}
                    alt="Landing Logo KT"
                    width={90}
                    height={100}
                />
            </div>
        </div>
    );
}
