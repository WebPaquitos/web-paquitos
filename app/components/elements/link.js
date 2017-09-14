import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link as RouterLink } from 'react-router-dom';
import { getColorByCategory } from './variables';

const StyledLink = styled(RouterLink)`
    display: flex;
    position: relative;
    padding: 5px 10px;
    justify-content: center;
    align-items: flex-end;
    min-width: 100px;
    width: fit-content;
    cursor: pointer;
    transition: all .2s;
    color: ${({ type }) => getColorByCategory(type)} !important;
    &:after {
        position: absolute;
        content: ' ';
        height: 1px;
        width: 70%;
        left: 50%;
        bottom: 5px;
        transform: translate(-50%, 0);
        background-color: ${({ type }) => getColorByCategory(type)} !important;
    }
    &:hover {
        text-decoration: none;
        color: ${({ type }) => darken(0.05, getColorByCategory(type))} !important;
        &:after {
            background-color: ${({ type }) => darken(0.05, getColorByCategory(type))} !important;
        }
    }
    &:focus { outline: none; }
`;

export const Link = ({ children, type, to, className, unstyled = false }) => {
    if (unstyled) return <RouterLink to={to} className={className}>{children}</RouterLink>;
    return (
        <StyledLink
            to={to}
            type={type}
            className={className}>
            {children}
        </StyledLink>
    );
};
