import { useCallback } from 'react';

export const useDebounce = ({
    fn,
    wait = 500,
    dependence = [],
}: DebounceType) => {
    let debounceCall: ReturnType<typeof setTimeout> | null = null;

    return useCallback((...args: unknown[]) => {
        if (debounceCall) clearTimeout(debounceCall);
        debounceCall = setTimeout(() => {
            fn(...args);
        }, wait);
    }, dependence);
};

type DebounceType = {
    fn: (..._args: unknown[]) => void; // 더 구체적인 함수 타입 정의;
    wait?: number;
    dependence?: unknown[];
};
