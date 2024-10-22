import yogoBenefitsImage7 from '@dev/shared/images/directImage/yogo_benefits_image7.png';
import yogoBenefitsImage8 from '@dev/shared/images/directImage/yogo_benefits_image8.png';
import yogoBenefitsImage9 from '@dev/shared/images/directImage/yogo_benefits_image9.png';
import yogoBenefitsImage10 from '@dev/shared/images/directImage/yogo_benefits_image10.png';
import LandingBox from './LandingBox';

export default function LandingBoxRow() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 mb-[25px]">
            <LandingBox
                borderColor="#FBEEC4"
                backgroundColor="#FBEEC4"
                imageSrc={yogoBenefitsImage10}
                imageAlt="Yogo Benefits Image10"
                subtitle="다이렉트로 쉽고 빠르게 !"
                title="요고 다이렉트"
                url="/direct"
            />
            <LandingBox
                borderColor="#D2ECC6"
                backgroundColor="#D2ECC6"
                imageSrc={yogoBenefitsImage8}
                imageAlt="Yogo Benefits Image8"
                subtitle="요고 가입하고 혜택 쏙!쏙!"
                title="요고 가입 혜택"
                url="/subscription-benefits"
            />
            <LandingBox
                borderColor="#FAD3D3"
                backgroundColor="#FAD3D3"
                imageSrc={yogoBenefitsImage9}
                imageAlt="Yogo Benefits Image9"
                subtitle="요고에 대해 더 알고싶다면"
                title="요고 브랜드 스토리"
                url="/brand-story"
            />
            <LandingBox
                borderColor="#CCE4F5"
                backgroundColor="#CCE4F5"
                imageSrc={yogoBenefitsImage7}
                imageAlt="Yogo Benefits Image7"
                subtitle="요금제 고민 끝 !"
                title="핸드폰 등록 및 요금제"
                url="/yogo-event"
            />
        </div>
    );
}
