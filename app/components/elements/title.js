import React from 'react';
import styled from 'styled-components';

const StyledTitle = {
    feature: styled.h1`
        font-size: 60px;
    `,
    sub: styled.h2`
        font-size: 40px;
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
