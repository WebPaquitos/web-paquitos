import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BgImg from '../assets/img/bg.jpg';
import { Button, Section, Container, Row, Col, Title } from './elements';

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
                        <Row>
                            <Col>
                                <h1 className="title">React Redux Boilerplate</h1>
                                <p className="body">It works! :o</p>
                                <Link to="/test">Go to test</Link>
                                <Button
                                    btn="primary"
                                    loading={this.state.loading}
                                    onClick={this.onButtonClick.bind(this)}>
                                    Click me
                                </Button>
                                <Link
                                    to="/"
                                    type="secondary"
                                    onClick={() => console.log('link clicked')}>
                                    Some link
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section bgImage={BgImg} bgFixed>
                    <Container>
                        <Row>
                            <Col>
                                <Title type="feature">Cenas man!</Title>
                                <Button
                                    btn="primary"
                                    loading={this.state.loading}
                                    onClick={this.onButtonClick.bind(this)}>
                                    Click me
                                </Button>
                                <Link
                                    to="/"
                                    type="secondary"
                                    onClick={() => console.log('link clicked')}>
                                    Some link
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </div>
        );
    }
}
