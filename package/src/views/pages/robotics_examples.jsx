import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';

import img7 from '../../assets/images/cars1.jpg';
import img8 from '../../assets/images/AI2.jpg';
import img9 from '../../assets/images/medical robots.jpg';


const items = [
    {
        src: img7,
        altText: '',
        caption: ''
    },
    {
        src: img8,
        altText: '',
        caption: ''
    },
    {
        src: img9,
        altText: '',
        caption: ''
    }
];

const JsComponents = (props) => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const toggle1 = () => {
        setModal1(!modal1);
    }

    const toggle2 = () => {
        setModal2(!modal2);
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map(item => (
        <CarouselItem
            className="custom-tag"
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
            <img className="w-100" src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    ));

    return (
        <div>
            <div className="spacer" id="js-component">
                <Container>
                <div style={{ padding: '20px', border: '1px solid', borderColor: "darkblue", borderRadius: '15px', marginBottom: '20px' }}>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Exciting news in the Robotics World!</h1>
                            <h5 className="subtitle"><p>As students start their journey into the world of robotics, it is important that they understand the significance of what they are learning about. Robotics is not merely a theorhetical field of study but an essential force that is shaping our society.</p>
                                <p>Below are some exciting new developments in the robotics world today!</p></h5>
                        </Col>
                    </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <Row className="m-b-30">
                    <Col md="6" className='p-b-40 d-flex flex-column'>
                        <Button type="button" onClick={toggle.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Medical Robots</Button>
                        <Modal size="md" isOpen={modal} toggle={toggle.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle.bind(null)}>Why is is cool?</ModalHeader>
                            <ModalBody>
                            In the medical field, robots are making surgeries less invasive and more precise. An example of this is the da Vinci Surgical Robot, a multi-armed wonderbot is currently being used to reduce surgical errors and save lives. 
                            This system gives surgeons more precise control for a range of procedures. It uses magnified 3D high-definition vision and controls that strap to the surgeons wrists and hands and allows them to make small incisions that human hands would not be able to accomplish.
                             This offers less risk in surgery and a faster recover time for patients. 

                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle.bind(null)}>Continue</Button>{' '}
                                
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle1.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Robotics Assistants</Button>
                        <Modal size="md" isOpen={modal1} toggle={toggle1.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle1.bind(null)}>Why is it cool?</ModalHeader>
                            <ModalBody>
                                Robotic assistants have often been present in futuristic settings but they are closer to being a reality than you'd think. Imagine having an assistant that can handle mundane daily tasks such as cleaning your room, answering an email, or bringing you a snack. 
                                Companies like Boston Dynamics are working dynamic and humanoid robots such as Atlas. Atlas is a research platform that is allowing them to push the limits of whole-body mobility and bimanual manipulation. It has an advanced control syste, and state-of-the-art hardware and is an example of the efforts to create mobile, perceptive, and intelligent robots that may eventually become commonplace in our lives.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle1.bind(null)}>Continue</Button>{' '}
                                
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle2.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Autonomous Vehicles</Button>
                        <Modal size="md" isOpen={modal2} toggle={toggle2.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle2.bind(null)}>Why is it cool?</ModalHeader>
                            <ModalBody>
                            There are many advancements being made in the world of self driving cars and it is bringing the dream of effortless transportation closer and closer to a reality. Companies such as Hyundai with the car Mobis have made advancements such as the 'e-Corner System' which allows a vehicle to move laterally and diagonally, as well as perform stationary 360-degree pivot turns. 
                            Mercedes-Benz is set to test Level 3 autonomous driving on roads in China which could pave the way for the carmaker to offer its Drive Pilot feature to the market.    
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Button color="primary" onClick={toggle2.bind(null)}>Continue</Button>
                            </ModalFooter>
                        </Modal>
                        
                    </Col>
                    <Col md="6">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next.bind(null)}
                            previous={previous.bind(null)}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex.bind(null)} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous.bind(null)} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next.bind(null)} />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default JsComponents;
