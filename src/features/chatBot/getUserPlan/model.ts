import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PlanMeta } from '@dev/entities/plans.types';
import {
    getAffordableTelecomList,
    getAffordableTelecomPlans,
    getGeneralTelecomPlans,
} from '@devfeatures/chatBot/getUserPlan/api';

export const UseGetGeneralTelecomPlans = ({
    telecom,
    setUserPlan,
    setUserTelecom,
}: UseGetGeneralTelecomPlansProps) => {
    const [isAffordableTelecom, setISAffordableTelecom] =
        useState<boolean>(false);

    useEffect(() => {
        if (!telecom) {
            return;
        }

        if (telecom === '알뜰폰') {
            setISAffordableTelecom(true);
            return;
        }
        if (!['KT', 'LGU+', 'SKT'].includes(telecom)) {
            return;
        }
        const param = telecom === 'LGU+' ? 'lgu' : telecom;
        getGeneralTelecomPlans({ telecom: param }).then((plans) => {
            if (plans) {
                setUserTelecom(telecom);
                setUserPlan(plans);
            }
        });
    }, [telecom]);

    return isAffordableTelecom;
};

type UseGetGeneralTelecomPlansProps = {
    telecom: TelecomTypes;
    setUserTelecom: Dispatch<SetStateAction<string | null>>;
    setUserPlan: Dispatch<SetStateAction<PlanMeta[] | null>>;
};

export const UseGetAffordableTelecomPlans = ({
    network,
    affordableTelecom,
    setUserPlan,
    setUserTelecom,
}: UseGetAffordableTelecomPlansProps) => {
    useEffect(() => {
        if (!network || !affordableTelecom) {
            return;
        }
        if (!['KT', 'LGU+', 'SKT'].includes(network)) {
            return;
        }
        const param = network === 'LGU+' ? 'LGU' : network;
        getAffordableTelecomPlans({
            network: param,
            id: affordableTelecom,
        }).then((plans) => {
            if (plans) {
                setUserTelecom(affordableTelecom);
                setUserPlan(plans);
            }
        });
    }, [network, affordableTelecom]);
};

type UseGetAffordableTelecomPlansProps = {
    network: TelecomTypes;
    affordableTelecom: TelecomTypes;
    setUserTelecom: Dispatch<SetStateAction<string | null>>;
    setUserPlan: Dispatch<SetStateAction<PlanMeta[] | null>>;
};

export const UseGetAffordableTelecomList = ({
    network,
}: GetAffordableTelecomListProps) => {
    const [affordableTelecomCategory, setAffordableTelecomCategory] = useState<
        string[]
    >([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (!network) {
            return;
        }
        if (!['KT', 'LGU+', 'SKT'].includes(network)) {
            return;
        }

        const param = network === 'LGU+' ? 'LGU' : network;
        setLoading(true);
        getAffordableTelecomList({ network: param })
            .then((affordableTelecomList) => {
                if (affordableTelecomList) {
                    setAffordableTelecomCategory(affordableTelecomList);
                }
            })
            .finally(() => {
                setLoading(true);
            });
    }, [network]);

    return { affordableTelecomCategory, loading };
};

type GetAffordableTelecomListProps = {
    network: TelecomTypes;
};

export type TelecomTypes = string | null;
