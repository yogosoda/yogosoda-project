import background1 from '@devShared/images/brandStory/brand-story-background1.svg';
import arrowLeft from '@devShared/images/brandStory/brand-arrow-left.svg';
import arrowRight from '@devShared/images/brandStory/brand-arrow-right.svg';
import slide1 from '@devShared/images/brandStory/slider1.png';
import slide2 from '@devShared/images/brandStory/slider2.png';
import slide3 from '@devShared/images/brandStory/slider3.png';
import slide4 from '@devShared/images/brandStory/slider4.png';
import slide5 from '@devShared/images/brandStory/slider5.png';
import slide6 from '@devShared/images/brandStory/slider6.png';
import Top from '@dev/widgets/brandStory/Top';
import Bottom from '@dev/widgets/brandStory/Bottom';

export default function BrandStory() {
    const images = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        background1,
        arrowLeft,
        arrowRight,
    ];

    return (
        <div className="w-full font-neo-hv">
            <Top images={images} />
            <Bottom />
        </div>
    );
}
