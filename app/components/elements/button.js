import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Loader } from './loader';
import { LIGHT_TEXT, LIGHT_BG, getColorByCategory } from './variables';

const ButtonStyled = styled.button`
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    transition: all .2s;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ btn }) => getColorByCategory(btn)};
    border-radius: 5px;
    background-color: ${({ outline, btn }) => {
        if (outline) return LIGHT_BG;
        return getColorByCategory(btn);
    }};
    color: ${({ outline, btn }) => {
        if (outline) return getColorByCategory(btn);
        return LIGHT_TEXT;
    }};
    &:hover {
        background-color: ${({ outline, btn }) => {
            if (outline) return LIGHT_BG;
            return darken(0.05, getColorByCategory(btn));
        }};
        color: ${({ outline, btn }) => {
            if (outline) return darken(0.05, getColorByCategory(btn));
            return LIGHT_TEXT;
        }};
        border-color: ${({ btn }) => darken(0.05, getColorByCategory(btn))};
    }
    &:focus {
        outline: none;
    }
`;

export const Button = ({ children, btn, outline = false, onClick, loading }) => {
    return (
        <ButtonStyled
            btn={btn}
            outline={outline}
            onClick={onClick}>
            {loading ? <Loader type={btn} outline={outline}/> : children}
        </ButtonStyled>
    );
};
