/* eslint-disable */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const Cards = () => {
    return (
        <div>
            <div className="spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Lesson 2</h1>
                            <h6 className="subtitle">Next we're gonna tackle the turn. By the end of this lesson you robot will be able to complete one full revolution inside the simulation. You will learn to take into account real world limitations to your robot such as physics.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle>Revolutions</CardTitle>
                            <CardText>An overview of what goes into a revolution, common mistakes, and frequently asked questions</CardText>
                            <Button color="primary">Show Graph</Button>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card body className="card-shadow">
                            <CardTitle>What is ROS?</CardTitle>
                            <CardText>ROS or Robot Operating System is a set of software libraries and tools that helps you build robot applications.</CardText>
                            <Button color="primary">Go to section</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards;
