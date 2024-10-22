import { useCallback, useState } from 'react';

export const useThrottle = ({
    action,
    dependence = [],
    wait = 500,
}: UseThrottleProps) => {
    const [state, setState] = useState(false);

    const event = useCallback(() => {
        if (state) {
            return;
        }
        setState(true);
        action();
        setTimeout(() => {
            setState(false);
        }, wait);
    }, dependence);

    return { event, state };
};

type UseThrottleProps = {
    action: () => void;
    wait?: number;
    dependence?: unknown[];
};
