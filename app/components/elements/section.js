import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    width: 100vw;
    min-height: 100vh;
    padding-top: 110px;
    background-color: ${({ bgColor }) => bgColor || '#fff'};
    background: ${({ bgImage }) => {
        return bgImage ? `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgImage}) no-repeat` : '';
    }};
    background-size: cover;
    background-attachment: ${({ bgFixed }) => bgFixed ? 'fixed' : 'inherit'};
`;

export const Sections = ({ children }) => {
    return <div className="sections">{children}</div>;
};

export const Section = ({ id, children, bgImage, bgColor, bgFixed = false }) => {
    return (
        <StyledSection
            id={id}
            bgImage={bgImage}
            bgColor={bgColor}
            bgFixed={bgFixed}>
            {children}
        </StyledSection>
    );
};
