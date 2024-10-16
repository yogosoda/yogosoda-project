import { useCallback, useState } from 'react';
import throttle from '@devShared/utils/throttle';

export const useThrottle = ({
    fn,
    wait = 500,
    dependence = [],
}: ThrottleTypes) => {
    // 상태 관리 (선택 사항, 필요하다면 사용할 수 있음)
    const [state, setState] = useState(false);
    const event = useCallback(
        throttle({
            fn: (...args: unknown[]) => {
                // 실제로 호출된 함수가 실행될 때 상태 변경
                setState(true);
                fn(...args);
                setTimeout(() => setState(false), wait); // wait 시간 후에 상태를 복구
            },
            wait,
        }),
        dependence
    );

    return { event, state };
};

type ThrottleTypes = {
    fn: (..._args: unknown[]) => void; // 더 구체적인 함수 타입 정의;
    wait?: number;
    dependence?: unknown[];
};
