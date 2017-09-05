import React from 'react';
import styled from 'styled-components';
import Ionicon from 'react-ionicons';
import { getColorByCategory } from './variables';

const LoaderStyled = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Loader = ({ type, large = false, outline = false }) => {
    return (
        <LoaderStyled>
            <Ionicon
                icon="ion-load-c"
                color={outline ? getColorByCategory(type) : getColorByCategory()}
                fontSize={large ? '5rem' : '1.5rem'}
                rotate/>
        </LoaderStyled>
    );
};
