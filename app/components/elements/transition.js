import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const Transition = ({ children }) => {
    return (
        <CSSTransitionGroup
            transitionName="fade"
            transitionAppear
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {children}
        </CSSTransitionGroup>
    );
};
