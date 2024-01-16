import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img5 from '../../assets/images/robot-background-black-white-1.jpg';
import robots3things from '../../assets/images/a-robot-does.png';
import fields from '../../assets/images/fields.png';
import applications from '../../assets/images/applications-of-robots.jpg';

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
                            <h1 className="lesson-title font-bold text-darkblue">Lesson 1: An Introduction to the World of Robotics</h1>
                            <h6 className="lesson-subtitle text-darkblue">Students will be able to identify key prerequisites and resources for this course, understand the significance of ROS in robotics, and answer the question: What is a robot?</h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    <Container maxWidth="md">
                     <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '5px', marginBottom: '20px' }}>
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
                                    
                        <p>.</p>
                        
                        <div style={{ padding: '15px', border: '0px solid #ddd', borderRadius: '10px', marginBottom: '15px', marginTop: '5px' }}>
                        <h3 className= "lesson-subtitle font-bold text-darkblue">Learning Goals:</h3>
                        <ol>
                            <li>Definition of what is a robot and why they are important</li>
                            <li>An overview of robotics as a field and it's different sections</li>
                            <li>Understand what the goals of the robotics field are and how we achieve them</li>
                            <li>A basic definition of what ROS is and why we use it in robotics</li>
                            <li>Reccommended prerequisites for this course and associated sources</li>
                        </ol>

                        <h3 className= "subtitle font-bold text-darkblue">What is a robot?</h3>
                        <p>
                        A robot is an embodied agent programmed to execute complex actions. It is an
                        autonomous or semi-autonomous machine capable of sensing its environment and making
                        decisions based on computations. 
                        </p>
                        <p>
                            A robot typically does three things (see below):
                        </p>
                        <img src={robots3things} alt="" className="img-rounded" width = "550"/>
                        <p>
                            Different robots can 'sense' certain information depending on how their built and in what ways they experience their environment. Visual stimulus, temperature change, auditory input, different movements are all examples of information that a robot can gather in this first stage.
                            The stage of computation can involve everything from small electronic curcuits to multicore processors or even a cluster of networked computers. 
                            In action, robots vary the most, as some robots can move things around, manipulate objects, perform specific tasks, while others can output information, formulate responses, or provide answers to questions. 
                            
                        </p>
                    
                        <p>
                            Services provide a way for one node to request work from another node. It's like making a function call in programming.
                            Parameters are variables that nodes can use to store and retrieve data. They provide a convenient way to configure node behavior.
                            Actions are more complex than services and are suitable for tasks that require goal tracking and feedback.
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">An overview of the field of robotics</h3>

                        <p>
                        Robotics is an interdisciplinary field involving the development of systems
                        combining electrical and mechanical components with computers. It encompasses core
                        disciplines such as electrical and mechanical engineering, computer science, artificial
                        intelligence, computer vision, and applied mathematics. 
                        It is a fascinating and rapidly evolving field that contains many different sections such as: 
                        design, construction, programming, human-robot-interaction, mechatronics, bio-inspired robots, and much more.   
                        </p>
                        <p>
                        Robotics aims to create machines that assist humans in tasks that are repetitive,
                        precise, or dangerous. It merges various domains, fostering advancements in technology and
                        automation. It is at the forefront of technological innovation and it's advancements contribute greatly to the quality of daily life. 
                        The applications of robotics have profound imapcts on society, ranging from healthcare and manufacturing to exploration and entertainment.   
                        </p>
                        <img src={fields} alt="" className="img-rounded" width = "600"/>

                        <h3 className= "subtitle font-bold text-darkblue">Goals and Applications of Robotics</h3>
                                                    
                        <p>
                        Robotics is organized based on applications. Robots excel in tasks requiring
                        precision, repetitive work, and monotonous operations. Robots can be found in manufacturing industries for welding, material handling, painting, assembling, 
                        picking, packing, and palletizing, etc.  Similarly, robots can be found in agriculture for repetitive tasks like seeding, harvesting, weed control, optimal soil detection. 
                        Another common place to see robots in action is in healthcare, helping doctors with performing surgical procedures and providing therapy for patients.
                        On the other hand, robots have revolutionized exploration, as robots can explore places where humans cannot get to easily, like the depths of the ocean or outer space. 
                        Moreover, other sectors where robots are useful are entertainment, customer service, food preparation, security, etc.
                        </p>
                        <p>
                        <img src={applications} alt="" className="img-rounded" width = "550"/>
                        </p>

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
                    

                    {/* End of Lesson Content */}
                    </div>
                    
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