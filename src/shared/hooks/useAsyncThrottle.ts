import { useCallback, useState } from 'react';

export const useAsyncThrottle = ({
    action,
    dependence = [],
}: UseAsyncThrottleProps) => {
    const [state, setState] = useState(false);

    const run = async () => {
        await action();
    };

    const event = useCallback(() => {
        if (state) {
            return;
        }
        setState(true);
        run().finally(() => {
            setState(false);
        });
    }, dependence);

    return { event, state };
};

type UseAsyncThrottleProps = {
    action: () => Promise<void>;
    dependence?: unknown[];
};
