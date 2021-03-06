import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Loader } from './loader';
import { LIGHT_TEXT, getColorByCategory } from './variables';

const StyledButton = styled.button`
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    width: fit-content;
    transition: all .2s;
    border: ${({ btn }) => `1px solid ${getColorByCategory(btn)}`};
    border-radius: 5px;
    background-color: ${({ outline, btn }) => {
        if (outline) return 'transparent';
        return getColorByCategory(btn);
    }};
    color: ${({ outline, btn }) => {
        if (outline) return getColorByCategory(btn);
        return LIGHT_TEXT;
    }};
    &:hover {
        background-color: ${({ outline, btn }) => {
            if (outline) return 'transparent';
            return darken(0.05, getColorByCategory(btn));
        }};
        color: ${({ outline, btn }) => {
            if (outline) return darken(0.05, getColorByCategory(btn));
            return LIGHT_TEXT;
        }};
        border: ${({ btn }) => `1px solid ${darken(0.05, getColorByCategory(btn))}`};
    }
    &:focus {
        outline: none;
    }
`;

export const Button = ({ children, btn, outline = false, onClick, loading }) => {
    return (
        <StyledButton
            btn={btn}
            outline={outline}
            onClick={onClick}>
            {loading ? <Loader type={btn} outline={outline}/> : children}
        </StyledButton>
    );
};
