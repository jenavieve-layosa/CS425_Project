import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

const Buttons = () => {
    return (
        <div id="element">
            <div className="spacer" id="reactstrap-components">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Lessons</h1>
                            <h6 className="subtitle">Our team has split the learning journey into 10 different lessons for users to work through. These lessons assume that you have a basic understanding of programming in Python.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <div>
                            <Button color="primary">Lesson 1</Button>{' '}
                            <Button color="primary">Lesson 2</Button>{' '}
                            <Button color="primary">Lesson 3</Button>{' '}
                            <Button color="primary">Lesson 4</Button>{' '}
                            <Button color="primary">Lesson 5</Button>{' '}
                            <Button color="primary">Lesson 6</Button>{' '}
                            <Button color="primary">Lesson 7</Button>{' '}
                            <Button color="primary">Lesson 8</Button>{' '}
                            <Button color="primary">Lesson 9</Button>{' '}
                            <Button color="primary">Lesson 10</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Buttons;
