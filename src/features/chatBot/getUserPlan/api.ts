import api from '@devShared/utils/api';
import { PlanMeta } from '@dev/entities/plans.types';
import { CustomError } from '@devShared/utils/error';

export const getGeneralTelecomPlans = async ({
    telecom,
}: {
    telecom: string;
}) => {
    try {
        const response = await api.get<PlanMeta[]>(`/api/plans/${telecom}`);
        const data = response.data;

        if (!data) {
            return [];
        }

        return data;
    } catch (e) {
        const error = e as CustomError;
        console.error(`error ${error.code} : ${error.message}`);
    }
};

export const getAffordableTelecomPlans = async ({
    network,
    id,
}: {
    network: string;
    id: string;
}) => {
    try {
        const response = await api.get<PlanMeta[]>(
            `/api/plans/mvno/${network}/${id}`
        );
        const data = response.data;

        if (!data) {
            return [];
        }

        return data;
    } catch (e) {
        const error = e as CustomError;
        console.error(`error ${error.code} : ${error.message}`);
    }
};

export const getAffordableTelecomList = async ({
    network,
}: {
    network: string;
}) => {
    try {
        const response = await api.get<string[]>(
            `/api/plans/mvno/${network}/names`
        );
        const data = response.data;

        if (!data) {
            return [];
        }

        return data;
    } catch (e) {
        const error = e as CustomError;
        console.error(`error ${error.code} : ${error.message}`);
    }
};
