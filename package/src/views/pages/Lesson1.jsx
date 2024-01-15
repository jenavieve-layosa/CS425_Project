import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import background1 from '../../assets/images/robot-background-black-white-1.jpg';


import logo from '../../assets/images/robot_logo.png';

const Lesson1 = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="title font-bold text-darkblue">Lesson 1: An Introduction to the World of Robotics</h1>
                            <h6 className="subtitle text-darkblue">The significance of ROS, prerequisites and resources, and what is a robot?</h6>
                            
                        </Col>
                    </Row>
                    </Container>
                 
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
                        <p>
                            By the end of this section, you will master the core elements of ROS architecture, including the roles of the ROS master,
                            nodes, topics, messages, services, parameters, and actions. 
                            
                        </p>
                        <div className="static-slider-1">
                                <Row className="justify-content-center">
                                    <Col md="6" className="align-self-center text-center">
                                        <h1 className="title"></h1>
                                        <h6 className="subtitle op-8"></h6>
                                    </Col>
                                </Row>
                        </div>
                                    
                        

                        <h3>Learning Goals:</h3>
                        <ol>
                            <li>Understand the role of the ROS master in managing the ROS system.</li>
                            <li>Comprehend the concept of nodes and their role in computation.</li>
                            <li>Learn how topics facilitate communication between nodes through messages.</li>
                            <li>Explore the use of services for inter-node communication.</li>
                            <li>Understand parameters and their role in storing and retrieving data.</li>
                            <li>Gain knowledge of ROS actions and their purpose in task-specific functionality.</li>
                        </ol>

                        <h3>Learning Portion:</h3>
                        <p>
                            Let's start with the ROS master. The ROS master is a crucial component that manages the entire ROS system.
                            It tracks all active nodes, services, and topics. When a node wants to communicate with another node,
                            it registers with the ROS master and uses topics for communication.
                        </p>

                        <p>
                            Nodes are individual processes that perform specific computations. They can be sensors, controllers, or planners.
                            Nodes communicate with each other by publishing and subscribing to topics. Topics are communication channels that allow
                            nodes to exchange messages. Messages are structured data used for communication. They can be simple, like integers,
                            or complex, like sensor readings or image data.
                        </p>

                        <p>
                            Services provide a way for one node to request work from another node. It's like making a function call in programming.
                            Parameters are variables that nodes can use to store and retrieve data. They provide a convenient way to configure node behavior.
                            Actions are more complex than services and are suitable for tasks that require goal tracking and feedback.
                        </p>

                        {/* Add more content as needed for the learning portion */}
                        {/* Use headings, paragraphs, and code snippets for clear explanations */}

                        <h3>Vocabulary:</h3>
                        <ul>
                            <li>ROS Master: The central hub managing the ROS system. It tracks all active nodes, services, and topics.</li>
                            <li>Node: An individual process that performs specific computations. Nodes communicate through topics.</li>
                            <li>Topic: A communication channel used by nodes to exchange messages. Topics enable the flow of information between nodes.</li>
                            <li>Message: A data structure defining the information sent between nodes through topics. It can be as simple as an integer or as complex as a sensor reading.</li>
                            <li>Service: A function call that nodes can make to request work from another node. It allows nodes to perform specific tasks on demand.</li>
                            <li>Parameter: A variable that nodes can use to store and retrieve data. Parameters provide a convenient way to configure node behavior.</li>
                            <li>Action: A type of software component that performs a specific task. Actions are more complex than services and can have feedback and goal states.</li>
                        </ul>

                        <h3>Questions:</h3>
                        <ol>
                            <li>What is the role of the ROS master in the ROS system?</li>
                            <li>How do nodes communicate with each other in ROS?</li>
                            <li>Explain the purpose of ROS services.</li>
                            <li>How does the concept of topics facilitate communication between nodes?</li>
                            <li>Why are parameters important in configuring node behavior?</li>
                        </ol>

                        <h3>Simulations, Websites, and Resources:</h3>
                        <ul>
                            <li>ROS Wiki for in-depth information on ROS architecture.</li>
                            <li>ROS tutorials for practical exercises.</li>
                            <li>Online forums for discussions and problem-solving.</li>
                        </ul>
                    </div>

                    {/* End of Lesson Content */}
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

Lesson1.propTypes = {
    classes: PropTypes.object
};

export default Lesson1;