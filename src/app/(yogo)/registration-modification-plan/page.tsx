import RegistrationGuide from '@devWidgets/registration/components/RegistrationGuide';
import RegistrationCheck from '@devWidgets/registration/components/RegistrationCheck';
import RegistrationUsing from '@devWidgets/registration/components/RegistrationUsing';
import RegistrationChange from '@devWidgets/registration/components/RegistrationChange';
import Payment from '@dev/shared/components/registration/Payment';

const Page = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <RegistrationGuide />
            <RegistrationCheck />
            <RegistrationUsing />
            <RegistrationChange />
            <Payment />
        </section>
    );
};

export default Page;
