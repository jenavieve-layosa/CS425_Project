import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";


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
                                                    <td>Example</td>
                                                    <td>Capable of operating independently</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                    
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Semi-autonomous</td>
                                                    <td>Example</td>
                                                    <td>Partially capable of independent operation</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Effectors</td>
                                                    <td>Example</td>
                                                    <td>Components responsible for performing actions or tasks</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Artificial Intelligence (AI)</td>
                                                    <td>Example</td>
                                                    <td>The simulation of human intelligence in machines using computer systems.</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Precision</td>
                                                    <td>Example</td>
                                                    <td>The quality, condition, or fact of being exact and accurate.</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Standardization</td>
                                                    <td>Example</td>
                                                    <td>Establishing a standard or common set of practices, in programming this is done to ensure commonality between different programs so that using multiple platforms can be easily integrated together</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Framework</td>
                                                    <td>Example</td>
                                                    <td>A platform providing reusable software components</td>
                                                    <td><Link to="/Lesson1" className="label label-lesson1">L.1</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Middleware</td>
                                                    <td>Example</td>
                                                    <td>Software that acts as an intermediary allowing communication between different applications.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Modularity</td>
                                                    <td>Example</td>
                                                    <td>Design principle emphasizing the organization of a system into independent, interchangeable components.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>  
                                                <tr>
                                                    
                                                    <td></td>
                                                    <td>Example</td>
                                                    <td></td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>                                                
                                                <tr>
                                                    
                                                    <td>ROS Master</td>
                                                    <td><img src={ROS_Master} alt="ROS Master:https://www.oreilly.com/library/view/ros-programming-building/9781788627436/402a97fc-b154-485b-ad70-0830aef107dc.xhtml " className="img-thumbnail" width = "800"/>The ROS master provides naming and registration services to the rest of the nodes in the ROS system. It tracks publishers and subscribers to topics as well as services. The role of the master is to enable individual ROS nodes to locate one another. Once these nodes have located each other, they communicate with each other in a peer-to-peer fashion. You can see in a graphic example the steps performed in ROS to advertise a topic, subscribe to a topic, and publish a message, in the following diagram:</td>
                                                    <td>The central hub managing the ROS system. It tracks all active nodes, services, and topics.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Node</td>
                                                    <td></td>
                                                    <td>An individual process that performs specific computations. Nodes communicate through topics.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                  
                                                    <td>Topic</td>
                                                    <td></td>
                                                    <td>A communication channel used by nodes to exchange messages. Topics enable the flow of information between nodes.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                 
                                                    <td>Message</td>
                                                    <td></td>
                                                    <td>A data structure defining the information sent between nodes through topics. It can be as simple as an integer or as complex as a sensor reading.</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Service</td>
                                                    <td></td>
                                                    <td>A function call that nodes can make to request work from another node. It allows nodes to perform specific tasks on demand</td>
                                                    <td><Link to="/Lesson2" className="label label-lesson2">L.2</Link></td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Parameter</td>
                                                    <td></td>
                                                    <td>A variable that nodes can use to store and retrieve data. Parameters provide a convenient way to configure node behavior</td>
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
        