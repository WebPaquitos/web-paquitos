import React, { Component } from 'react';
import { Button } from './elements';

export default class App extends Component {
    state = { loading: false };

    onButtonClick() {
        if (this.state.loading) return;
        this.setState({ loading: !this.state.loading });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1 className="title">React Redux Boilerplate</h1>
                <p className="body">It works! :o</p>
                <Button
                    btn="primary"
                    loading={this.state.loading}
                    onClick={this.onButtonClick.bind(this)}>
                    Click me
                </Button>
            </div>
        );
    }
}
