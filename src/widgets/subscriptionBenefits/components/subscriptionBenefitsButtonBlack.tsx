import Box from '@dev/shared/components/box';
import { SubscriptionBenefitsButton } from '@dev/shared/types/subscriptionBenefits.type';
import Link from 'next/link';

export default function SubscriptionBenefitsButtonBlack({
    text,
    url,
}: SubscriptionBenefitsButton) {
    return (
        <Link href={url}>
            <div className="flex justify-center mb-[10px]">
                <Box
                    width="300px"
                    height="40px"
                    borderRadius="8px"
                    borderColor="#000000"
                    backgroundColor="black"
                    className="flex items-center relative cursor-pointer"
                >
                    <p className="text-[15px] m-auto text-white">{text}</p>
                </Box>
            </div>
        </Link>
    );
}
