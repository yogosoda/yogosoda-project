export const debounce = ({ fn, wait = 500 }: DebounceType) => {
    let debounceCall: ReturnType<typeof setTimeout> | null = null;

    return (...args: unknown[]) => {
        if (debounceCall) clearTimeout(debounceCall);
        debounceCall = setTimeout(() => {
            fn(...args);
        }, wait);
    };
};

type DebounceType = {
    fn: (..._args: unknown[]) => void; // 더 구체적인 함수 타입 정의;
    wait?: number;
};
