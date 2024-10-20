import yogoMembershipLogo from '@dev/shared/images/subscriptionImage/yogo_membership_logo.png';
import Image from 'next/image';

export default function LandingTitle() {
    return (
        <div>
            <Image
                src={yogoMembershipLogo}
                alt="Yogo Membership Logo"
                width={50}
                height={50}
                className="m-[10px]"
            />
        </div>
    );
}
