'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PlanMeta } from '@dev/entities/plans.types';
import ChatBotMessage from '@devWidgets/chatBotMessage/ChatBotMessage';
import {
    FirstMessage,
    QuestionAffordableTelecom,
    QuestionNetwork,
} from '@devShared/constants/chatBot/message';
import ChatBotQuestionButtonList from '@devShared/components/chatBot/ChatBotQuestionButtonList';
import {
    TelecomTypes,
    UseGetAffordableTelecomList,
    UseGetAffordableTelecomPlans,
    UseGetGeneralTelecomPlans,
} from '@devfeatures/chatBot/getUserPlan/model';

const GetUserPlan = ({
    setUserTelecom,
    setUserPlan,
    setLoading,
}: GetUserPlanProps) => {
    const [isTelecom, setIsTelecom] = useState<TelecomTypes>(null);
    const [network, setNetwork] = useState<TelecomTypes>(null);

    const [affordableTelecom, setAffordableTelecom] = useState<string | null>(
        null
    );

    const { isAffordableTelecom, loading: generalTelecomPlansLoading } =
        UseGetGeneralTelecomPlans({
            telecom: isTelecom,
            setUserPlan,
            setUserTelecom,
        });

    const { affordableTelecomCategory, loading: affordableTelecomListLoading } =
        UseGetAffordableTelecomList({ network });

    const { loading: affordableTelecomPlansLoading } =
        UseGetAffordableTelecomPlans({
            network,
            affordableTelecom,
            setUserPlan,
            setUserTelecom,
        });

    useEffect(() => {
        if (isAffordableTelecom) {
            setLoading(affordableTelecomPlansLoading);
        } else {
            setLoading(generalTelecomPlansLoading);
        }
    }, [affordableTelecomPlansLoading, generalTelecomPlansLoading]);

    return (
        <div className={'w-full flex-with-col gap-2.5 mb-[10px]'}>
            <ChatBotMessage text={FirstMessage} />
            <ChatBotQuestionButtonList
                value={isTelecom}
                setValue={setIsTelecom}
                options={['KT', 'SKT', 'LGU+', '알뜰폰']}
            />
            {isAffordableTelecom && (
                <>
                    <ChatBotMessage text={QuestionNetwork} />
                    <ChatBotQuestionButtonList
                        value={network}
                        setValue={setNetwork}
                        options={['KT', 'SKT', 'LGU+']}
                    />
                </>
            )}
            {network && (
                <>
                    <ChatBotMessage
                        text={QuestionAffordableTelecom}
                        loading={affordableTelecomListLoading}
                    />
                    {affordableTelecomListLoading || (
                        <ChatBotQuestionButtonList
                            value={affordableTelecom}
                            setValue={setAffordableTelecom}
                            options={affordableTelecomCategory}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default GetUserPlan;

type GetUserPlanProps = {
    setUserTelecom: Dispatch<SetStateAction<string | null>>;
    setUserPlan: Dispatch<SetStateAction<PlanMeta[] | null>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
};
