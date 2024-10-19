import { useCallback, useState } from 'react';

export const useAsyncThrottle = ({
    action,
    dependence = [],
}: UseAsyncThrottleProps) => {
    const [state, setState] = useState(false);

    const event = useCallback(async () => {
        if (state) {
            return;
        }
        setState(true);
        await action();
        setState(false);
    }, dependence);

    return { event, state };
};

type UseAsyncThrottleProps = {
    action: () => Promise<void>;
    wait?: number;
    dependence?: unknown[];
};
