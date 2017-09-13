import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const Transition = ({ children, transitionName = 'fade',
                               transitionAppearTimeout = 500,
                               transitionEnterTimeout = 500,
                               transitionLeaveTimeout = 300 }) => {
    return (
        <CSSTransitionGroup
            transitionAppear
            transitionName={transitionName}
            transitionAppearTimeout={transitionAppearTimeout}
            transitionEnterTimeout={transitionEnterTimeout}
            transitionLeaveTimeout={transitionLeaveTimeout}>
            {children}
        </CSSTransitionGroup>
    );
};
