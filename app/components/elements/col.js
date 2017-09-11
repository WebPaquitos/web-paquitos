import React from 'react';

export const Col = ({ children, xs, sm, md, lg, className = '' }) => {
    const xsSize = xs ? ` col-xs-${xs}` : '';
    const smSize = sm ? ` col-sm-${sm}` : '';
    const mdSize = md ? ` col-md-${md}` : '';
    const lgSize = lg ? ` col-lg-${lg}` : '';
    return (
        <div
            className={`col${xsSize}${smSize}${mdSize}${lgSize} ${className}`}>
            {children}
        </div>
    );
};
