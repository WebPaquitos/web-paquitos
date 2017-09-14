import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Bg1Img from '../assets/img/bg1.jpg';
import Bg2Img from '../assets/img/bg2.jpg';
import {
    Button, Sections,
    Section, Container,
    Row, Col, Title, Link, Navbar,
} from './elements';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onScrollCheckpointNav = this.onScrollCheckpointNav.bind(this);
        this.toggleNavbarState = this.toggleNavbarState.bind(this);
    }

    state = {
        loading: false,
        navbarOpen: false,
        shadowOnNavbar: false,
    };

    onButtonClick() {
        if (this.state.loading) return;
        this.setState({ loading: !this.state.loading });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 1000);
    }

    onScrollCheckpointNav(waypoint) {
        if (waypoint.previousPosition === 'inside') this.setState({ shadowOnNavbar: false });
        else this.setState({ shadowOnNavbar: true });
    }

    toggleNavbarState() {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        const {
            navbarOpen,
            shadowOnNavbar,
            loading,
        } = this.state;
        return (
            <Sections>
                <Navbar
                    navbarOpen={navbarOpen}
                    shadowOnNavbar={shadowOnNavbar}
                    onMenuClick={this.toggleNavbarState}/>
                <Section bgImage={Bg1Img}>
                    <Container>
                        <Row>
                            <Col>
                                <Title type="feature">Welcome to this site!</Title>
                                <p className="body">It works! :o</p>
                                <Link to="/test" type="secondary">Go to test</Link>
                                <Button
                                    btn="primary"
                                    loading={loading}
                                    onClick={this.onButtonClick}>
                                    Click me
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section bgImage={Bg2Img} bgFixed>
                    <Waypoint
                        onLeave={this.onScrollCheckpointNav}
                        onEnter={this.onScrollCheckpointNav}/>
                    <Container>
                        <Row>
                            <Col>
                                <Title type="feature">Cenas man!</Title>
                                <Button
                                    btn="secondary"
                                    loading={loading}
                                    onClick={this.onButtonClick}
                                    outline>
                                    Click me
                                </Button>
                                <Link
                                    to="/">
                                    Some link
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Section>
                <Section bgImage={Bg1Img}>
                    <Container>
                        <Row>
                            <Col>
                                <Title type="feature">Welcome to this site!</Title>
                                <p className="body">It works! :o</p>
                                <Link to="/test" type="secondary">Go to test</Link>
                                <Button
                                    btn="primary"
                                    loading={loading}
                                    onClick={this.onButtonClick}>
                                    Click me
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </Sections>
        );
    }
}
