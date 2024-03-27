import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img5 from '../../assets/images/img5.jpg';
import img1 from '../../assets/images/lesson2-1.jpg';
import img2 from '../../assets/images/lesson2-2.jpg';
import img3 from '../../assets/images/lesson2-3.png';
import img4 from '../../assets/images/lesson2-4.png';


const Lesson2 = () => {
    return (

        <div id="main-wrapper">
             <Header />
            <div className="page-wrapper">
                <div className="container-fluid"id="top-section">
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
                            By the end of this section, you will master the core elements of ROS architecture, including the roles of the <strong id="ROSmaster">ROS master</strong>,
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
                        <div style={{ padding: '20px', border: '0px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                        <p>
                            .
                        </p> 
                        
                        <h3 className= "subtitle font-bold text-darkblue">Fundamentals and history of ROS</h3>

                        <p>
                        ROS, born in the early 2000s at Stanford University, started as an open-source <strong id="middleware">middleware </strong>
                         framework for robotics. Its fundamental design principles revolve around <strong id="modularity">modularity</strong>, reusability,
                        and collaborative development. ROS provides a structured communication layer, a robust set of
                        tools, and a flexible framework for creating intricate robot behaviors. Over the years, ROS has
                        evolved through various versions, each introducing enhancements and expanded capabilities,
                        becoming a pivotal force in the robotics community.
                        </p>

                                
                                <h3 className= "subtitle font-bold text-darkblue">History of ROS: How did it get so popular?</h3> 
                                <p>

                                ROS gained popularity due to its open-source nature, fostering collaboration and knowledge-
                                sharing within the robotics community. As it evolved, ROS became a standard in research and
                                industry, with widespread adoption in academia and various sectors. Its modular and extensible
                                architecture contributed to its success, making it a go-to framework for robot software
                                development.
                                    
                                </p> 

                                <p>

                                Real industries leverage robots equipped with ROS for various applications. From
                                manufacturing, where robots handle precision tasks, to healthcare, using robots for surgeries and
                                patient care, ROS is integral in creating adaptable and intelligent robotic systems.

                                <Col lg="7" md="8" className="align-text-center m-0">
                                    <img src={img4} alt="timeline" className="img-rounded-center" width = "550" />
                                </Col> 

                                </p>   
                                            
                        


                        <h3 className= "subtitle font-bold text-darkblue">Using Python to move your robot</h3>

                        <p>
                        Programming a robot to move forward using Python and ROS involves understanding ROS
                        nodes, topics, and Python scripts. By creating a simple script, we can command the robot to
                        move forward. This hands-on experience provides a practical understanding of the integration
                        between Python and ROS for basic robot control.
                        </p> 
                        <img src={img3} alt="" className="img-thumbnail" width = "550"/> 
 

                        <h3 className= "subtitle font-bold text-darkblue">What is a Simulation?</h3>       

                        <p>
                        Simulation is a pivotal concept in robotics development. It involves creating a virtual
                        environment to test and validate robot behaviors before deploying them in the physical world.
                        ROS provides simulation tools, allowing developers to mimic real-world scenarios and refine
                        their algorithms in a controlled, risk-free environment. One of the barriers that exists in robotics is access to hardware which can be expensive and confusing, so using simulations 
                        enables us to extend the outreach of robotics education. It is a pivotal aspect of FORE and many other robotics centered projects and companies. 

                        </p>
                        
                        <h3 className= "subtitle font-bold text-darkblue">Becoming a ROS expert!</h3>       
                        <p>
                            We are going to start diving deeper into the specifics of how ROS works and how you can use it to your advantage!
                            ROS, being a versatile framework, offers a range of functions that are essential for developing
                            robotic systems. Understanding these functions is crucial for effective robot programming and
                            development.
                            
                        </p>
                        <img src={img2} alt="" className="img-thumbnail" width = "400"/> 
 
                        <p>
                        Understanding and utilizing these common ROS functions provide a solid foundation for
                        building complex robotic systems. As we navigate through our exploration of ROS, these
                        functions become invaluable tools for crafting sophisticated and efficient robots.
                        </p>

                        <h5 className= "subtitle font-bold text-darkblue" id="node">Nodes and Topics</h5>       
                        <p>
                        Nodes: In ROS, a node is an independent process that performs a specific task. Nodes
                        communicate with each other through a publish-subscribe mechanism using topics. A
                        node can publish data to a topic, and any node interested in that information can
                        subscribe to that topic.
                        <p>
                        Example:
                        ● Node 1 (Publisher): Publishes information about the robot&#39;s position on the
                        &quot;robot_position&quot; topic.
                        ● Node 2 (Subscriber): Subscribes to the &quot;robot_position&quot; topic to receive and
                        process the position information.
                        </p> 
                        </p>

                        <h5 className= "subtitle font-bold text-darkblue">Packages</h5> 
                        <p>
                        A ROS package is a directory that contains everything necessary for a specific
                        functionality. It includes code, configuration files, datasets, and documentation. Packages
                        promote modularity and organization in ROS development. 
                        <p>

                        Example:
                        ● Navigation Package: Contains code for robot navigation, configuration files for
                        sensors, and datasets for mapping.           
                        </p>
                        </p>

                        <h5 className= "subtitle font-bold text-darkblue" id="service">Services and Actions</h5>
                        <p>
                        Services: ROS services allow communication between nodes through a request-response
                        mechanism. A node can offer a service, and other nodes can request and receive the
                        service.

                        <p>
                        Example:
                        ● Node 1 (Service Provider): Offers a service to calculate the distance traveled by
                        the robot.
                        ● Node 2 (Service Client): Requests the service to calculate the distance.
                        Actions: Similar to services, actions enable asynchronous, long-running tasks. Unlike
                        services, actions allow feedback during the execution of the task.
                        
                        <p>
                        Example:
                        ● Node 1 (Action Server): Executes a task to explore an environment, providing
                        feedback on the progress.
                        ● Node 2 (Action Client): Sends a goal to explore the environment and receives
                        feedback on the progress.
                        </p>
                        </p>
                        </p>

                        <h5 className= "subtitle font-bold text-darkblue">Launch Files</h5>

                        <p>
                        ROS launch files simplify the process of starting multiple nodes and
                        configuring <strong id="parameters">parameters</strong>. Launch files are XML files that define how nodes should be
                        launched and can include parameters and arguments.
                        <p>
                        Example:
                        ● Navigation Launch File: Starts nodes for mapping, localization, and path planning
                        with predefined parameters.  
                        </p>
                        </p>

                        <h5 className= "subtitle font-bold text-darkblue">Transform Library</h5>

                        <p>
                        The TF library in ROS manages coordinate frame transformations. It allows
                        nodes to track the position and orientation of different components in a robot system. 
                        <p>
                        Example:
                        ● Robot Arm Node: Publishes the transformation between the base of the robot and
                        the end-effector.  
                        </p>
                        </p>
                        <h5 className= "subtitle font-bold text-darkblue">Bag Files</h5>
                        <p>
                        Files: ROS bag files are a format for saving and playing back ROS <strong id="message">message</strong> data.
                        They record topics and messages during a specific duration, allowing developers to
                        replay and analyze data.
                        <p>
                        Example:
                        ● Data Recording: A bag file records sensor data during a robot&#39;s exploration,
                        which can be replayed for analysis.  
                        </p>
                        </p>

                
                        <h3 className= "subtitle font-bold text-darkblue">Conclusion</h3>
                        <p>
                        As we conclude this lesson, we&#39;ve taken a deeper dive into ROS, understanding its fundamentals,
                        history, and practical applications. The hands-on experience of making a robot move forward
                        with Python and ROS, coupled with insights into simulation and real-world industry use,
                        enriches our understanding. Armed with knowledge about common ROS functions, we are well-
                        prepared for the intricacies that lie ahead in the exploration of robotics and ROS. The journey
                        continues as we uncover more layers of this dynamic and transformative field.
                        </p>
                        </div>      
                        <div className="static-slider-1">
                            <Row className="justify-content-between">
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/Lesson1#top-section">
                                        <Button color="darkblue" className = "border-button">Previous</Button>
                                    </Link>
                                </Col>
                                <Col md="6" className="align-self-center text-center">
                                    <h1 className="title"></h1>
                                    <h6 className="subtitle op-8"></h6>
                                </Col>
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/Lesson3#top-section">
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
                                    <li>What are the fundamental design principles of ROS?</li>
                                    <li>What are ROS nodes and how do they communicate?</li>
                                    <li>Why is simulation important in robotics development?</li>
                                    <li>What factors contributed to the popularity of ROS?</li>
                                    <li>Provide an example of how real industries use robots equipped with ROS.</li>
                                    <li>What is a package in ROS, and why is it important?</li>
                                    
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

Lesson2.propTypes = {
    classes: PropTypes.object
};

export default Lesson2;
