import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: ${({ bgImage }) => {
        return `url(${bgImage})` || 'none';
    }};
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${({ bgFixed }) => bgFixed ? 'fixed' : 'inherit'};
`;

export const Section = ({ children, bgImage = undefined, bgFixed = false }) => {
    return (
        <StyledSection
            bgImage={bgImage}
            bgFixed={bgFixed}>
            {children}
        </StyledSection>
    );
};
