import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner2 = () => {
    return (
        <div className="static-slider-head banner2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">FORE: Fundamentals of Robotics Education</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
