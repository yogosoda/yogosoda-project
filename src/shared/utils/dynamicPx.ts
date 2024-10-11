const baseWidth = 390;
const baseHeight = 884;

const currentWidth = window.innerWidth;
const currentHeight = window.innerHeight;

// 너비와 높이 비율 계산
const widthRatio = currentWidth / baseWidth;
const heightRatio = currentHeight / baseHeight;

export const scaleFont = (fontSize: number) => {
    return (fontSize * widthRatio).toFixed(1) + 'px';
};

export const scaleWidth = (width: number) => {
    return (width * widthRatio).toFixed(1) + 'px';
};

export const scaleHeight = (height: number) => {
    return (height * heightRatio).toFixed(1) + 'px';
};
