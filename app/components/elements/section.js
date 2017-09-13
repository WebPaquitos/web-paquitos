import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background: ${({ bgImage }) => {
        return `url(${bgImage}) no-repeat` || 'none';
    }};
    background-size: cover;
    background-attachment: ${({ bgFixed }) => bgFixed ? 'fixed' : 'inherit'};
`;

export const Sections = ({ children }) => {
    return <div className="sections">{children}</div>;
};

export const Section = ({ id, children, bgImage, bgFixed = false }) => {
    return (
        <StyledSection
            id={id}
            bgImage={bgImage}
            bgFixed={bgFixed}>
            {children}
        </StyledSection>
    );
};
