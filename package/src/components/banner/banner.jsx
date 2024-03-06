import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h2 className="title">FORE: Fundamentals of Robotics Education</h2>
                        <h4 className="subtitle font-light">A self-paced learning roadmap <br /> Designed for students by students</h4>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;
