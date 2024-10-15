import yogoMembershipImage1 from '@dev/shared/images/subscriptionImage/yogo_membership_image1.png';
import yogoMembershipImage2 from '@dev/shared/images/subscriptionImage/yogo_membership_image2.png';
import yogoMembershipImage3 from '@dev/shared/images/subscriptionImage/yogo_membership_image3.png';
import yogoMembershipImage4 from '@dev/shared/images/subscriptionImage/yogo_membership_image4.png';
import yogoMembershipImage5 from '@dev/shared/images/subscriptionImage/yogo_membership_image5.png';
import yogoMembershipImage6 from '@dev/shared/images/subscriptionImage/yogo_membership_image6.png';
import MembershipBenefitsBox from './membershipBenefitsBox';

export default function MembershipBenefitsRow() {
    return (
        <>
            <MembershipBenefitsBox
                height="160px"
                iconSrc={yogoMembershipImage4}
                iconAlt="Yogo Membership Image4"
                mainImageSrc={yogoMembershipImage1}
                mainImageAlt="Yogo Membership Image1"
                title="요고 40 이상 가입 시"
                subtitle="멤버십 VIP 제공"
            />
            <MembershipBenefitsBox
                height="220px"
                iconSrc={yogoMembershipImage5}
                iconAlt="Yogo Membership Image5"
                mainImageSrc={yogoMembershipImage2}
                mainImageAlt="Yogo Membership Image2"
                title="요고 전 요금제 가입 시"
                subtitle="영화 예매권 1+1 제공"
                detailText={
                    <>
                        멤버십 달달혜택 프로그램을
                        <br />
                        통한 <span className="font-bold">
                            롯데시네마 1+1
                        </span>{' '}
                        관람 쿠폰 제공
                    </>
                }
                additionalInfo={
                    <>
                        1+1 관람 쿠폰이란?
                        <br />
                        영화 관람권 2매 예매 시, 1매 가격으로 결제
                        <br />
                        (~ 24.12.31까지 혜택 제공)
                    </>
                }
            />
            <MembershipBenefitsBox
                height="220px"
                iconSrc={yogoMembershipImage6}
                iconAlt="Yogo Membership Image6"
                mainImageSrc={yogoMembershipImage3}
                mainImageAlt="Yogo Membership Image3"
                title="요고 55 이상 가입 시"
                subtitle="영화 예매권 2배 UP"
                detailText={
                    <>
                        VIP 초이스 혜택 중 롯데시네마
                        <br />
                        <span className="font-bold">
                            무료영화 예매 혜택 업그레이드
                        </span>{' '}
                        제공
                        <br />
                        (1매 &gt; 2매)
                    </>
                }
                additionalInfo={<>연관 최대 12매 제공 (VIP 초이스 6회)</>}
            />
        </>
    );
}
