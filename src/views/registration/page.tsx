'use client';
import RegistrationGuide from '@dev/widgets/registration/components/RegistrationGuide';
import RegistrationCheck from '@dev/widgets/registration/components/RegistrationCheck';
import RegistrationUsing from '@dev/widgets/registration/components/RegistrationUsing';
import RegistrationChange from '@dev/widgets/registration/components/RegistrationChange';

export default function Registration() {
    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <RegistrationGuide />
                <RegistrationCheck />
                <RegistrationUsing />
                <RegistrationChange />
            </section>
        </>
    );
}
