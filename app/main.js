import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Router>
                <Switch>
                    <Route exact path="/" component={Component}/>
                    {
                        /* add other routes here to guarantee
                    only one component is rendered at a time */
                    }
                </Switch>
            </Router>
        </AppContainer>
        , document.querySelector('.container'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const newApp = require('./components/app').default;
        render(newApp);
    });
}
