import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import autonomous from '../../assets/images/Glossary/autonomous_example.jpg';
import semiauto from '../../assets/images/Glossary/semi-autonomous-example.avif'
import effectors from '../../assets/images/Glossary/effectors.jpg'
import ai from '../../assets/images/Glossary/ai.webp'
import precision from '../../assets/images/Glossary/precision.jpg'
import standard from '../../assets/images/Glossary/standard.png'
import framework from '../../assets/images/Glossary/framework.jpg'
import middleware from '../../assets/images/Glossary/middleware.jpg'
import modularity from '../../assets/images/Glossary/modularity.jpg'
import node from '../../assets/images/Glossary/node.png'
import topic from '../../assets/images/Glossary/topic.jpg'
import message from '../../assets/images/Glossary/message.png'
import service from '../../assets/images/Glossary/service.jpg'
import parameter from '../../assets/images/Glossary/parameter.jpg'






import ROS_Master from '../../assets/images/Glossary/ROS Master.png';
const Glossary = () => {
    
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    
                    <div>
                        <div className="spacer" id="table-component">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md="7" className="text-center">
                                        <h1 className="title font-bold font-70">Glossary</h1>
                                        <h6 className="subtitle">This is our hub of knowledge when it comes to robotics terms and lingo.</h6>
                                        <h6 className="subtitle"><span className="label label-lesson1">Lesson 1</span><span className="label label-lesson2">Lesson 2</span><span className="label label-lesson3">Lesson 3</span><span className="label label-lesson4">Lesson 4</span><span className="label label-lesson5">Lesson 5</span></h6>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <Container>
                            <Row>
                                <Col md="12">
                                    <div className="table-responsive">
                                        <Table>
                                            <thead>
                                                <tr>
                                                    
                                                    <th>Term</th>
                                                    <th>Example</th>
                                                    <th>Definition</th>
                                                    <th>Lesson(s)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    
                                                    <td>Autonomous</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={autonomous} alt="https://www.researchgate.net/figure/The-example-of-autonomous-mobile-robot_fig1_228711493" className="img-thumbnail" width = "200"/>
                                                        <p style={{ marginLeft: '10px' }}>True autonomous robots are intelligent machines that can perform tasks and operate in an environment independently, without human control or intervention. Such as a robot capable of naviagting a maze without any instruction or manual control for the engineer.</p>
                                                    </div>   
                                                    </td>
                                                    <td>Capable of operating independently</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Semi-autonomous</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={semiauto} alt="https://newatlas.com/lancaster-university-semi-autonomous-robot-reactors/60123/" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>Semi-autonomous robots, on the other hand, are robots that require some level of human input or control. These robots are designed to operate under the guidance of a human operator, who can monitor their actions and intervene if necessary</p>
                                                    </div>
                                                    </td>
                                                    <td>Partially capable of independent operation</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Effectors</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={effectors} alt="https://www.tthk.ee/inlearcs/4-end-of-effector-selection-procedure/" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>In robotics, an end effector is the device at the end of a robotic arm, designed to interact with the environment. The exact nature of this device depends on the application of the robot. In the strict definition, which originates from serial robotic manipulators, the end effector means the last link of the robot.</p>
                                                    </div>
                                                    </td>
                                                    <td>Components responsible for performing actions or tasks</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Artificial Intelligence (AI)</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={ai} alt="" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>Contemporary AI-driven robots possess the ability to tackle problems and exhibit a form of "thought" within certain boundaries. Consequently, artificial intelligence is relied upon to handle progressively intricate duties. Whether it's aiding in Tesla's assembly lines or instructing Japanese learners in English, instances of AI integration in robotics abound.</p>
                                                    </div>
                                                    </td>
                                                    <td>The simulation of human intelligence in machines using computer systems.</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Precision</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={precision} alt="https://www.dentonvacuum.com/a-look-ahead-at-the-semiconductor-industry/" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>An example is the use of robotic arms in semiconductor manufacturing, where precision is paramount for tasks like placing microchips onto circuit boards with nanometer-level accuracy. </p>
                                                    </div>
                                                    </td>
                                                    <td>The quality, condition, or fact of being exact and accurate.</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Standardization</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={standard} alt="https://www.semanticscholar.org/paper/ROS-and-Unity-Based-Framework-for-Intelligent-and-Hussein-Garc%C3%ADa/ce3f3a09712f261808ab90921a4e8683ca76a841/figure/0" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}> One example is ROS (Robot Operating System), an open-source framework that provides standardized tools and libraries for developing robotic applications, fostering collaboration and accelerating innovation in the robotics community. </p>
                                                    </div>
                                                    </td>
                                                    <td>Establishing a standard or common set of practices, in programming this is done to ensure commonality between different programs so that using multiple platforms can be easily integrated together</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Framework</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={framework} alt="https://www.frontiersin.org/articles/10.3389/frobt.2021.713083/full" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>One example of a framework providing reusable software components in robotics is Gazebo, a simulation environment that offers a standardized platform for testing and developing robotic algorithms and behaviors. Robotics developers can utilize pre-built models and plugins within Gazebo to quickly prototype and validate their ideas across different robot platforms.</p>
                                                    </div>
                                                    </td>
                                                    <td>A platform providing reusable software components</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Middleware</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={middleware} alt="https://www.openrtm.org/openrtm/en/doc/aboutopenrtm/rtmiddleware" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}>An example is the Robot Middleware (RTM) developed by the Robot Technology Research Association, which offers standardized interfaces and communication protocols for connecting components in distributed robotic systems. </p>
                                                    </div>
                                                    </td>
                                                    <td>Software that acts as an intermediary allowing communication between different applications.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Modularity</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={modularity} alt="https://emanual.robotis.com/docs/en/platform/turtlebot3/overview/" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}> In robotics, modularity is exemplified by modular robotic platforms like the TurtleBot, which consists of interchangeable hardware components such as sensors, actuators, and computing units. This modularity allows users to customize the robot for different tasks and easily upgrade or replace individual components as needed.</p>
                                                    </div>
                                                    </td>
                                                    <td>Design principle emphasizing the organization of a system into independent, interchangeable components.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>                                                  
                                                <tr>
                                                    
                                                    <td>ROS Master</td>
                                                    <td>
                                                        <img src={ROS_Master} alt="ROS Master:https://www.oreilly.com/library/view/ros-programming-building/9781788627436/402a97fc-b154-485b-ad70-0830aef107dc.xhtml " className="img-thumbnail" width = "450"/>
                                                        <p>The ROS master provides naming and registration services to the rest of the nodes in the ROS system. It tracks publishers and subscribers to topics as well as services. The role of the master is to enable individual ROS nodes to locate one another. Once these nodes have located each other, they communicate with each other in a peer-to-peer fashion. You can see in a graphic example the steps performed in ROS to advertise a topic, subscribe to a topic, and publish a message, in the following diagram:</p>
                                                    
                                                    </td>
                                                    <td>The central hub managing the ROS system. It tracks all active nodes, services, and topics.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Node</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={node} alt="https://docs.ros.org/en/foxy/Tutorials/Beginner-CLI-Tools/Understanding-ROS2-Nodes/Understanding-ROS2-Nodes.html" className="img-thumbnail" width="300" />
                                                        <p style={{ marginLeft: '10px' }}>An example would be a node could be responsible for receiving laser scan data from a LiDAR sensor and publishing it to other nodes for mapping or navigation.</p>
                                                    </div>
                                                    </td>
                                                    <td>An individual process that performs specific computations. Nodes communicate through topics.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                  
                                                    <td>Topic</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={topic} alt="https://roboticsbackend.com/what-is-a-ros-topic/" className="img-thumbnail" width="350" />
                                                        <p style={{ marginLeft: '10px' }}> For instance, a topic could be used to transmit odometry information from a robot's motion controller node to a localization node, allowing the robot to estimate its position in a global coordinate frame.</p>
                                                    </div>
                                                    </td>
                                                    <td>A communication channel used by nodes to exchange messages. Topics enable the flow of information between nodes.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                 
                                                    <td>Message</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={message} alt="https://www.mathworks.com/help/ros/ug/work-with-basic-ros-messages.html" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}> For instance, a message could define the structure of sensor data, such as the timestamp, position, and intensity values of laser scans, facilitating interoperability and data exchange between different ROS nodes.</p>
                                                    </div>
                                                    </td>
                                                    <td>A data structure defining the information sent between nodes through topics. It can be as simple as an integer or as complex as a sensor reading.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Service</td>
                                                    <td>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={service} alt="https://roboticsbackend.com/what-is-a-ros-service/" className="img-thumbnail" width="200" />
                                                        <p style={{ marginLeft: '10px' }}> For example, a robot's location service might requst an update in order to determine the current weather in the area that the robot is located in.</p>
                                                    </div>
                                                    </td>
                                                    <td>A function call that nodes can make to request work from another node. It allows nodes to perform specific tasks on demand. A service is a synchronous communication mechanism that allows nodes to request and receive specific tasks or information from one another</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Parameter</td>
                                                    <td>
                                                        <img src={parameter} alt="https://roboticsbackend.com/what-is-a-ros-parameter/" className="img-thumbnail" width="450" />
                                                        <p style={{ marginLeft: '10px' }}> For instance, a parameter could define a robots name or a simulation mode. It could also be the maximum speed limit for a robot's motion controller node, allowing for easy adjustments without modifying the source code.</p>
                                                    </td>
                                                    <td>In ROS, parameters are configurable values that can be set and accessed by nodes at runtime. These values can control various aspects of a robotic system, such as sensor settings or algorithm parameters.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Glossary;
        