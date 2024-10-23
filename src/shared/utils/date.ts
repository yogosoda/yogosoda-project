export const getKoreanTime = (time?: string) => {
    const date = time ? new Date(time) : new Date();
    const koreaTime = date.toLocaleTimeString('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return koreaTime;
};
