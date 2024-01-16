import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img5 from '../../assets/images/img5.jpg';

const Lesson2 = () => {
    return (

        <div id="main-wrapper">
             <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="lesson-title font-bold text-darkblue">Lesson 2: A deeper dive into ROS</h1>
                            <h6 className="lesson-subtitle text-darkblue">The significance of ROS, prerequisites and resources, and what is a robot?</h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    
                    <Container maxWidth="lg">
                    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px', marginBottom: '20px' }}>
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                            Welcome to Lesson 1 of our ROS Programming course. In this lesson, we'll dive into the fundamentals of ROS architecture,
                            console commands, and creating ROS packages. By the end of this lesson, you'll have a solid understanding of key ROS concepts
                            and be ready to take your first steps in programming robots.
                        </p>

                        <h2 className="subtitle font-bold text-darkblue">What will you learn?</h2>
                        <ul>
                            <li>ROS architecture: Master, nodes, topics, messages, services, parameters, and actions</li>
                            <li>Console commands: Navigating and analyzing the ROS system and the catkin workspace</li>
                            <li>Creating ROS packages: Structure, launch-files, and best practices</li>
                        </ul>
                        </div>
                        <p>
                            By the end of this section, you will master the core elements of ROS architecture, including the roles of the ROS master,
                            nodes, topics, messages, services, parameters, and actions. 
                            
                        </p>
                        </Container>
                    <div className="spacer ">
                            <Container className="feature30">
                                <Row>
                                    <Col lg="6"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                                    <Col lg="6" md="4" className="text-center wrap-feature30-box">
                                        <Card className="card-shadow">
                                            <CardBody>
                                                <div className="p-20">
                                                    <span className="label label-info label-rounded">What is ROS?</span>
                                                    <h3 className="subtitle">ROS, Robot Operating System, serves as a meta-operating system for robots, providing essential services and tools for deeloping robotic applications.</h3>
                                                    <p>ROS was built with the goal of smooth and easy cross-collaboration, the base code and knowledge can be applied across all robotics platforms such as arms, drones, mobile bases, etc. </p>
                                                    
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                            <div>
                                <div className="spacer" id="card-component">
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col md="7" className="text-center">
                                                <h1 className="title font-bold">ROS: Robot Operating System</h1>
                                                <h6 className="subtitle">Next we're gonna tackle the turn. By the end of this lesson you robot will be able to complete one full revolution inside the simulation. You will learn to take into account real world limitations to your robot such as physics.</h6>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <Container>
                                    <Row>
                                        <Col md="6">
                                            <Card body className="card-shadow">
                                                <CardTitle>Fundamentals of ROS</CardTitle>
                                                <CardText>An overview of what goes into a revolution, common mistakes, and frequently asked questions</CardText>
                                                
                                            </Card>
                                        </Col>
                                        <Col md="6">
                                            <Card body className="card-shadow">
                                                <CardTitle>History of ROS</CardTitle>
                                                <CardText>ROS or Robot Operating System is a set of software libraries and tools that helps you build robot applications.</CardText>
                                                
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            
                        </div>
                   
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

Lesson2.propTypes = {
    classes: PropTypes.object
};

export default Lesson2;
