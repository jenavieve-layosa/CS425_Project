import React from "react";

import PropTypes from "prop-types";
import { Row, Col, Container } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import shakey from '../../assets/images/Shakey.png';
import robotArm from '../../assets/images/robotArm.png';

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
                            Industrial robots is the largest commercial application of robotics in the world today, they have improved productivity, quality, precision and adaptability with minimal costs. 
                            The first industrial robot appeared in 1954 on a patent filed by a man named George Devol on the programmed article transfer. 
                            He later co-founded Unimation with Joseph Engelberger which was the first robot company that put a robot into service.
                            Their first robot was called Unimate and was used for extracting parts from a die-casting machine. It was an electronically controlled hydraulic heavy-lifting arm with six axes of motion and was capable for 
                            lifting objects and moving them with precision. This machine paved the way for the invention and regular use of arm robots in industry. 


                        </p>
                        <p>
                            Robotic arms are also knowna s robot manipulators, they are programmed and built to execute similar functions to a human arm. 
                            They are built for the execution of repetative tasks that may require extreme precision or immense strength, they help ensure safey and promote production. 
                            manipulators are connected by joints allowing rotational or linear motion. These robotic arms have end effectors at the end designed to perform tasks with great accuracy, depending on their application 
                            tasks include gripping, spinning, welding, painting, etc. These robotic manipulators can be autonomous or controlled manually and can be mobile or fixed to a specific location. 

                        </p>
                        <img src={robotArm} alt="robot arm" className="img-thumbnail" width = "300"/> 

                        <div className="white-space-filler"> secret secret secret</div>

                        <h6 className="font-bold"> Key Components</h6>


                        <p>
                        ●	Controllers - The controller is the main processor and acts as the brain of the robot, it receives commands from a program. 
                        <p>
                        ●	The arm has four major components: 
                        </p>
                        <Container style={{ marginLeft: 6}}>
                            <Row>
                                <Col xs={12}>
                        <p>
                        ○	Shoulder joint - this is the highest load bearing point in the arm and has three degrees of freedom: pitch, yaw and roll. The shoulder has the widest range of motion in the human body, and it is the foundation of most modern robotic arms. 
                        <p>
                        ○	Elbow joint - Many mechanical elbow joints have been used in robotic arm manufacture. The elbow joint provides extension, retraction, reach around and angular orientation of the wrist and hand. 
                        <p>
                        ○	Wrist joint - The wrist is a crucial component of even the earliest prototypes, it's the end-effector terminus and it allows the arm to be manipulated in a three-dimensional space. 
                        <p>
                        ○	Hand - this component defines the purpose and capacity of the robotic arm. The hand is a tool for multitasking capable of diverse tasks, it is also the research topic of many higher education institutions. 
                        </p>
                        </p>
                        </p>
                        </p>
                                </Col>
                            </Row>
                        </Container>
                        
                        Robotic arms are also composed of drives and sensors. 
                        <p>
                        ●	Drives - these are the motors that provide movement for every part of the robot. They are located in between the joints and regular rotation and linear movement. These move independently from each other at varying speeds and directions as dictated by the controller.
                        <p>
                        ●	Sensors - they allow manipulators to react to their environment. 
                        </p>
                        </p>
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
