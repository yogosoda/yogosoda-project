import React from 'react';
import { BoxProps } from '../types/component.type';

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
