'use client';

import Box from '@dev/shared/components/box';
import Image, { StaticImageData } from 'next/image';
import buttonPlus from '@dev/shared/images/directImage/button_plus.png';
import buttonClose from '@dev/shared/images/directImage/button_close.png';
import { useState } from 'react';

export default function ModalButton({
    text,
    imageSrc,
    imageAlt = '',
}: ModalButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex justify-center my-[10px]" onClick={openModal}>
                <Box
                    width="172px"
                    height="40px"
                    borderRadius="8px"
                    borderColor="#A8A8A8"
                    className="flex items-center relative cursor-pointer"
                >
                    <p className="font-bold text-[15px] m-auto ml-[17px]">
                        {text}
                    </p>
                    {imageSrc && (
                        <Image
                            src={buttonPlus}
                            alt="Button Plus"
                            width={15}
                            height={10}
                            className="absolute right-[10px]"
                        />
                    )}
                </Box>
            </div>

            {isModalOpen && (
                <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-[90vw] h-[600px] bg-white p-6 rounded-md">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-lg font-bold">
                                요금제 한 눈에 보기
                            </h2>
                            <button onClick={closeModal}>
                                <Image
                                    src={buttonClose}
                                    alt="Button Close"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </div>
                        <div className="w-full h-[500px] overflow-x-auto">
                            <div className="min-w-[658px]">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={1000}
                                    height={1000}
                                    className="w-auto h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export type ModalButtonProps = {
    text: string;
    imageSrc: StaticImageData;
    imageAlt: string;
};
