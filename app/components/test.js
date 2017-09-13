import React, { Component } from 'react';
import BgImg from '../assets/img/bg.jpg';
import { Section, Container, Row, Col, Transition, Link } from './elements';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { items: ['hello', 'world', 'click', 'me'] };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        const newItems = this.state.items.concat([
            prompt('Enter some text'),
        ]);
        this.setState({ items: newItems });
    }

    handleRemove(i) {
        const newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({ items: newItems });
    }

    render() {
        const items = this.state.items.map((item, i) => {
            return (
                <div key={item} onClick={() => this.handleRemove(i)}>
                    {item}
                </div>
            );
        });

        return (
            <div>
                <div className="sections" key="2">
                    <Section bgImage={BgImg}>
                        <Container>
                            <Row>
                                <Col>
                                    <button onClick={this.handleAdd}>Add Item</button>
                                    <Link to="/" type="primary">Go to home</Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Transition>
                                        {items}
                                    </Transition>
                                </Col>
                            </Row>
                        </Container>
                    </Section>
                </div>
            </div>
        );
    }
}

export default Test;
