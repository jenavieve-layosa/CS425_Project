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
import img10 from '../../assets/images/drone-example.png';
import shakey from '../../assets/images/Shakey.png';
import atlas from '../../assets/images/types-of-robots/atlas.png';
import icub from '../../assets/images/types-of-robots/icub.png';

const items = [
    {
        src: img9,
        altText: '',
        caption: ''
    },
    {
        src: img8,
        altText: '',
        caption: ''
    },
    {
        src: img7,
        altText: '',
        caption: ''
    },
    {
        src: img10,
        altText: '',
        caption: ''
    }
];

const JsComponents = (props) => {

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
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

    const toggle3 = () => {
        setModal3(!modal3);
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
            </div>
            <Container>
                <Row>
                    <Col md="9" className='p-b-60 d-flex flex-column'>
                        <Button type="button" onClick={toggle.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Service Robots</Button>
                        <Modal size="lg" isOpen={modal} toggle={toggle.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle.bind(null)}>Why is is cool?</ModalHeader>
                            <ModalBody>
                            <p>

                                Service robots are designed to assist humans in service-oriented tasks and can be classified into
                                two categories: professional use and personal use. Professional use robots can complete tasks like
                                rescue and security, defense, inspection, maintenance, construction, customer service, medical
                                procedures, etc. On the other hand, personal robotic systems can perform domestic tasks, provide
                                transportation, assistance, security and entertainment. These robots can completely replace a
                                human worker in an environment, operate closely to humans in order to increase productivity or
                                operate on the human body. Moreover, it can be used on many operation areas like education,
                                healthcare, recreation and smart cities. For example, in healthcare, these robots can handle routine
                                logistical tasks like disinfecting rooms, helping transport patients or medical equipment. In
                                education, they can be used to teach difficult subjects through interaction or serve as a tutor or peer
                                in a monitored environment. In leisure and recreation operation areas they can be used for
                                customer focused experiences, tour guides, shopping assistants and at exhibitions and events.
                                
                                <p>Service robots can be equipped with different levels of intelligence:

                                <p>● Mechanical - related to standardized and transactional tasks, like a room service robot that
                                brings towels to a room.
                                <p>● Analytical - based on systematic and rule-based learning from big data. For example,
                                chatbots can find an appropriate answer to a question retrieved from past data.
                                <p>● Intuitive - provides personalized services by processing holistic and contextual thinking,
                                examples are autonomous robots.
                                <p>● Empathetic - considered the highest level of intelligence, enables service robots to deliver
                                socially and emotionally interactive services.
                                <p>Nonetheless, there is a caveat for service robots, especially those that resemble humans or have
                                characteristics similar to those of living creatures and is that they fall under the notion of
                                uncanny valley. Occasionally, robots with these characteristics tend to give consumers feelings
                                of discomfort. This can be caused by the robot's physical appearance, lack of interpersonal
                                skills or even if the robot's interaction resembles too much of that of a human.


                                </p></p></p></p></p></p></p>

                                <h5 className ="font-bold subtitle"> Applications of Service Robots</h5>

                                <p className = "font-bold">Healthcare Robots</p>
                                <p>
                                Robots in healthcare are built to assist healthcare professionals in their daily tasks, as well as
                                help patients both physically and mentally. These robots can be found in homes, senior centers,
                                hospitals, schools, and many other places. These types of robots are also known as ‘Care
                                Robots’; Pepper and Nao from Softbank Robotics are social robots with potential applications
                                in healthcare. Both Pepper and Nao are humanoid robots with two RGB cameras, sensors, a
                                microphone and various degrees of freedom. Pepper has been deployed successfully as a
                                teaching assistant for children, as a companion for elderly people, and as a coach to guide
                                elderly people with psychiatric disorders through rehabilitation and recreational activities.
                                While Nao was used in a short study as a
                                teaching assistant for children with autism. The robot was programmed for a number of
                                teaching and therapeutic behaviors, such as singing, exercise, explaining, and playing with
                                children.

                                <p>Image from ResearchGate - Left - Pepper, Right - Nao

                                <p>In addition to Pepper and Nao, there are several other examples of healthcare service robots
                                that are revolutionizing the healthcare industry like PARO Therapeutic Robot. PARO is a
                                therapeutic robot designed to provide companionship and emotional support to patients,
                                particularly those suffering from dementia or other cognitive disorders. Resembling a baby
                                harp seal, PARO responds to touch and sound, mimics realistic movements, and has sensors to
                                recognize and respond to human interaction. It can provide comfort, reduce stress, and improve
                                the overall well-being of patients. PARO has been successfully used in nursing homes,
                                hospitals, and therapy sessions.

                                <p>Image from HiveLife - Paro the therapeutic robot

                                <p>Another example is Robotic Surgical Systems. These surgical systems are advanced
                                robotic platforms used by surgeons to perform minimally invasive surgeries with enhanced
                                precision, flexibility, and control. The da Vinci Surgical System is a well-known example
                                of such a system. It consists of robotic arms with surgical instruments and a high-definition
                                3D camera. This will be touched on in detail later on.  
                                </p></p></p></p></p>

                                <p className = "font-bold">Hospitality Robots</p>

                                <p>Hospitality robots are designed to assist and interact with guests in hospitality settings.
                                They aim to provide efficient and personalized services, improving customer satisfaction
                                and operational efficiency. These robots can navigate through indoor environments
                                autonomously, interact with guests through voice recognition or touchscreens, and carry
                                out specific tasks assigned to them, unlike service kiosks and preprogrammed tablets.
                                These machines can be found in hotels, restaurants, and other hospitality establishments.
                                They can perform tasks such as greeting guests, providing information, delivering items,
                                and even assisting with room service. One example of a hospitality robot is "Botlr" by
                                Savioke used in Aloft Hotels. Botlr is a mobile delivery robot that can autonomously
                                navigate hotel corridors, ride elevators, and deliver items to guests' rooms. It can carry
                                luggage, towels, snacks, and other amenities, reducing the workload of hotel staff and
                                ensuring quick and efficient service. Botlr uses sensors and mapping technology to
                                navigate safely and efficiently, making it a valuable addition to the hospitality industry.

                                <p>Image from Atlantic Hotels Group - Boltr robot

                                <p>Another example is Yobot, the robotic hotel concierge that manages luggage storage. In
                                collaboration with MFG automation, they adapted a robotic manipulator to help visitors
                                with their luggage. Guests enter their room number on a touchscreen and size, place their
                                luggage in a container, enter their pin number and last name and Yobot does the rest

                                <p>Image from Wired UK - Yobot

                                </p></p></p></p>

                                <p className = "font-bold">Cleaning Robots</p>

                                <p>Cleaning robots, also known as robotic vacuum cleaners or floor scrubbers designed to
                                automate cleaning tasks and maintain cleanliness in various environments. They can
                                navigate around obstacles, detect dirt and debris, and efficiently clean floors without
                                human intervention. Cleaning robots are equipped with sensors, brushes, suction
                                mechanisms, and navigation systems to efficiently clean floors and other surfaces. They
                                can operate autonomously or be controlled remotely, reducing the need for manual cleaning
                                and improving productivity. These cleaning machines are for commercial, industrial,
                                personal and research purposes. The first robotic cleaner was developed in 1996 by
                                ElectroLux and it was called Trilobite, named after the extinct arthropods that walked on
                                the oceans floor, a precursor to the current cleaning robots.

                                <p>One popular example of a cleaning robot is the Roomba robot vacuum cleaner by iRobot.
                                Roomba uses intelligent navigation algorithms and sensors to move around a room, detect
                                and avoid obstacles, and clean various floor surfaces. It can adapt to different floor types,
                                reach under furniture, and automatically return to its charging dock when the battery is
                                low.

                                <p>Image from Wikipedia -Trilobite Image from ZDNet - iRobot’s roomba robot</p></p></p>


                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle.bind(null)}>Continue</Button>{' '}
                                
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle1.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Mobile Robots</Button>
                        <Modal size="md" isOpen={modal1} toggle={toggle1.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle1.bind(null)}>What are they?</ModalHeader>
                            <ModalBody>
                            <p>
                            Mobile robotics demands a combination of different disciplines such as social and cognitive sciences, computer science and engineering, physics, mathematics, and many others. The key thing about mobile robots is, well, they're mobile. 
                            They are computers that perceive their environment through sensors and are able to perform a given task. The core focuses of mobile robot are locomotion, perception, cognition, and navigation. 
                                </p>
                                <p>
                                    The first mobile robot was a robot named Shakey, developed at Stanford Research Institute in the 1970's.
                                </p>
                                <img src={shakey} alt="shakey" className="img-thumbnail" width = "400"/> 

                                <p>
                                Mobile robots are essentially computers equipped with sensors that enable them to perceive the
                                world around them. They can analyze sensory inputs such as vision, touch, or sound to gather
                                information about their surroundings. These robots use this information to make decisions and
                                perform specific tasks. Autonomous mobile robots (AMRs) take this concept further by being
                                intelligent agents capable of performing complex tasks. They possess the ability to identify
                                features, detect patterns from previous experiences, and reason their actions. This autonomy allows
                                them to operate without constant human intervention or control. Some key details for AMRs to
                                work are:
                                <p>● Sensing: Autonomous mobile robots use sensors, such as cameras, lidar, and ultrasonic
                                sensors, to gather information about their environment. Learn more on Sensors!
                                <p>● Perception: The collected sensor data is processed using computer vision techniques to
                                extract meaningful information, enabling the robot to identify objects, map the
                                environment, and understand its location.
                                <p>● Localization: the robot determines its precise position within the environment and
                                builds an accurate map.
                                <p>● Path Planning: Using path planning algorithms, the robot generates collision-free paths
                                from its current location to a target, considering the map and obstacles.
                                <p>● Decision Making: Autonomous robots use various algorithms, such as rule-based
                                systems or machine learning, to make informed decisions based on their perception and
                                goals.

                                <h6>● Control and Actuation: The control system translates decisions into actions and
                                commands actuators (e.gmotors) to drive the robot's movement and interactions.
                                <h6>● Learning and Adaptation: Autonomous robots can learn from experience using

                                techniques like reinforcement learning, enabling them to improve their decision-
                                making processes and adapt to different situations.</h6></h6>
                                </p></p></p></p></p></p>

                                <h6 className = "font-bold">Wheeled robots</h6>

                                <p>
                                Wheeled robots are a fundamental type of mobile robots that utilize wheels for locomotion
                                and navigation. They have played a significant role in various industries, including

                                manufacturing, logistics, and research. These robots can be autonomous or semi-
                                autonomous robots equipped with wheels that enable them to move and traverse their

                                environment. Wheeled robots have a rich history dating back to the early days of robotics.
                                One notable milestone is the development of Shakey, a wheeled robot introduced in the
                                1970s at Stanford Research Institute. Shakey showcased the ability to reason, plan, and
                                navigate within dynamic environments, laying the foundation for advancements in mobile
                                robotics.
                                <p>Examples:
                                <p>● TurtleBot 3 is a popular and functional wheeled robot widely used for education,
                                research, and prototyping purposes. It combines a compact design with powerful
                                capabilities, making it an ideal platform for learning and experimentation.
                                TurtleBot 3 utilizes differential drive wheels and incorporates various sensors such
                                as cameras and lidar, enabling it to perceive its surroundings, create maps, and
                                navigate autonomously. It supports the ROS (Robot Operating System) framework,
                                providing a robust foundation for developing sophisticated applications.

                                <p>Image from Robotis - TurtleBot3

                                <p>● Mobile Industrial Robots, commonly known as MiR, are a series of wheeled robots
                                specifically designed for autonomous material transportation in industrial settings.
                                These robots excel in logistics and factory automation, streamlining internal
                                material flow and optimizing efficiency. They integrate seamlessly into existing
                                workflows and can be programmed to perform tasks such as transporting goods
                                between workstations or delivering components to assembly lines.

                                Image from MiR - Mobile Industrial Robot 
                                </p></p></p></p></p>

                                <h6 className = "font-bold"> Aerial Drones </h6>

                                <p>
                                Aerial drones, also known as unmanned aerial vehicles (UAVs), are autonomous or
                                remotely controlled aircraft that can fly without an onboard human pilot. They are equipped
                                with various sensors, cameras, and communication systems to perform tasks such as aerial
                                photography, surveillance, delivery, mapping, etc. The concept of aerial drones’ dates back
                                to the early 20th century but advancements have been made in recent decades. The first
                                widely known drone was the Radioplane OQ-2, developed by the United States during
                                World War II for target practice. Early drones were primarily used for military purposes,
                                however, with advances in technology and miniaturization these vehicles became more
                                accessible and used for recreational and commercial purposes.
                                <p>Some examples of relevant drones are:
                                <p>● Predator and Reaper - these UAVs were created by the military and have been used
                                for surveillance and airstrikes.
                                <p>● DJI Phantom - these became popular drones and consumers used them for aerial
                                photography and videography.
                                <p>● DJI Tello and DJI Tello EDU drones - These drones created by Ryze robotics are
                                used for entertainment, recreational and educational purposes as they allow you to
                                take high quality images and program them using python, scratch or swift.

                                <p>Left - DJI Tello drone, RIght - DJI phantom drone

                                <p>Aerial drones have various applications and can be used in numerous industries. Mapping
                                and surveying is a common one, drones are used to generate detailed maps used for urban
                                planning and environmental monitoring. Similarly, these can be used for search and rescue
                                by equipping the drones with thermal cameras or assessing disaster areas. Additionally,
                                these can be used for agriculture for crop monitoring and spraying pesticides. Lastly, these
                                unmanned aerial vehicles can be used in infrastructure for more efficient bridge and
                                powerline inspections.
                                </p></p></p></p></p></p></p>

                                <h6 className = "font-bold"> Underwater Robots </h6>

                                <p>
                                Underwater robots are robotic vehicles created to navigate and perform tasks underwater.
                                The development of underwater robots can be traced back to the 1950s and 1960s when
                                the first remotely operated vehicles were created for oceanographic research and military
                                applications. The use of underwater robots expanded over the years with advancements in
                                technology, particularly in the areas of materials, sensors, and propulsion systems. These
                                robots are extremely useful for deep sea exploration, as the ocean can be a harsh, corrosive
                                environment with crushing levels of pressure.
                                <p>Some notable examples of underwater robots include:
                                <p>● Remotely Operated Vehicles (ROVs) like ROV Jason and ROV Hercules. Both
                                these robots are used for deep-sea exploration, scientific research and underwater
                                inspections.
                                <p>● Autonomous underwater vehicles (AUVs) like the REMUS and Glider. These
                                untethered robots operate independently. They collect data for oceanographic
                                research, marine biology and underwater mapping.

                                <p>Underwater robots are employed in marine research and exploration by enabling the study
                                of deep-sea ecosystems, geological formations and marine life. Moreover, they aid the
                                documentation of submerged archeological sites, pipeline inspections, maintenance,
                                subsea equipment installation and inspect underwater structures like dams, bridges and
                                offshore platforms. There are some characteristics that ROVs and AUVs should have:
                                <p>● Reactivity - these vehicles should react in a timely manner to changes in the
                                environment.
                                <p>● Robustness - these vehicles should handle the harsh and dark environment that the
                                underwater holds. Also, their system should handle unexpected events, either
                                external or internal.
                                <p>● Reliability - these machines should operate without an unrecoverable failure for a
                                considerable time.
                                <p>● Modifiability/ Adaptability - these vehicles can be used for different applications;
                                therefore, modules can be added to the system without major alterations.
                                Additionally, given certain parameters or requisites, the system should adapt its
                                behavior and operating conditions.
                                
                                </p></p></p></p></p></p></p></p></p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle1.bind(null)}>Continue</Button>{' '}
                                
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle2.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Humanoid Robots</Button>
                        <Modal size="md" isOpen={modal2} toggle={toggle2.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle2.bind(null)}>What are they?</ModalHeader>
                            <ModalBody>
                                    <p>
                                    Humanoid robots are advanced robotic systems designed to resemble and mimic human
                                    capabilities, both in appearance and behavior. They are often equipped with sophisticated
                                    sensors, actuators, and artificial intelligence algorithms that enable them to interact with humans
                                    and perform complex tasks. The concept of humanoid robots dates back to ancient myths and
                                    legends, where human-like automatons were depicted. Humanoid robots play a crucial role in
                                    advancing scientific research and technological innovation. Their ability to closely mimic human
                                    movements and interactions allows researchers to study human locomotion, cognition, and social
                                    behavior. The research applications of humanoid robots gained momentum in the late 20th
                                    century. One of the most notable humanoid robots is Honda's ASIMO, introduced in 2000.
                                    ASIMO showcased remarkable mobility, balance, and dexterity; a multi-functional mobile
                                    assistant that could help people with poor mobility.

                                    <p>Image of Hondas P series and ASIMO

                                    <p>Humanoid robots used in research often possess advanced sensing capabilities, including vision
                                    systems, tactile sensors, and force feedback mechanisms. These features enable them to perceive
                                    and interact with their environment, making them valuable tools for studying human-robot
                                    interaction and human-like behaviors. Learn more about Honda humanoid robots development!
                                    Humanoid robots are employed in various applications including research, entertainment and
                                    human-robot interaction.
                                    <h6 className = "font-bold">Research</h6>
                                    <p>● Neuroscience - Humanoid robots help researchers understand the human brain by
                                    simulating cognitive processes and studying human motor control.
                                    Example: The iCub robot, developed by the RobotCub Consortium, is used to
                                    investigate cognitive development in children.

                                    <p><img src={icub} alt="" className="img-thumbnail" width = "350"/>


                                    <p>● Rehabilitation - Humanoid robots assist in rehabilitation therapies for individuals with
                                    physical impairments, providing personalized assistance and monitoring progress.
                                    Example: The RIBA-II robot, developed by RIKEN and Tokai Rubber Industries, aids
                                    in rehabilitation exercises and assists patients with mobility challenges.

                                    <p>Image of the RIBA-II robot helping someone

                                    <h6 className = "font-bold"> Entertainment</h6>

                                    <p>Humanoid robots have gained immense popularity in the entertainment industry, where their
                                    human-like appearance and interactive capabilities provide captivating experiences for
                                    audiences. Entertainment robots have a rich history, with early examples including Toyama's
                                    Gakutensoku in the 1920s and Walt Disney's animatronic characters in the 1960s. However,
                                    recent advancements in robotics have propelled entertainment robots to new heights. The first
                                    example of a humanoid robot for entertainment is Leonardo da Vinci’s mechanical knight
                                    around the year 1495. This mechanical knight was a series of mechanisms that allowed the
                                    automaton to stand up, sit down, move its arms and neck by a system of pulleys and cables
                                    used for entertainment at parties thrown by his wealthy patron. Nonetheless, entertainment
                                    robots are designed to engage and entertain people through their expressive movements,
                                    gestures, and interactive features. They often incorporate artificial intelligence and voice
                                    recognition technologies to enhance their communication capabilities.
                                    Humanoid robots have found diverse applications in the entertainment industry, including:
                                    <p>● Theme Parks and Shows: Humanoid robots are used as performers in theme park shows
                                    and interactive attractions, providing captivating experiences for visitors.
                                    <p>● Social Robots: Humanoid robots are employed as social companions or interactive
                                    toys, offering entertainment and companionship for individuals.
                                    Example: SoftBank Robotics' Pepper robot, designed to interact with people in various
                                    settings, from homes to retail environments.
                                    <h6 className = "font-bold"> Human-robot interaction (HRI)</h6>
                                    
                                    <p>Human-robot interaction (HRI) research and design today span a wide range of topics.
                                    Numerous professional associations and ad hoc gatherings are contributing to the literature's
                                    rapid expansion, which is mostly occurring in the technical fields of mechanical and electrical
                                    engineering, computer and control science, and artificial intelligence. Human-robot interaction
                                    (HRI) focuses on developing effective and intuitive ways for humans to interact and
                                    collaborate with robots seamlessly. The field of HRI has evolved alongside advancements in
                                    robotics, cognitive science, and psychology, aiming to enhance the naturalness and usability
                                    of human-robot interactions. Humanoid robots utilized in HRI are designed to exhibit social

                                    and communicative behaviors, including recognizing and responding to human gestures, facial
                                    expressions, and vocal commands.
                                    <p>Humanoid robots are extensively used in various applications involving human-robot
                                    interaction, such as:
                                    <p>● Personal Assistants: Humanoid robots serve as personal assistants, helping with tasks
                                    and providing information and services in a user-friendly manner.
                                    Example: Boston Dynamics' Atlas robot, which can assist in household chores, carry
                                    objects, and perform various tasks.
                                    <p>● Education and Research: Humanoid robots facilitate interactive learning experiences
                                    and assist in educational and research environments, promoting engagement and
                                    knowledge acquisition.

                                    <p>Example: Quori, a novel, affordable, and modular social robot designed for human-
                                    robot interaction researchers. Learn more about Human-robot interaction!

                                    <p><img src={atlas} alt="" className="img-thumbnail" width = "350"/>
                                </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Button color="primary" onClick={toggle2.bind(null)}>Continue</Button>
                            </ModalFooter>
                        </Modal>
                        <Button type="button" onClick={toggle3.bind(null)} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Drones</Button>
                        <Modal size="md" isOpen={modal3} toggle={toggle3.bind(null)} className={props.className}>
                            <ModalHeader toggle={toggle3.bind(null)}>Why is it cool?</ModalHeader>
                            <ModalBody>
                            Undefined Technologies' Silent Ventus drone uses an ion propulsion system to fly, instead of propellers
                            <p>Undefined Technologies</p>
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <Button color="primary" onClick={toggle2.bind(null)}>Continue</Button>
                            </ModalFooter>
                        </Modal>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default JsComponents;
