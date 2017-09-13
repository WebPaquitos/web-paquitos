import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import BgImg from '../assets/img/bg.jpg';
import {
    Button, Sections,
    Section, Container,
    Row, Col, Title, Link,
    Transition,
} from './elements';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onScrollCheckpoint = this.onScrollCheckpoint.bind(this);
    }

    state = {
        loading: false,
        scrollPoint1: {
            flag: false,
            touched: false,
        },
    };

    onButtonClick() {
        if (this.state.loading) return;
        this.setState({ loading: !this.state.loading });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    onScrollCheckpoint(el) {
        if (el) {
            this.setState((prevState) => {
                if (!prevState[el.id].flag) {
                    return {
                        [el.id]: {
                            flag: !prevState[el.id].flag,
                            touched: true,
                        },
                    };
                }
                return prevState;
            });
        }
    }

    render() {
        const { scrollPoint1: { flag, touched } } = this.state;
        return (
            <Sections>
                <Section bgImage={BgImg}>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="title">React Redux Boilerplate</h1>
                                <p className="body">It works! :o</p>
                                <Link to="/test" type="secondary">Go to test</Link>
                                <Button
                                    btn="primary"
                                    loading={this.state.loading}
                                    onClick={this.onButtonClick}>
                                    Click me
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section id="scrollPoint1" bgImage={BgImg} bgFixed>
                    <Container>
                        <Row>
                            <Col>
                                <Title type="feature">Cenas man!</Title>
                                <Button
                                    btn="secondary"
                                    loading={this.state.loading}
                                    onClick={this.onButtonClick}
                                    outline>
                                    Click me
                                </Button>
                                <Scrollspy
                                    items={['scrollPoint1']}
                                    onUpdate={this.onScrollCheckpoint}
                                    componentTag="span">
                                    <Transition
                                        transitionName="fade-in"
                                        transitionAppearTimeout={1000}
                                        transitionEnterTimeout={1000}
                                        transitionLeaveTimeout={1000}>
                                        {flag && touched && (<Link
                                            to="/">
                                            Some link
                                        </Link>)
                                        }
                                    </Transition>
                                </Scrollspy>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </Sections>
        );
    }
}
