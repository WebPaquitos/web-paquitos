import React from 'react';
import { Transition } from './transition';

export const Container = ({ children }) => {
    return (
        <Transition>
            <div className="container">{children}</div>
        </Transition>
    );
};
