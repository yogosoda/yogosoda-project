import { useCallback, useState } from 'react';

export const useThrottle = ({ fn, dependence = [] }: ThrottleTypes) => {
    // 상태 관리 (선택 사항, 필요하다면 사용할 수 있음)
    const [state, setState] = useState(false);

    const event = useCallback(async (...args: unknown[]) => {
        setState(true);
        await fn(...args);
        setState(false);
    }, dependence);

    return { event, state };
};

type ThrottleTypes = {
    fn: (..._args: unknown[]) => Promise<void>; // 더 구체적인 함수 타입 정의;
    wait?: number;
    dependence?: unknown[];
};
