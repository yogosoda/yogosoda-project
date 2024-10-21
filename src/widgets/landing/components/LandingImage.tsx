import Image from 'next/image';
import landingImage from '@dev/shared/images/landing/landing_image.png';

export default function LandingImage() {
    return (
        <Image
            src={landingImage}
            alt="Landing Image"
            width={500}
            height={500}
            className="mt-[20px]"
        />
    );
}
