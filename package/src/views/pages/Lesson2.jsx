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
                            <h6 className="lesson-subtitle text-darkblue">The significance of ROS, why did everyone start using ROS, and how you can start using it now</h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    
                    <Container maxWidth="lg">
                    <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                            Welcome to Lesson 2 of our ROS Programming course. In this lesson, we'll dive into the fundamentals of ROS architecture,
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
                        <div className="static-slider-1">
                                <Row className="justify-content-center">
                                    <Col md="6" className="align-self-center text-center">
                                        <h1 className="title"></h1>
                                        <h6 className="subtitle op-8"></h6>
                                    </Col>
                                </Row>
                        </div>
                        <p>
                            .
                        </p> 
                        <div style={{ padding: '15px', border: '0px solid #ddd', borderRadius: '10px', marginBottom: '15px', marginTop: '5px' }}>

                        <h3 className= "subtitle font-bold text-darkblue">Fundamentals and history of ROS</h3>

                        <p>
                        ROS, born in the early 2000s at Stanford University, started as an open-source middleware
                        framework for robotics. Its fundamental design principles revolve around modularity, reusability,
                        and collaborative development. ROS provides a structured communication layer, a robust set of
                        tools, and a flexible framework for creating intricate robot behaviors. Over the years, ROS has
                        evolved through various versions, each introducing enhancements and expanded capabilities,
                        becoming a pivotal force in the robotics community.
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">Using Python to move your robot</h3>

                        <p>
                        Programming a robot to move forward using Python and ROS involves understanding ROS
                        nodes, topics, and Python scripts. By creating a simple script, we can command the robot to
                        move forward. This hands-on experience provides a practical understanding of the integration
                        between Python and ROS for basic robot control.
                        </p>                      


                        <h3 className= "subtitle font-bold text-darkblue">Knowledge Check: See if you can answer these questions!</h3>
                        <ol>
                            <li>What are the fundamental design principles of ROS?</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            
                        </ol>

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
