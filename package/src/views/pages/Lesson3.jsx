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

                        <h4 className = "subtitle font-bold text-darkblue"> Types of Robots</h4>

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
                        <h6 className="font-bold">Types of robotic arm configurations</h6>
                        <p>
                        ● Cartesian Robot - Also known as the gantry robot, is named after the cartesian
                        coordinate system. These robots include three articulating joints programmed to
                        move linearly using the X, Y and Z coordinates. These robots are typically used for
                        picking and placing items on converter belts.

                        

                        <p>● Articulated Robot Arm - These are the most common mechanical robot arms seen

                        in the workplace. These robots are used for welding, material handling, pick-and-
                        place tasks, dispensing and much more. They resemble human arms because of

                        their multiple axes and degrees of freedom. Because of this, they are among the
                        most adaptable, flexible and space saving robotic manipulators, however, they are
                        by nature dangerous and must be equipped with necessary safety features.

                        Image: How Are Industrial Robots Built? - Moving joints of a robotic arm

                        <p>● Cylindrical Robot Arm - This robot has at least one rotary joint at its base allowing
                        it a rotational motion along its axis. Its axis constitutes a cylindrical coordinate
                        system (up, down and around). This robotic arm is valuable in industries that
                        produce tubes and cylindrical components. Other uses include die casting and spot
                        welding.

                        Image: Process Solutions - Cylindrical Robotic arm

                        <p>● SCARA Robots - SCARA is an acronym for Selective Compliance Assembly Robot
                        Arm. These robots work on a three-dimensional axis (X,Y and Z ) and rotary
                        motion, in other words, it combines cartesian and cylindrical movements. SCARA
                        robots are used in biomedical applications, assembly and pelletising.

                        Image: SCARA

                        <p>● Polar Robot- Also known as the spherical robot. It consists of an arm with two
                        rotary joints and one linear joint connected to the base with a twisting joint. The
                        axes work together to form a polar coordinate. These are used for injection molding,
                        welding and material handling.

                        Image from Process Solutions - Polar robot arm

                        <p>● Delta Robot - Delta Robots, or parallel robots, possess three arms connected to a

                        single base, which is mounted above the workspace. Delta Robots work in a dome-
                        shape and can move both delicately and precisely at high speeds due to each joint

                        of the end effector being directly controlled by all three arms.

                        Image from Process Solutions - Delta or parallel robot

                    
                        <p>Another example of a material handling robot is the Sparrow robot, the first robotic system
                        in amazon warehouses that can detect, select and handle individual products in their
                        inventory. 
                        </p></p></p></p></p></p></p>
                        


                        <h5 className = 'subtitle font-bold text-darkblue'> Service Robots </h5>

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


                        <h5 className = 'subtitle font-bold text-darkblue'> Mobile Robots </h5>

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


                        <h5 className = 'subtitle font-bold text-darkblue'> Humanoid Robots </h5>

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

                            <p>Image of iCub robot crawling like a child

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

                            <p>Image of Quori in a museum Image of ATLAS, from Boston Dynamics
                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Agricultural Robots </h5>

                        <p>

                        Agricultural robots have emerged as a transformative technology in modern farming practices. The
                            development of agricultural robots can be traced back to the late 20th century, with early
                            applications in crop monitoring and mechanized harvesting. Over the years, advancements in
                            robotics, sensing technologies, and artificial intelligence have revolutionized the agricultural
                            industry, enabling efficient and sustainable farming practices. A well known example of robots
                            used in agriculture is Eli Whitney’s cotton gin. This machine separated cottonseed from cotton
                            fibers quickly, creating up to fifty pounds of cleaned cotton a day, work equivalent to hundreds of
                            hours if done manually.

                            <p>Image of Eli Whitney’s cotton gin

                            <h6 className = "font-bold"> Crop monitoring</h6>

                            <p>Crop monitoring involves the use of agricultural robots to gather real-time data about crop
                            health, growth, and environmental conditions. This data helps farmers make informed
                            decisions regarding irrigation, fertilization, and pest management. Crop monitoring robots
                            are equipped with sensors, such as multispectral or hyperspectral cameras and LiDAR, to
                            capture data about crop health, moisture levels, nutrient deficiencies, and weed infestations.
                            These robots often utilize autonomous navigation systems to cover large agricultural areas
                            efficiently.
                            <p>Crop monitoring can find applications in various tasks, including:
                            <p>● Disease and Pest Detection: Robots equipped with imaging sensors can identify
                            early signs of crop diseases and pest infestations, allowing farmers to take timely
                            preventive measures.
                            Example: Blue River Technology's See & Spray robot, which uses computer vision
                            to detect and selectively apply herbicides to weeds, minimizing chemical usage.
                            <p>● Yield Estimation: Agricultural robots can collect data on crop density, plant height,
                            and canopy cover to estimate yield potential, helping farmers optimize harvest
                            planning and resource allocation.
                            Example: Raptor Maps' drone-based thermal imaging system, which provides
                            insights into crop health and predicts yield variations in large-scale farming
                            operations.

                            <p>Image of Blue Rivers See and Spray robot Image of Raptor Maps’ thermal imaging system
                            <h6 className = "font-bold">Harvesting</h6>
                            <p>Harvesting robots automate the labor-intensive process of harvesting crops, reducing the
                            dependency on manual labor and improving efficiency. They have witnessed significant
                            advancements, driven by the need to address labor shortages and improve productivity in
                            the agricultural sector. Early developments focused on specialized harvesting robots for
                            specific crops, such as strawberries and tomatoes. Harvesting robots are designed with
                            dexterous manipulators and computer vision systems to identify ripe crops, perform precise
                            cutting or picking motions, and gently handle delicate produce. They often employ
                            machine learning algorithms to adapt to different crop varieties and environmental
                            conditions.
                            <p>These robots can be found in various agricultural settings such as:
                            <p>● Fruit Picking: Robots capable of identifying and picking ripe fruits, such as apples
                            or oranges, with minimal damage to the crop.
                            Example: FFRobotics' apple harvesting robot, which uses advanced vision systems
                            and robotic arms to selectively harvest apples based on their ripeness.
                            <p>● Lettuce Thinning: Robots designed to thin out lettuce plants by selectively
                            removing excess seedlings, ensuring optimal spacing for growth.
                            Example: Vision Robotics' lettuce thinning robot, which utilizes computer vision
                            and mechanical tools to identify and remove unwanted lettuce plants in large-scale
                            operations.

                            <p>Image of the apple harvesting robot from FFRobotics

                            <h6 className = "font-bold">Seeding</h6>
                            <p>Seeding robots automate the process of sowing seeds, providing precise and efficient
                            seed placement in agricultural fields. These robots have evolved from traditional seed
                            drills to autonomous systems capable of handling a wide range of crop varieties and
                            planting patterns. Seeding robots feature precision seed placement mechanisms,
                            integrated seed and fertilizer dispensers, and navigation systems to ensure accurate and
                            uniform seed distribution. They can adapt to various soil types and planting
                            configurations.
                            <p>Seeding robots can be found in:
                            <p>● Row Crop Planting: Robots designed to sow seeds in neat rows, optimizing plant
                            spacing and facilitating uniform growth.
                            Example: Dot Technology Corp's autonomous platform, which can perform
                            precise row planting for crops like corn and soybeans.
                            <p>● Nursery Planting: Robots specialized in transplanting seedlings into nursery trays
                            or pots with high precision and efficiency.
                            Example: Harvest Automation's nursery robot, which automates the transplanting
                            of potted plants in greenhouses, nurseries, and horticultural operations.

                            <p>Image of Harvest Automation’s nursery robot Image of Dot Technology Corp's autonomous platform

                            <h6 className = "font-bold">Precision farming</h6>
                            <p>Precision farming involves the use of agricultural robots and advanced technologies to
                            optimize resource management, reduce environmental impact, and improve overall farm
                            productivity. These robot farming techniques emerged from the integration of robotics,
                            GPS technology, remote sensing, and data analytics, revolutionizing farming practices
                            worldwide. Precision farming robots are equipped with various sensors, such as GPS
                            receivers, soil moisture sensors, and weather stations, to collect real-time data. They

                            utilize advanced analytics and automation algorithms to optimize input usage, irrigation
                            scheduling, and crop treatment.
                            <p>Precision farming robots are deployed in diverse agricultural activities, including:
                            <p>● Variable Rate Application: Robots capable of adjusting the application of
                            fertilizers, pesticides, and water based on site-specific crop requirements.
                            Example: John Deere's intelligent sprayers, which use sensor data and mapping
                            technology to precisely target areas in need of treatment while minimizing
                            chemical usage.
                            <p>● Autonomous Irrigation: Robots that autonomously monitor soil moisture levels
                            and apply water as needed, ensuring efficient irrigation practices.
                            Example: Taranis' autonomous irrigation system, which integrates sensor data,
                            weather forecasts, and plant water needs to optimize irrigation scheduling in
                            large-scale operations.

                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Medical Robots </h5>

                        <p>

                        Medical robots are those robotic systems used in medical procedures and settings. These systems
                            have shown rapid growth over the decades, driven by technological improvements and advances
                            in medical imaging. Medical robots have had a great impact on surgeries, both radiosurgery and
                            tissue manipulation. These surgical systems have been beneficial as they reduce patient trauma
                            and faster recovery times. They offer precision and dexterity, enabling precise movements and
                            delicate procedures. With advanced imaging and guidance systems, they enhance visualization and
                            assist in surgical planning and prioritize patient safety through built-in safety features. However,
                            the long term effects are still under investigation, as medical robots are a new concept. The use of
                            robotics in a medical setting emerged in the late 1980’s with the Robodoc (Integrated Medical
                            Systems) used for prosthetic hip replacement. The system was composed of a robotic manipulator
                            equipped with a milling device as its end effector that carved the shape of the cavity in the patients
                            femur autonomously. On the other hand, in neurosurgery, the Unimation Puma 200 was introduced
                            for brain biopsy during the 1990s. The applications of medical robotics are diverse and continue
                            to expand. Surgical robots are used in procedures such as prostatectomy, cardiac surgery, and
                            gynecological surgery. Rehabilitation robots aid in stroke rehabilitation, spinal cord injury
                            recovery, and the treatment of musculoskeletal disorders. Robot prosthetics improve the lives of
                            amputees by restoring mobility and enabling them to perform delicate tasks. Robotic exoskeletons
                            find applications in rehabilitation, military assistance, and industrial settings.
                            <h6 className = "font-bold">  Surgical robots </h6>

                            <p>Surgical robots are sophisticated robotic systems designed to assist surgeons in performing
                            precise and minimally invasive procedures with improved dexterity and visualization. These
                            machines are required to work within specific constraints in order to ensure the safety of the
                            patient; for these surgical systems should have tactile feedback, three-dimensional vision for
                            precise hand-eye coordination and at least six degrees of freedom for full dexterity. The field

                            of surgical robotics has witnessed significant progress since the introduction of the da Vinci
                            Surgical System in the early 2000s. The da Vinci System employs a master-slave
                            configuration, where the surgeon operates from a console, manipulating robotic arms equipped
                            with specialized surgical instruments. Surgical robots typically comprise articulated robotic
                            arms, end-effectors, and a control system. They incorporate advanced imaging technologies,
                            such as stereoscopic cameras or fluorescence imaging, to provide surgeons with a magnified,
                            high-resolution view of the surgical site.

                            <p>Image of da Vinci Surgical Systems

                            <p>In addition to minimally invasive surgeries with the da Vinci Surgical Systems, surgery robots
                            can perform microsurgeries. Robots aid in performing delicate microsurgeries, such as
                            ophthalmic procedures and nerve repair, where high precision and stability are critical. These
                            robots enable tremor-free movements and micron-level accuracy.
                            Example: Microsure's MUSA robot enhances precision and stability for microvascular
                            procedures like lymphatic surgery and super-microsurgery.

                            <p>Image of MUSA robot for microsurgeries

                            <h6 className = "font-bold"> Rehabilitation robots </h6>
                            <p>Rehabilitation robots are advanced robotic systems designed to assist individuals in regaining
                            mobility, strength, and function during the recovery process after an injury or medical
                            condition. Rehabilitation robots have evolved from simple assistive devices to complex
                            systems that integrate robotics, sensing technologies, and artificial intelligence to provide
                            personalized and intensive rehabilitation programs. Rehabilitation robots incorporate sensor
                            technologies, such as inertial measurement units and force sensors, to monitor and analyze
                            patient movements, muscle activity, and force exertion. These robots utilize actuators, such as
                            pneumatic or electric motors, to provide assistive or resistive forces during therapy sessions.

                            <p>Advanced control algorithms, including impedance control or adaptive learning, enable real-
                            time adjustment of therapy parameters based on patient-specific needs.

                            <p>Rehabilitation robots are employed in various rehabilitation settings, including:
                            <p>● Upper Limb Rehabilitation: Robots assist patients in regaining arm and hand
                            functionality by providing support and guidance for repetitive exercises. These robots
                            enable adjustable assistance levels and customizable therapy programs.
                            Example: Kinova's JACO robotic arm that facilitates upper limb rehabilitation for
                            individuals with conditions like stroke or spinal cord injury.
                            <p>● Gait Training: Robots aid individuals with walking impairments in regaining mobility
                            and improving their gait patterns through repetitive and intensive training. These robots
                            offer body-weight support, adjustable walking speeds, and real-time feedback.
                            Example: Hocoma's Lokomat system combines a robotic exoskeleton and a treadmill
                            to provide intensive gait training for individuals with neurological disorders.

                            <p>Image of Kinova’s robotic arm Image Lokomat for mobility rehabilitation

                            <h6 className = "font-bold">Robot prosthetics</h6>
                            <p>Robot prosthetics, also known as bionic prostheses, are advanced artificial limbs that mimic
                            the functionality and appearance of natural limbs. Robot prosthetics are typically composed of
                            lightweight materials, sensors, actuators, and advanced control systems. They incorporate
                            myoelectric or neural interfaces that enable users to control the prosthetic limb using their
                            residual muscle signals or neural impulses. One of the earliest written references to prosthetic
                            limbs is by Ambroise Paré during the 1570s; he was a military surgeon that had amputated
                            many soldiers arms or legs. He decided to design dn build artificial limbs to help the men
                            injured, as he found that many of them preferred taking their own lives than living without a
                            limb.
                            <p>Robot prosthetics find applications in various amputation levels, including:
                            <p>● Upper Limb Prosthetics: Robotic arms and hands restore upper limb functionality,
                            allowing users to perform complex grasping and manipulation tasks. These prosthetics
                            offer multiple degrees of freedom, tactile feedback, and intuitive control interfaces.
                            <p>Example: the VINCENTevolution 3, a modular prosthetic hand with advanced grip
                            patterns and individual finger control.

                            <p>● Lower Limb Prosthetics: Robotic legs and feet enable individuals with lower limb
                            amputations to regain mobility, walk with a more natural gait, and navigate different
                            terrains. These prosthetics incorporate advanced walking algorithms, shock absorption
                            mechanisms, and energy return capabilities.
                            <p>Example: The Utah bionic leg by University of Utah's Bionic Engineering Lab.
                            Designed for above-knee amputees, the Utah Bionic Leg combines powered knee and
                            ankle joints with advanced AI.

                            <h6 className = "font-bold"> Robotic exoskeletons </h6>
                            <p>Robotic exoskeletons are wearable robotic devices that provide physical assistance and support
                            to individuals with mobility impairments, enhancing their strength, endurance, and mobility.
                            Robotic exoskeletons have evolved from rigid and bulky structures to lightweight, flexible
                            systems with advanced actuation and sensing capabilities, enabling natural movements and
                            reducing user fatigue. Robotic exoskeletons consist of rigid or soft wearable frames, actuators,
                            sensors, and control systems. They are designed to augment human movements and provide
                            assistive forces or resistive torques as required. These exoskeletons often incorporate
                            algorithms for gait detection, motion intention recognition, and adaptive control.
                            Robotic exoskeletons find applications in various domains, including:
                            <p>● Rehabilitation: Exoskeletons support gait training and assist individuals with mobility
                            impairments in regaining walking abilities and muscle strength.
                            Example: Ekso Bionics' EksoNR, a robotic exoskeleton for neurorehabilitation that
                            enables intensive gait training and helps individuals recovering from stroke or spinal
                            cord injury.
                            <p>● Industrial and Military: Exoskeletons assist workers in physically demanding tasks by
                            reducing fatigue and the risk of musculoskeletal injuries. They also find applications in
                            military contexts for load-carrying and soldier assistance. These exoskeletons provide
                            load support, ergonomic design, and intuitive control interfaces.
                            Example: Sarcos Robotics' Guardian XO full-body exoskeleton, which amplifies the
                            wearer's strength and endurance for industrial and defense applications.

                            <p>Image of Ekso Bionics’ exoskeleton Image of Sarco Robotics exoskeleton

                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Exploration Robots </h5>

                        <p>

                        Since the early days of human civilization, our innate curiosity has driven us to explore and
                        understand the world around us. With advancements in technology, robotics has emerged as a
                        key tool for exploring remote and hostile environments where humans cannot easily venture.
                        Robotics for exploration have the potential to impact fields such as security, search and rescue,
                        archaeology, nuclear decommissioning, space exploration and much more. In these challenging
                        environments in which exploration robots are deployed, the main focus is their locomotion
                        system. Typically, the main purpose of these machines is to gather information and perform
                        hazardous tasks in environments that are inaccessible to humans. Humans are mostly in the loop,
                        however the goal is to use the advancing technology to create mobile and autonomous robots.
                        <h6 className = "font-bold">Planetary rovers</h6>
                        <p>Planetary rovers are vital tools for space exploration, allowing scientists to gather data and
                        conduct experiments on celestial bodies. They have been deployed on various missions, such
                        as the Mars rovers, to investigate geological composition, search for signs of life, and expand

                        our understanding of the universe. The history of planetary rovers’ dates back to the mid-
                        20th century when the Soviet Union's Lunokhod 1 became the first robotic rover to explore

                        the Moon in 1970. Subsequently, NASA's Mars rovers, Sojourner, Spirit, Opportunity,
                        Curiosity, and Perseverance, have revolutionized our knowledge of the Red Planet. Rovers
                        are scientific instruments built to withstand severe limits on power, computational resources,
                        communication bandwidths and line of sight. Additionally, these vehicles possess a
                        locomotion system that allows them to travel on rugged terrain.
                        Planetary rovers have various applications, including:
                        <p>● Collecting geological samples and conducting experiments on extraterrestrial
                        surfaces.
                        <p>● Mapping the terrain, analyzing the atmosphere, and searching for signs of water or
                        life.
                        <p>● Assisting in the preparation for human space exploration missions.

                        <p>Image of Lunokhod 1 Image of the Perseverance rover deployed on Mars in 2020.

                        <h6 className = "font-bold">Underwater exploration robots</h6>
                        <p>Exploring the vast and mysterious underwater world is challenging due to the extreme
                        conditions and limited human endurance. Underwater exploration robots play a crucial role in
                        uncovering the secrets hidden beneath the surface of oceans, lakes, and other aquatic
                        environments. Underwater exploration robots possess characteristics such as water resistance,
                        maneuverability, and the ability to withstand high pressures. They are equipped with sensors,
                        cameras, and manipulator arms to capture images, collect samples, and perform tasks
                        underwater. Underwater exploration robots have diverse applications, including conducting
                        marine scientific research, such as studying marine life, coral reefs, and underwater
                        ecosystems. They also assist in the inspection and maintenance of underwater infrastructures,
                        such as oil rigs or underwater cables. Lastly, they assist in search and rescue operations and
                        investigating archaeological sites. One important application of underwater exploration robots
                        is deep sea exploration. The deep sea still remains the largest unknown territory on earth,
                        encompassing more than 70% of earth's surface. Humans have explored the deep sea before
                        on human occupied vehicles (HOVs) like James Cameron in 2012, who explored the
                        Challenger Deep, an undersea valley in the Mariana Trench, known as the deepest surveyed
                        spot on the planet. Today, humans are developing technologies like ROVs and AUVs for deep
                        sea exploration. An example of this is a research study of a self-powered robot made with soft
                        materials that is designed after the snailfish in order to withstand extreme pressures.

                        <p>Image from Nature Journal

                        </p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Military and Defense Robots </h5>

                        <p>
                        The use of robots in military and defense operations has become increasingly prevalent in recent
                        decades. These robotic systems have been developed to enhance efficiency, reduce human risk,
                        and provide advanced capabilities for various military applications. Robotics in the military have
                        many applications, these include mine detection, surveillance, logistics and rescue operations,
                        reconnaissance, communications, and infrastructure. Current research in the field focuses its
                        efforts on making these machines completely autonomous and efficient. The use of these robots
                        has various potential benefits such as reducing exposure to extreme danger in battle and workload.
                        Similarly, these can improve decision making skills by incorporating artificial intelligence, data
                        collection and analysis. Additionally, these robots won't be harmed by biological attacks and can
                        be hidden for long periods of time. These robots can be classified by their forms of locomotion;
                        examples of these categories are rolling robots, walking robots, flying robots and swimming
                        robots.
                        <h6 className = "font-bold">Unmanned aerial vehicles (UAVs)</h6>
                        
                        <p>Unmanned aerial vehicles, commonly known as drones, have revolutionized military
                        operations. UAVs offer increased mobility, versatility, and the ability to gather real-time
                        data and imagery from various perspectives, making them invaluable assets in military
                        missions. The development of UAVs can be traced back to the early 20th century, with
                        notable advancements during World War I and II. However, it is in recent years that UAV
                        technology has made significant progress, resulting in the widespread deployment of
                        drones in military and defense applications. UAVs possess characteristics such as flight
                        stability, agility, payload capacity, and autonomous or remote-controlled operation. They
                        are equipped with sensors, cameras, communication systems, and sometimes weapon
                        systems, depending on their specific mission requirements.
                        <p>UAVs have a wide range of military applications, including:
                        <p>● Aerial surveillance and reconnaissance to gather intelligence on enemy positions,
                        activities, and terrain.
                        <p>● Target acquisition and tracking for precise strikes and military operations.
                        <p>● Cargo and supply delivery in remote or dangerous areas.
                        <p>● Electronic warfare, providing communication disruption or surveillance
                        capabilities.
                        <p>Examples of military UAVs include the General Atomics MQ-9 Reaper, an armed drone
                        used for surveillance and precision strikes.

                        <h6 className = "font-bold">Bomb disposal robots</h6>
                        <p>Bomb disposal robots are specialized robotic systems designed to handle explosive devices
                        safely. These robots enable military and defense personnel to neutralize potential threats
                        remotely, minimizing the risk to human life. Bomb disposal robots possess characteristics
                        such as remote operation capability, dexterity, and ruggedness. They are equipped with
                        manipulator arms, cameras, sensors, and specialized tools to inspect, analyze, and disable
                        explosive devices. Bomb disposal robots find application in various military and defense
                        scenarios, including:
                        <p>● Safely approaching and handling improvised explosive devices (IEDs) or
                        unexploded ordnance.
                        <p>● Conducting remote reconnaissance of suspicious packages or areas.
                        <p>● Disabling or detonating explosive devices using specialized tools.
                        <p>Examples of bomb disposal robots include the iRobot 510 PackBot (left) , widely used by
                        military and law enforcement agencies for bomb disposal operations, and the Remotec
                        ANDROS F6A (right) designed for hazardous material handling and explosive ordnance
                        disposal.

                        <h6 className = "font-bold">Reconnaissance robots</h6>
                        <p>Reconnaissance robots are robotic systems designed for gathering information, conducting
                        surveillance, and providing situational awareness in military operations. These robots play

                        a crucial role in enhancing the effectiveness and safety of military reconnaissance missions.
                        Reconnaissance robots possess characteristics such as stealth, mobility, sensor integration,
                        and remote operation capability. They are equipped with sensors (such as cameras, thermal
                        imagers, and laser scanners), communication systems, and sometimes even advanced AI
                        algorithms for autonomous decision-making.
                        Reconnaissance robots find applications in various military operations, including:
                        <p>● Gathering real-time intelligence on enemy positions, movements, and activities.
                        <p>● Providing situational awareness in urban warfare scenarios.
                        <p>● Conducting surveillance and reconnaissance in hazardous or inaccessible areas.
                        <p>Examples of reconnaissance robots include the Boston Dynamics Spot robot, which has
                        been deployed by military and law enforcement agencies for reconnaissance missions, and
                        the AeroVironment Raven, a lightweight UAV used for tactical reconnaissance in military
                        operations.

                        <p>Image of the AeroVironment Raven (UAV)
                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Educational Robots </h5>

                        <p>

                        Educational robots have become valuable tools for teaching and learning, providing hands-on
                        experiences that engage students in science, technology, engineering, and mathematics (STEM)
                        fields. Educational Robots are designed explicitly for educational purposes to enhance students'
                        learning experiences, foster skill development, and stimulate interest in STEM fields. While
                        programmable robotics focuses on designing robots with the ability to be programmed and
                        controlled by students or educators. The use of educational robots in the classroom can be traced
                        back to the 1980s, with the introduction of robotic kits such as the LEGO Mindstorms. Since then,
                        educational robots have evolved significantly, offering enhanced functionality, versatility, and
                        accessibility. Educational robots possess characteristics such as user-friendly interfaces, durability,
                        safety features, and educational content integration. They are designed to be easily programmable
                        and offer a range of sensors, actuators, and interactive components to facilitate hands-on learning.
                        <p>Educational robots find applications in various educational settings, including:
                        <p>● Teaching fundamental programming concepts and computational thinking.
                        <p>● Enhancing understanding of robotics and automation principles.
                        <p>● Encouraging teamwork, collaboration, and problem-solving skills.

                        <p>Another example of educational robots is the Sphero SPRK+, a spherical robot that introduces
                        programming and coding through engaging activities.
                        <h6 className = "font-bold"> Programmable robots </h6>
                        
                        <p>The integration of programmable robotics in education gained traction in the early 2000s,
                        driven by the growing recognition of the importance of coding and computational thinking
                        skills. These typically offer user-friendly programming interfaces, such as block-based
                        coding or text-based languages, enabling students to create sequences of commands and
                        algorithms. These platforms often provide simulation and debugging tools, fostering
                        iterative problem-solving.
                        <p>Examples of programmable robotics platforms for education include the Arduino-based
                        robotics kits, which allow students to develop and program custom robotic systems, and
                        the VEX Robotics system, which combines construction elements with a programming
                        environment to promote hands-on learning and creativity.

                        <p>Images of programmable robots. Top - Lego Mindstorms, bottom left - Arduino kit, bottom right - Vex

                        robot

                        </p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Entertainment Robots </h5>

                        <p>
                        Robotics in the entertainment industry have been part of the picture for quite some time. These
                            machines can be found in films and TV, amusement parks or toys. An early example of a robot
                            made for entertainment purposes is the Cysp 1 in 1956, which stands for Cybernetics and
                            Spatiodynamics. This art piece was created by Nicolas Schöffer and it would react to ballet
                            dances, creating a jointer choreography as a response to the dances.
                            <h6 className = "font-bold"> Robotic companions </h6>
                            
                            <p>Entertainment robots in the form of robotic companions have gained popularity as they
                            provide social interaction, companionship, and entertainment value. Robotic companions
                            possess characteristics such as human-like appearance, interactive interfaces, voice
                            recognition, emotional responses, and mobility. They are designed to provide
                            companionship, engage in conversations, and perform various tasks to entertain and assist
                            users.
                            <p>Robotic companions find applications in various domains, including:
                            <p>● Providing emotional support and companionship for individuals, especially the
                            elderly or those with disabilities.
                           <p>● Assisting with daily tasks, such as reminders, medication management, and home
                            automation.
                            <p>● Enhancing the entertainment experience through interactive games, storytelling,
                            and personalized interactions.
                            <p>Examples of robotic companions include Paro, a therapeutic robotic seal, and Jibo, a
                            social robot designed to engage in conversations and perform tasks in a home
                            environment.

                            <h6 className = "font-bold">Interactive toys </h6>
                            <p>Interactive toys powered by robotics have revolutionized the toy industry, providing
                            children with immersive and educational play experiences. The integration of robotics into
                            interactive toys gained momentum in the late 20th century, with the advent of
                            programmable toy robots. Today, interactive toys encompass a wide range of robotic
                            playmates, offering interactive features and educational content. These possess
                            characteristics such as engaging designs, interactive sensors, sound and motion
                            capabilities, and programmable features. They are designed to promote imaginative play,
                            learning, and skill development in children.
                            <p>Interactive toys find applications in various contexts, including:
                            <p>● Enhancing cognitive development, problem-solving skills, and creativity in
                            children.
                            <p>● Teaching programming concepts and computational thinking through interactive
                            play.
                            <p>● Creating interactive and immersive experiences in the toy industry.
                            Examples of interactive toys include Cozmo, (left) a small robot with expressive features
                            that interacts and plays games with children and AIBO the robotic dog (right).

                            <h6 className = "font-bold"> Robot performers </h6>
                            <p>Robot performers have emerged as a unique form of entertainment, blurring the boundaries
                            between robotics and art. The concept of robot performers has its roots in the field of
                            animatronics, with early examples appearing in theme parks and theaters. With
                            advancements in robotics and AI, robot performers have evolved to showcase sophisticated
                            movements and interactions. Robot performers possess characteristics such as human-like
                            movements, expressive features, synchronized actions, and programmed performances.
                            They are designed to entertain audiences through dance, music, acting, or interactive
                            shows.
                            <p>Robot performers find applications in various entertainment contexts, including:

                            <p>● Theatrical performances, where robots take on roles traditionally performed by
                            human actors.
                            <p>● Musical performances, where robots play instruments or engage in synchronized
                            dance routines.
                            <p>● Interactive shows, where robots engage with audiences, respond to cues, or
                            participate in collaborative performances.
                            Examples of robot performers include Stuntronics animatronic robots used for aerial
                            performances. They perform dangerous stunts that are too difficult for humans.

                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Collaborative Robots </h5>

                        <p>

                        Collaborative robots are designed to work alongside humans, assisting in tasks that require
                            cooperation and collaboration. These robots are relatively recent and very active in research areas
                            like Human computer interaction (HCI) and human robot interaction (HRI). A few examples of
                            major contributors for this field are universal robotics, rethink robotics, ABB, KUKA robotics,
                            etc. These robots commonly help in manufacturing related tasks like assembly, packaging,
                            automation, material handling, and product quality control. Thanks to advances in technologies
                            like artificial intelligence, computer vision, reinforcement learning and cognitive computing, these
                            machines can perform multiple tasks close to human workers, be aware of their surroundings,
                            interact with humans or other robots and make intelligent decisions.
                            <h6 className = "font-bold"> Social robots </h6>

                            <p>Social robots, a subset of collaborative robots (cobots), are designed to interact and
                            communicate with humans in social and collaborative settings. This section explores the role
                            of social robots in facilitating social interactions and human-robot collaboration. Social robots
                            possess characteristics such as human-like appearance, natural language processing, facial
                            recognition, emotional intelligence, and adaptability. They are designed to understand and
                            respond to human emotions, facilitate communication, and foster social interactions.
                            <p>Social robots find applications in various domains, including:
                            <p>● Therapy and rehabilitation, assisting individuals with emotional well-being, autism, or
                            cognitive impairments.

                            <p>● Companionship for the elderly, providing social interaction, cognitive stimulation, and
                            emotional support.
                            <p>● Facilitating social interactions in educational settings, museums, or public spaces.
                            <h6 className = "font-bold"> Therapy</h6>
                            <p>Collaborative robots, specifically designed for therapy purposes, have emerged as valuable
                            tools in assisting individuals with physical, cognitive, or emotional challenges. This section
                            explores the role of therapy robots in enhancing well-being and aiding in rehabilitation.
                            Therapy robots possess characteristics such as adaptability, sensory capabilities, human-like
                            movement, and programmed responses. They are designed to engage individuals in therapeutic
                            activities, provide support, and monitor progress.
                            Therapy robots find applications in various therapeutic contexts, including:
                            <p>● Physical rehabilitation, assisting individuals with motor skills, gait training, and
                            balance improvement.
                            <p>● Cognitive therapy, aiding individuals with memory loss, attention deficits, or cognitive
                            impairments.
                            <p>● Emotional support, providing companionship and comfort for individuals experiencing
                            anxiety, stress, or trauma.
                            <p>An example of a therapy robot is the Miro robot, designed for social and emotional support in
                            therapeutic interventions.

                            <h6 className = "font-bold"> Companionship</h6>
                            <p>Collaborative robots designed for companionship aim to provide social interaction,
                            emotional support, and a sense of companionship to individuals in need. These robots have
                            conversational abilities, emotional recognition, adaptive behavior, and personalization.
                            They are designed to establish emotional connections, engage in conversations, and offer
                            companionship tailored to individual needs.
                            <p>Companion robots find applications in various contexts, including:

                            <p>● Supporting individuals living alone or experiencing social isolation, providing
                            company and conversation.
                            <p>● Assisting individuals with mental health conditions, offering emotional
                            support and monitoring.
                            <p>● Providing companionship for the elderly, reducing loneliness and
                            enhancing overall well-being.
                            <p>Examples of companion robots include Buddy, a social robot designed to assist
                            with daily tasks and provide companionship, and Lovot, a small robot companion
                            that engages in interactions and seeks emotional connection.

                            <h6 className = "font-bold">Social interaction</h6>
                            <p>Social interaction is a fundamental aspect of human existence, and collaborative robots have
                            emerged as facilitators of social engagement in various domains. Social interaction robots
                            possess characteristics such as expressive features, gesture recognition, speech synthesis, and
                            collaborative abilities. They are designed to engage individuals in conversations, interpret
                            social cues, and foster collaboration in group settings.
                            <p>Social interaction robots find applications in various domains, including:
                            <p>● Educational settings, promoting collaborative learning, and facilitating group activities.
                            <p>● Public spaces, engaging with visitors, providing information, and entertainment.
                            <p>● Teamwork and collaboration in industrial or research environments.

                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Exoskeleton Robots </h5>

                        <p>

                        Robotic exoskeletons are rapidly evolving with the advances that are occurring in mechanical,
                        biomedical and electronic engineering, as well as artificial intelligence. These are powered
                        devices that attach around to a human or animal body to aid movements by delivering mechanical
                        power through actuators, links and sensors.
                        Different applications for exoskeleton robots:

                        <h6 className = "font-bold"> Rehabilitation</h6>
                        
                        <p>Exoskeleton robots have emerged as valuable tools in the field of rehabilitation, assisting
                        individuals with mobility impairments in regaining independence and improving motor
                        functions. The development of exoskeleton robots for rehabilitation purposes began in the early
                        2000s, with a focus on assisting individuals with spinal cord injuries or stroke. Over time,
                        exoskeletons have evolved to offer more natural and personalized assistance. Exoskeleton
                        robots possess characteristics such as wearable design, sensor integration, actuation systems,
                        and adaptability to user movements. They are designed to provide support, enhance mobility,
                        and assist in the rehabilitation process. The MyoPro, a myoelectric exoskeleton for upper limb
                        rehabilitation is a good example of these machines in use.
                        <p>Exoskeleton robots find applications in various rehabilitation contexts, including:
                        <p>● Gait training and assistance for individuals with mobility impairments.
                        <p>● Upper limb rehabilitation, aiding in the recovery of motor functions in the arms and
                        hands.
                        <p>● Assistance in activities of daily living, such as standing up, walking, or grasping
                        objects.

                        <p>Image of the MyoPro

                        <h6 className = "font-bold">Assistive devices</h6> 
                        <p>Exoskeleton robots also serve as assistive devices, providing support and assistance to
                        individuals with disabilities or age-related mobility challenges. These aim to enhance the
                        mobility and independence of individuals with physical limitations. Assistive exoskeletons
                        have since been refined to offer comfort, usability, and customized assistance. Assistive
                        exoskeleton robots should have user-centered design, adjustable support, intuitive controls,
                        and safety features. They are designed to augment the user's strength, mobility, and endurance,
                        enabling them to perform daily tasks more easily.

                        <p>Assistive exoskeleton robots find applications in various contexts, including:
                        <p>● Enhanced mobility for individuals with spinal cord injuries or musculoskeletal
                        disorders.
                        <p>● Assistance for individuals with mobility challenges in occupational or domestic
                        settings.
                        <p>● Support for aging populations, promoting independence and reducing the risk of falls.

                        <p>Examples of assistive exoskeleton robots include the HAL (Hybrid Assistive Limb -left),
                        designed to provide lower limb support for various mobility impairments, and the ReWalk
                        (right), an exoskeleton enabling individuals with spinal cord injuries to walk.

                        <h6 className = "font-bold"> Industrial settings</h6>
                        <p>Exoskeleton robots can be found in industrial settings by assisting workers in physically
                        demanding tasks and reducing the risk of musculoskeletal injuries. In addition, these aim to
                        enhance worker safety and productivity. Industrial exoskeletons have since been developed to
                        provide ergonomic support, reduce fatigue, and increase efficiency. One of the earliest robotic
                        exoskeleton designs for industrial purposes was an apparatus developed by Russian engineer
                        Nocholas Yagn around the 1890s. This machine was designed for the military with the
                        intention of enhancing the user's movements, like running and jumping. Industrial exoskeleton
                        robots possess characteristics such as robust construction, force sensing, torque assistance, and
                        ease of integration with existing workflows. They are designed to augment the physical
                        capabilities of workers, enabling them to handle heavy loads and perform repetitive tasks with
                        reduced strain.
                        <p>Industrial exoskeleton robots find applications in various industrial sectors, including:
                        <p>● Manufacturing, where exoskeletons support workers in assembly line operations or
                        lifting heavy objects.
                        <p>● Warehousing and logistics, aiding workers in handling and transporting heavy
                        packages.

                        <p>● Construction, where exoskeletons reduce physical strain during tasks such as overhead
                        work or heavy lifting.
                        <p>Examples of industrial exoskeleton robots include the Hyundai Vest Exoskeleton (left),
                        designed for assembly line workers, and the Laevo exoskeleton (right), used in logistics and
                        manual handling tasks.

                        </p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p>

                        <h5 className = 'subtitle font-bold text-darkblue'> Bio-inspired Robots </h5>

                        <p>
                        Bio-inspired robots take inspiration from natural organisms and biological systems to mimic their
                            structures, mechanisms, and behaviors. The concept of bio-inspired robotics emerged in the early

                            2000s, driven by the desire to harness the efficiency and adaptability of natural systems. Bio-
                            inspired robots have since been developed to mimic various organisms and exploit their unique

                            capabilities. Bio-inspired robots possess characteristics such as biomimicry, adaptive locomotion,
                            sensory perception, and energy efficiency. They are designed to replicate specific biological
                            features or behaviors, enabling them to navigate complex environments or perform specialized
                            tasks.
                            <p>Bio-inspired robots find applications in various domains, including:
                            <p>● Exploration and surveillance in challenging environments, such as aerial, underwater, or
                            terrestrial terrains.
                            <p>● Search and rescue operations, where robots can navigate rubble or hazardous areas.
                            <p>● Environmental monitoring, mimicking animal behaviors to collect data in natural habitats.
                            Examples of bio-inspired robots include the Festo SmartBird, which mimics the flight of a seagull,
                            and the BionicAnts, which replicate the cooperative behavior of ants to perform tasks

                            <h6 className = "font-bold"> Swarm robotics </h6>
                            <p>Swarm robots are a fascinating area of robotics that involves the coordination and collaboration
                            of multiple robots working together as a collective. The concept of swarm robotics emerged in
                            the late 1980s, inspired by the collective behaviors observed in natural swarms such as ants
                            and bees. Over the years, swarm robots have been studied and developed to exhibit cooperative
                            behaviors and perform complex tasks. Swarm robots have to be decentralized, self-organized,
                            cooperative, and scalable. They are designed to interact with each other, coordinate their
                            actions, and collectively accomplish tasks that are challenging for individual robots.
                            <p>Swarm robots find applications in various domains, including:
                            <p>● Search and rescue missions, where multiple robots collaborate to explore and locate
                            targets in complex environments.
                            <p>● Environmental monitoring, where swarm robots can cover large areas and collect data
                            collaboratively.
                            <p>● Construction and assembly tasks, where swarm robots work together to build structures
                            or perform complex operations.
                            <p>Examples of swarm robots include Kilobots (left), a swarm of small robots designed for
                            research purposes, and the Aquatic Swarm Robots (AquaSwarm) - right, which collaboratively
                            perform underwater tasks such as mapping or environmental monitoring.
                        </p></p></p></p></p></p></p></p></p></p></p>
















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
