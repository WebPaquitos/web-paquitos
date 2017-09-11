import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: ${({ bgImage }) => {
        return `url(${bgImage}) no-repeat` || 'none';
    }};
    background-size: cover;
    background-attachment: ${({ bgFixed }) => bgFixed ? 'fixed' : 'inherit'};
`;

export const Section = ({ children, bgImage, bgFixed = false }) => {
    return (
        <StyledSection
            bgImage={bgImage}
            bgFixed={bgFixed}>
            {children}
        </StyledSection>
    );
};
