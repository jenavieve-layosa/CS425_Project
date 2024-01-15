import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Card,  CardTitle, CardBody, CardText, Button, Container, Row, Col } from 'reactstrap';


import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';
import roadmap from '../../assets/images/roadmap.png';
import learning_robot from '../../assets/images/learning_robot_1.png';
import JsComponents from "../components/sections/js-components.jsx";


const Home = () => {


    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid text-center">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold">Welcome to the FORE Learning Hub!</h1>
                            <h6 className="subtitle">FORE: Fundamentals of Robotics Education is an interactive learning website for those of a high school to undergraduate level with an interest in learning how to program robotics!</h6>
                        </Col>
                    </Row>
                </Container>
                    <div className="intro-content">
                    
                    <img src={learning_robot} alt="Introduction to Robotics" className="img-rounded" width = "350"/>
                            <Container>
                                <Row>
                                    <Col md="6">
                                        <Card body className="card-shadow">
                                            <CardTitle>I am a Student in a Class</CardTitle>
                                            <CardText>FORE is an environment that you may learn under the supervision of an instructor who has made a class of their own. Sign up for the class and complete assignments, quizzes, and projects assigned by your teacher!</CardText>
                                            <Link to="/SignUp">
                                            <Button color="primary">Sign Up With Class Code</Button>
                                            </Link>
                                        </Card>
                                    </Col>
                                    <Col md="6">
                                        <Card body className="card-shadow">
                                            <CardTitle>I am an Independent Learner</CardTitle>
                                            <CardText>FORE is also designed for those who are simply interested in trying robotics out and do not have access to hardware. Follow our pre-determined learning path and start programming robotics today!</CardText>
                                            <Link to="/SignUp">
                                            <Button color="primary">Sign Up and Get Started!</Button>
                                            </Link>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="spacer feature4">
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col md="7" className="text-center">
                                            
                                            <h2 className="title">Hands-on Learning and Development</h2>
                                            <h6 className="subtitle">We at FORE believe that the best possible way for people to acquire the skills needed to work with robotics is to practice as much as possible. Each lesson in designed to teach an essential concept for robotics and then apply that in the project.</h6>
                                        </Col>
                                    </Row>
                                    
                                    <Row className="m-t-40">
                                        <Col md="6" className="wrap-feature4-box">
                                            <Card>
                                                <CardBody>
                                                    
                                                    <h5 className="font-medium">Lessons</h5>
                                                    <p className="m-b-5">1. Introduction to Robotics: What is ROS?</p>
                                                    <p className="m-b-5">2. Moving Forward: Getting your robot to move</p>
                                                    <p className="m-b-5">3. Timing it Right: Moving for Specified Time Amounts</p>
                                                    <p className="m-b-5">4. Tracking Your Position: Tracking Angels with an IMU</p>
                                                    
                            
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="wrap-feature4-box">
                                            <Card>
                                                <CardBody>
                                                   
                                                    <h5 className="font-medium">Projects</h5>
                                                    <p className="m-t-20">Our strategy: Trial by Fire. Real learnings starts with application and we want to provide ample oppurtunity for our users to try their hand at what they're learning. Our projects are straightforward and are designed to test your brand new skills!</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        <JsComponents />
                            <div className="spacer ">
                                    <Container className="feature30">
                                        <Row>
                                            <Col lg="10"><img src={img6} className="rounded img-responsive" alt="wrappixel" /></Col>
                                            <Col lg="6" md="9" className="text-center wrap-feature30-box">
                                                <Card className="card-shadow" style={{flex:1, backgroundColor:'lightpurple'}}>
                                                    <CardBody>
                                                        <div className="p-30">
                                                            <span className="label label-light-primary label-info label-rounded">Programming with ROS</span>
                                                            <h3 className="title">Master the Robot Operating System (ROS) to program and control robots. Dive into hands-on lessons and an interactive visual simulator.</h3>
                                                            <p>Experience a care-free environment to try your hand at programming in Python! Our coding environment is simple and easy, showing your robots movements in real time!</p>
                                                            <a className="btn btn-outline-primary btn-md btn-arrow m-t-20" href="/Simulator"><span>See Simulator <i className="ti-arrow-right"></i></span></a>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <h3>Advanced Robotics Concepts</h3>
                                <p>Delve into advanced topics such as robot localization, mapping, and control algorithms to elevate your robotics skills. Compare your skills with your peers, leave comments, start groups.</p>
                                <img src={img3} alt="Advanced Robotics Concepts" className="img-circle" width="290" />
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object
};

export default Home;