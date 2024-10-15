import React from 'react';

interface BoxProps {
    width?: string; // 너비
    height?: string; // 높이
    borderRadius?: string; // 테두리 반경
    borderWidth?: string; // 테두리 너비
    borderColor?: string; // 테두리 색상
    backgroundColor?: string; // 배경 색상
    className?: string; // className prop 추가
    children: React.ReactNode; // 자식 요소
}

export default function Box({
    width = '325px',
    height = '240px',
    borderRadius = '15px',
    borderWidth = '2px',
    borderColor = '#D9D9D9',
    backgroundColor = 'white',
    className = '',
    children,
}: BoxProps) {
    return (
        <div
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                borderWidth: borderWidth,
                borderColor: borderColor,
                backgroundColor: backgroundColor,
            }}
            className={className}
        >
            {children}
        </div>
    );
}
