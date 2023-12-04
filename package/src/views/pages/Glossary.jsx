import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
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
                                        <h6 className="subtitle"><span className="label label-danger">Lesson 1</span><span className="label label-info">Lesson 2</span><span className="label label-warning">Lesson 3</span></h6>
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
                                                    
                                                    <td>ROS Master</td>
                                                    <td><img src={ROS_Master} alt="ROS Master:https://www.oreilly.com/library/view/ros-programming-building/9781788627436/402a97fc-b154-485b-ad70-0830aef107dc.xhtml " className="img-thumbnail" width = "800"/>The ROS master provides naming and registration services to the rest of the nodes in the ROS system. It tracks publishers and subscribers to topics as well as services. The role of the master is to enable individual ROS nodes to locate one another. Once these nodes have located each other, they communicate with each other in a peer-to-peer fashion. You can see in a graphic example the steps performed in ROS to advertise a topic, subscribe to a topic, and publish a message, in the following diagram:</td>
                                                    <td>The central hub managing the ROS system. It tracks all active nodes, services, and topics.</td>
                                                    <td><span className="label label-danger">L.1</span> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Node</td>
                                                    <td></td>
                                                    <td>An individual process that performs specific computations. Nodes communicate through topics.</td>
                                                    <td><span className="label label-info">L.2</span><span className="label label-danger">L.1</span> </td>
                                                </tr>
                                                <tr>
                                                  
                                                    <td>Topic</td>
                                                    <td></td>
                                                    <td>A communication channel used by nodes to exchange messages. Topics enable the flow of information between nodes.</td>
                                                    <td><span className="label label-warning">L.3</span> </td>
                                                </tr>
                                                <tr>
                                                 
                                                    <td>Message</td>
                                                    <td></td>
                                                    <td>A data structure defining the information sent between nodes through topics. It can be as simple as an integer or as complex as a sensor reading.</td>
                                                    <td><span className="label label-warning">L.3</span> </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Service</td>
                                                    <td></td>
                                                    <td>A function call that nodes can make to request work from another node. It allows nodes to perform specific tasks on demand</td>
                                                    <td><span className="label label-info">L.2</span><span className="label label-warning">L.3</span>  </td>
                                                </tr>
                                                <tr>
                                                    
                                                    <td>Parameter</td>
                                                    <td></td>
                                                    <td>A variable that nodes can use to store and retrieve data. Parameters provide a convenient way to configure node behavior</td>
                                                    <td><span className="label label-info">L.2</span><span className="label label-warning">L.3</span>  </td>
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
        