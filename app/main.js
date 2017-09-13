import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';
import Test from './components/test';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Router>
                <Switch>
                    <Route exact path="/" component={Component}/>
                    <Route path="/test" component={Test}/>
                </Switch>
            </Router>
        </AppContainer>
        , document.querySelector('#root'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const newApp = require('./components/app').default;
        render(newApp);
    });
}
