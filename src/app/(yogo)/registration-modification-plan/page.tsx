import RegistrationGuide from '@devWidgets/registration/components/RegistrationGuide';
import RegistrationCheck from '@devWidgets/registration/components/RegistrationCheck';
import RegistrationUsing from '@devWidgets/registration/components/RegistrationUsing';
import RegistrationChange from '@devWidgets/registration/components/RegistrationChange';

const Page = () => {
    return (
        <section className="flex flex-col justify-center items-center">
            <RegistrationGuide />
            <RegistrationCheck />
            <RegistrationUsing />
            <RegistrationChange />
        </section>
    );
};

export default Page;
