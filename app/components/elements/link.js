import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { getColorByCategory } from './variables';

const StyledLink = styled.a`
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
        color: ${({ type }) => darken(0.05, getColorByCategory(type))} !important;
        &:after {
            background-color: ${({ type }) => darken(0.05, getColorByCategory(type))} !important;
        }
    }
    &:focus { outline: none; }
`;

export const Link = ({ children, type, onClick }) => {
    return (
        <StyledLink
            type={type}
            onClick={onClick}>
            {children}
        </StyledLink>
    );
};
