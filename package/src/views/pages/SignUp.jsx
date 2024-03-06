import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import img5 from '../../assets/images/img5.jpg';


const SignUp = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold">Sign Up or Create an Account</h1>
                            <h6 className="subtitle">Students can sign up with a specific class code or as an individual learner</h6>
                        </Col>
                    </Row>
                </Container>
                     
                </div>
            </div>
            <Footer />
        </div>
    );
}

SignUp.propTypes = {
    classes: PropTypes.object
};

export default SignUp;