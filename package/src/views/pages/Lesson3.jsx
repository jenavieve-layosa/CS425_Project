import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import shakey from '../../assets/images/Shakey.png';

const Lesson3 = () => {
    return (

        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="lesson-title font-bold text-darkblue">Lesson 3: Get to Know the Robot</h1>
                            <h6 className="lesson-subtitle text-darkblue">Robot Anatomy, Types of Robots, and Challenges we face with Robots today</h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    <Container maxWidth="md">
                     <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                        This lesson immerses us in the multifaceted realm of robotics, providing a
                        comprehensive understanding of the anatomy, challenges, and various types of robots. We
                        venture into the intricacies of each component, exploring their functionalities, real-world
                        applications, and the role they play in shaping the landscape of robotics.
                        </p>

                        <h2 className="subtitle font-bold text-darkblue">What will you learn?</h2>
                        <ul>
                            <li>More on the importance and application of Robots</li>
                            <li>Specific Robot Anatomy and how to use it</li>
                            <li>Types of different robots and their functions</li>
                            <li>Challenges facing the robotics community today</li>
                            
                        </ul>
                        <p>
                            By the end of this section, you will be able to identify different robots and what they can be used for, understand the parts that make up a robot and how they work with eachother, 
                            and define what challenges face robots today and what leaps are being made to overcome them.
                        </p>
                        <p>
                            Let's get started!
                        </p>
                        </div>
                        </Container>
                        <div className="static-slider-1">
                                <Row className="justify-content-center">
                                    <Col md="6" className="align-self-center text-center">
                                        <h1 className="title"></h1>
                                        <h6 className="subtitle op-8"></h6>
                                    </Col>
                                </Row>
                        </div>
                        <div style={{ padding: '20px', border: '0px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                        <p>
                            
                        </p> 
                        
                        <h5 className= "subtitle font-bold text-darkblue">A reminder on application</h5>

                        <p>
                        Robots are transformative agents across industries. In
                        manufacturing, they revolutionize assembly lines, enhancing precision and efficiency. In
                        healthcare, they perform delicate surgeries or assist the elderly, showcasing versatility in
                        diverse applications. Surgical robots, like the Da Vinci Surgical System, exemplify the
                        intersection of robotics and healthcare, enabling surgeons to conduct minimally invasive
                        procedures with enhanced precision.
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">Robot Anatomy</h3>

                        <p>
                        The anatomy of a robot is analogous to the human body&#39;s
                        structure. Actuators act as muscles, sensors as sensory organs, controllers as the brain,
                        and end effectors as hands. Understanding these components elucidates how robots
                        interact with their surroundings. An industrial robot&#39;s anatomy, with actuators providing motion,
                        sensors ensuring awareness, controllers processing information, and end effectors
                        performing tasks like welding or packaging.
                            </p> 

                        <h3 className = "subtitle font-bold text-darkblue"> Types of Robots</h3>

                        <p>
                            Robots are involved in many different industries and can fulfill a variety of purposes ***write a better intro here***
                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Industrial Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Service Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Mobile Robots </h5>

                        <p>
                            Mobile robotics demands a combination of different disciplines such as social and cognitive sciences, computer science and engineering, physics, mathematics, and many others. The key thing about mobile robots is, well, they're mobile. 
                            They are computers that perceive their environment through sensors and are able to perform a given task. The core focuses of mobile robot are locomotion, perception, cognition, and navigation. 
                        </p>
                        <p>
                            The first mobile robot was a robot named Shakey, developed at Stanford Research Institute in the 1970's.
                        </p>
                        <img src={shakey} alt="shakey" className="img-thumbnail" width = "400"/> 

                        <h5 className = 'subtitle font-bold text-darkblue'> Humanoid Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Agricultural Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Medical Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Exploration Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Military and Defense Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Educational Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Entertainment Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Collaborative Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Exoskeleton Robots </h5>

                        <p>

                        </p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Bio-inspired Robots </h5>
















                        </div>
                    </div>
                </div>
            <Footer />
        </div>
        
    );
}

Lesson3.propTypes = {
    classes: PropTypes.object
};

export default Lesson3;
