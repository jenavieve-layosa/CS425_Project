import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img5 from '../../assets/images/robot-background-black-white-1.jpg';
import robots3things from '../../assets/images/a-robot-does.png';
import fields from '../../assets/images/fields.png';
import applications from '../../assets/images/applications-of-robots.jpg';
import img1 from '../../assets/images/lesson2-1.jpg';

import logo from '../../assets/images/robot_logo.png';

const Lesson1 = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid" id="top-section">
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
                     <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '15px', marginBottom: '20px' }} >
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                            Welcome to Lesson 1 of our ROS Programming course. In this lesson, we embark on a journey into the fascinating realm of robotics. We will begin by
                            defining and gaining a broad understanding of what robots are. As we delve into the field of
                            robotics, we explore its scope, objectives, and diverse applications. The lesson will then unfold
                            recent milestones and innovations in robotics, highlighting the dynamic nature of this field.
                            Shifting gears, we demystify the connection between robots and programming, exploring how
                            these mechanical entities come to life through coding. The introduction of ROS (Robot
                            Operating System) becomes a pivotal point, elucidating its significance and impact. To round
                            off, we discuss recommended prerequisites and resources for those eager to explore robotics
                            further.
                        </p>

                        <h2 className="subtitle font-bold text-darkblue">What will you learn?</h2>
                        <ul>
                            <li>Definition of what is a robot and why they are important</li>
                            <li>An overview of robotics as a field and it's different sections</li>
                            <li>Understand what the goals of the robotics field are and how we achieve them</li>
                            <li>A basic definition of what ROS is and why we use it in robotics</li>
                            <li>Reccommended prerequisites for this course and associated sources</li>
                        </ul>
                        <p>
                            By the end of this section, you will have a good foundation for studying and understanding robotics concepts as well as a working definition of important robotics aspects. 
                            You will be able to identify different fields of robotics, the purpose of those different fields, and important tools used to achieve those goals.                             
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
                                    
                        <div className= "white-space-filler">...</div>
                        
                        <div style={{ padding: '15px', border: '0px solid #ddd', borderRadius: '10px', marginBottom: '15px', marginTop: '5px' }}>

                        <h3 className= "subtitle font-bold text-darkblue">Robotics</h3>

                        <p>
                        In the realm of robotics, a robot is an <strong id="autonomous">autonomous</strong> or <strong id="semi-autonomous">semi-autonomous</strong> machine designed to
                        carry out tasks or operations typically done by humans. These machines can be programmed to
                        perform specific functions, ranging from simple repetitive actions to complex decision-making
                        processes. Robots come in various shapes and sizes, each tailored to fulfill a specific purpose,
                        and they can operate in diverse environments, from factory floors to outer space.   
                        </p>
                

                        <h3 className= "subtitle font-bold text-darkblue">What is a robot?</h3>
                        <p>
                        Understanding the essence of a robot involves recognizing its multifaceted nature. Beyond mere
                        machines, robots are entities with the capacity to sense, process information, and act on the
                        physical world. They are equipped with sensors for perception, processors for decision-making,
                        and <strong id="effectors">effectors</strong> for physical actions, embodying a synergy of mechanics, electronics, and software.
                        </p>
                        <p>
                            A robot typically does three things (see below):
                        </p>
                        <img src={robots3things} alt="" className="img-thumbnail" width = "550"/>
                        <p>
                            Different robots can 'sense' certain information depending on how their built and in what ways they experience their environment. Visual stimulus, temperature change, auditory input, different movements are all examples of information that a robot can gather in this first stage.
                            The stage of computation can involve everything from small electronic curcuits to multicore processors or even a cluster of networked computers. 
                            In action, robots vary the most, as some robots can move things around, manipulate objects, perform specific tasks, while others can output information, formulate responses, or provide answers to questions. 
                            Robot anatomy is made up of many different parts: manipulators which is the mechanical part of the robot that performs the task, end effectors that are the tools or devices that are attached to the robots manipulator for specific tasks
                            and many others that we will take a deeper dive into as the lessons progress.
                        </p>
                        <Container style={{ marginLeft: 0}}>
                            <Row>
                                
                                <Col xs={6}>

                        <h3 className= "subtitle font-bold text-darkblue">An overview of the field of robotics</h3>

                        <p>
                        Robotics is an interdisciplinary field involving the development of systems combining electrical and mechanical components with computers. 
                        It encompasses core disciplines such as electrical and mechanical engineering, computer science, <strong id="artificial intelligence">artificial
                        intelligence</strong>, computer vision, applied mathematics, and even elements of biology. Robotics seeks to create intelligent machines
                        that can mimic or simulate human actions, automating processes and tasks across various industries.
                        It is a fascinating and rapidly evolving field that contains many different sections such as: 
                        design, construction, programming, human-robot-interaction, mechatronics, bio-inspired robots, and much more.   
                        </p>
                        <p>
                        Robotics aims to create machines that assist humans in tasks that are repetitive,
                        precise, or dangerous. It merges various domains, fostering advancements in technology and
                        automation. It is at the forefront of technological innovation and it's advancements contribute greatly to the quality of daily life. 
                        The applications of robotics have profound imapcts on society, ranging from healthcare and manufacturing to exploration and entertainment.   
                        </p>
                        
                        </Col>
                                <Col xs={6}>
                                <img src={fields} alt="" className="img-rounded" width = "650"/>
                                </Col>
                            </Row>
                        </Container>


                        <h3 className= "subtitle font-bold text-darkblue">Goals and Applications of Robotics</h3>
                                                    
                        <p>
                        Robotics is organized based on applications. Robots excel in tasks requiring
                        <strong id = "precision"> precision</strong>, repetitive work, and monotonous operations. Robots can be found in manufacturing industries for welding, material handling, painting, assembling, 
                        picking, packing, and palletizing, etc.  Similarly, robots can be found in agriculture for repetitive tasks like seeding, harvesting, weed control, optimal soil detection. 
                        Another common place to see robots in action is in healthcare, helping doctors with performing surgical procedures and providing therapy for patients.
                        On the other hand, robots have revolutionized exploration, as robots can explore places where humans cannot get to easily, like the depths of the ocean or outer space. 
                        Moreover, other sectors where robots are useful are entertainment, customer service, food preparation, security, etc.
                        </p>
                        <p>
                        The goals of robotics extend beyond automation; they include enhancing efficiency, safety, and
                        precision in various domains. Applications range from manufacturing and healthcare to
                        exploration and entertainment, showcasing the diverse ways robots impact our lives.
                        </p>
                        <p>
                        <img src={applications} alt="" className="img-circle" width = "550"/>
                        </p>
                        <h3 className= "subtitle font-bold text-darkblue">Recent Milestones and Innovations</h3>

                        <p>
                        The dynamic nature of robotics is evident in recent milestones and innovations. These
                        achievements include advancements in artificial intelligence, soft robotics, swarm robotics, and
                        human-robot interaction, shaping the future of this evolving field. 
                        </p>
                        <p>
                        Soft Robotics is a subfield of robotics that deals with constructing robots from materials with properties similar to living organisms.
                        Swarm Robotics describes the coordination and cooperation of multiple robots to accomplish complex tasks.  
                        </p>
                        <p>
                            Other trends that will likely be relevant as robotics continues to florish and grow are autonomous mobile robots. The idea behind these robots is to 
                            limit the amount that workers are exposed to hazardous conditions such as toxic chemicals, tight spaces, heavy machinery, or dangerous situations. 
                            AMRs are a combination of sensors, computer vision, and artificial intelligence to be able to identify their surroundings and navigate independently. These are a great example of the idea 
                            of an autonomous robot as they are capable of making decisions and accomplishing tasks with no instruction or interference by the engineers. 
                            These robots can be used in factories to transport parts over long distances and cleaning shop floors, in hospitals they are able to automate disinfection which reduces the risk to workers. 
                            
                        </p>
                        <p>
                            Other trends to be on the lookout for in the robotics industry includes drones, robotics cybersecurity, humanoid robots, automated guided vehicles, assistive robots, and much more to come!
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">A brief introduction to ROS and programming</h3>
                        <p>
                        Programming forms the backbone of a robot's functionality. From low-level programming languages like C/C++ for precise control to high-level languages like Python for intuitive
                        development, coding provides the instructions that enable robots to perceive, decide, and act.
                     
                        </p>
                        <p>
                        Low-Level Programming: Directly controlling the robot's hardware and specifying individual motor movements or sensor interactions.
                        High-Level Programming: Abstracting complexities of robot hardware, providing a more intuitive and human-readable way to program robots.
                        </p>
                        <p>
                        ROS, or Robot Operating System, is not an actual operating system but a <strong id ="framework">framework</strong> providing tools and libraries for robot software development. 
                        Its importance lies in fostering collaboration and <strong id="standardization">standardization</strong>, enabling seamless integration of hardware and software components, and facilitating the sharing of code and solutions across the robotics community. 
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">Conclusion</h3>
                        <p>
                        In conclusion, this introductory lesson has laid the groundwork for understanding the vast and
                        intricate world of robotics. From defining what robots are to exploring the goals, recent
                        innovations, and the critical role of programming, we&#39;ve scratched the surface of a field that
                        continues to shape our technological landscape. The mention of ROS and recommended
                        prerequisites sets the stage for deeper exploration in the lessons to come. As we journey forward,
                        the complexities and wonders of robotics will unfold, offering both challenges and boundless
                        opportunities. 
                        </p>

                        <h3 className= "subtitle font-bold text-darkblue">Prerequisites, Websites, and Resources:</h3>

                        <p>
                        To embark on a journey in robotics, certain prerequisites are beneficial. 
                        A foundation in mathematics, particularly in areas like algebra and geometry, as well as basic programming skills, sets the stage. 
                        Resources such as online courses, books, and hands-on projects provide avenues for both learning and practical application.
                        </p>
                        <ul>
                            <li>ROS Wiki for in-depth information on ROS architecture: https://wiki.ros.org/Documentation</li>
                            <li>ROS tutorials for practical exercises: https://wiki.ros.org/ROS/Tutorials</li>
                            <li>Tutorials for learning Python programming: https://www.python.org/about/gettingstarted/ </li>
                        </ul>

                        </div>
                        <div> 
                        
                        </div>
                    

                        <div className="static-slider-1">
                            <Row className="justify-content-between">
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/HomePage#top-section">
                                        <Button color="darkblue" className = "border-button">Previous</Button>
                                    </Link>
                                </Col>
                                <Col md="6" className="align-self-center text-center">
                                    <h1 className="title"></h1>
                                    <h6 className="subtitle op-8"></h6>
                                </Col>
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/Lesson2#top-section">
                                        <Button color="darkblue" className = "border-button">Next</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>

                        <p>
                        .
                        </p>
                        
                        
                        <Container style={{ marginLeft: 0}}>
                            <Row>
                                
                                <Col xs={6}>
                                <p>
                                <h3 className= "subtitle font-bold text-darkblue">Knowledge Check: See if you can answer these questions!</h3>
                                <ol>

						    <li>What is the primary characteristic of a robot?</li>
                            <li>What are the key components that make a robot capable of interacting with the physical world?</li>
                            <li>What does the field of robotics aim to achieve?</li>
                            <li>What is one of the overarching goals of robotics in various domains?</li>
                            <li>Name one recent milestone or innovation in the field of robotics.</li>
                            <li>What role does programming play in a robot&#39;s functionality?</li>
                            <li>What does ROS stand for, and why is it important in robotics?</li>
                            <li>What are some recommended prerequisites for delving into robotics?</li> 
                                    
                                </ol>
                                
                                </p>
                                </Col>
                                <Col xs={6}>
                                <img src={img1} alt="" className="lesson-image" width = "300"/> 
                                </Col>
                            </Row>
                        </Container>
                        
        
                    
                    
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