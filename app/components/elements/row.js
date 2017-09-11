import React from 'react';

export const Row = ({ children, noGutters = false, className = '' }) => {
    const noGuttersClass = noGutters ? ' no-gutters ' : '';
    return <div className={`row${noGuttersClass} ${className}`}>{children}</div>;
};
