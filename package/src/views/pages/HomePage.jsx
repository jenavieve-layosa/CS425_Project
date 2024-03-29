import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { Card,  CardTitle, CardBody, CardText, Button, Container, Row, Col } from 'reactstrap';


import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img3 from '../../assets/images/img3.jpg';
import img6 from '../../assets/images/img6.jpg';
import learning_robot from '../../assets/images/learning_robot_1.png';

import Examples from "../pages/robotics_examples.jsx";




const Home = () => {


    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid text-center" id="top-section">
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
                            
                            <div className="spacer feature4">
                                <Container>
                                <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '10px', marginBottom: '15px', marginTop: '5px' }}>
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
                                                    <p className="m-b-5">1. Introduction to the World of Robotics</p>
                                                    <p className="m-b-5">2. A Deeper Dive into ROS</p>
                                                    <p className="m-b-5">3. Get to Know the Robot</p>
                                                    <p className="m-b-5">4. Programming Robotics using Python</p>
                                                    <p className="m-b-5">5. Moving Forward with your Robot</p>
                                                    
                            
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col md="6" className="wrap-feature4-box">
                                            <Card>
                                                <CardBody>
                                                   
                                                    <h5 className="font-medium">Projects</h5>
                                                    <p className="m-t-20">Our strategy: Trial by Fire. Real learnings starts with application and we want to provide ample oppurtunity for our users to try their hand at what they're learning. 
                                                    Our projects are straightforward and are designed to test your brand new skills!</p>
                                                    <p className="m-b-5">Learn how to move your robot forward!</p>
                                                    <p className="m-b-5">Making the robot turn in a circle</p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    </div>
                                </Container>
                            </div>
                            <div className="static-slider-1">
                                <Row className="justify-content-center">
                                    <Col md="6" className="align-self-center text-center">
                                        <h1 className="title"></h1>
                                        <h6 className="subtitle op-8"></h6>
                                    </Col>
                                </Row>
                                {' '}
                            </div>
                            <div style={{ padding: '1px', border: '0px solid #ddd', borderRadius: '1px', marginBottom: '1px', marginTop: '25px' }}>
                                  
                            <h3 className= "lesson-subtitle font-bold text-darkblue">How can I get started?</h3>
                            </div>
                            <p>
                                There are two different options available for starting your learning journey with us. If you are trying robotics out on your own you can sign up independently and move through the lessons at your own pace 
                                and you are given resourcse and help as well as the option to post a question to the question board if you get stuck. Students who are a part of a class that has signed up with FORE have the option of joining their class 
                                with a code from their teacher and they will be assigned lessons and projects as their class moves along. 
                            </p>
                            <p>
                                Our main goal at FORE is to make learning accessible, robotics is truly one of the industries that can change the world for better or for worse and we believe that the only way to faciliate positive change is through education. 
                                We want to provide as much of an oppurtunity to as many people as possible to gain that education and use it for innovation. 
                            </p>
                            
                                <p className="white-space-filler"> Shhhhhh... secret 
                                    </p>
                            
                            

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
                        <Examples />
                       
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