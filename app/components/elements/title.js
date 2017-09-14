import React from 'react';
import styled from 'styled-components';

const StyledTitle = {
    feature: styled.h1`
        font-size: 60px;
        color: #fff;
    `,
    sub: styled.h2`
        font-size: 40px;
        color: #fff;
    `,
};

export const Title = ({ children, type }) => {
    const TitleType = StyledTitle[type];
    return (
        <TitleType>
            {children}
        </TitleType>
    );
};
