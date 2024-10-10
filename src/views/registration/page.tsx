import Image from 'next/image';
import registrationImage from '../../shared/images/registration.png';
import RegistrationButton from '@dev/shared/components/button';

export default function Registration() {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center items-center ">
                    <div className="flex flex-col gap-4">
                        <p className="text-teal-500 text-3xl font-bold">
                            요고 요금제 변경
                        </p>
                        <div className="flex flex-col gap-2 text-black text-4xl font-bold">
                            <p>자급제폰 KT고객님</p>
                            <p>알뜰한 요금제</p>
                            <p>요고로 변경하세요.</p>
                        </div>
                    </div>
                    <Image
                        src={registrationImage}
                        width={350}
                        height={360}
                        alt="image"
                    />
                    <RegistrationButton>
                        핸드폰 등록 및 요금제 변경하기
                    </RegistrationButton>
                </div>
            </div>
        </>
    );
}
