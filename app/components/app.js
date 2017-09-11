import React, { Component } from 'react';
import BgImg from '../assets/img/bg.jpg';
import { Button, Link, Section, Container } from './elements';

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
            <div className="sections">
                <Section bgImage={BgImg}>
                    <Container>
                        <h1 className="title">React Redux Boilerplate</h1>
                        <p className="body">It works! :o</p>
                        <Button
                            btn="primary"
                            loading={this.state.loading}
                            onClick={this.onButtonClick.bind(this)}>
                            Click me
                        </Button>
                        <Link
                            type="secondary"
                            onClick={() => console.log('link clicked')}>
                            Some link
                        </Link>
                    </Container>
                </Section>
                <Section bgImage={BgImg} bgFixed>
                    <Container>
                        <h1 className="title">second section</h1>
                    </Container>
                </Section>
            </div>
        );
    }
}
