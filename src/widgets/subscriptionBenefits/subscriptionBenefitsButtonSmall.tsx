import Box from '@dev/shared/components/box';
import Link from 'next/link';

interface SubscriptionBenefitsButton {
    text: string;
    url: string;
}

export default function SubscriptionBenefitsButtonSmall({
    text,
    url,
}: SubscriptionBenefitsButton) {
    return (
        <Link href={url}>
            <div className="mt-4">
                <Box
                    width="80px"
                    height="25px"
                    borderRadius="15px"
                    borderColor="#000000"
                    backgroundColor="none"
                    className="flex items-center relative cursor-pointer"
                >
                    <p className="text-[11px] m-auto text-black font-bold">
                        {text}
                    </p>
                </Box>
            </div>
        </Link>
    );
}
