import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import img1 from '../../assets/images/lesson2-1.jpg';


const Lesson4 = () => {
    return (

        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid" id="top-section">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="lesson-title font-bold text-darkblue">Lesson 4: Sensors and Perception</h1>
                            <h6 className="lesson-subtitle text-darkblue">Students will be able to define perception and understand its important in robotics, understand how robots are able to 'see' the world and how that is used in the field of robotics </h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    <Container maxWidth="md">
                     <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                            This lesson is designed to help students understand how a robot is able to see the world. Robots are able to gather vast quantities and kinds of information depending on their purpose and hardware, 
                            this means that communicating to different robots will depend on what information they have to work with. Getting your robot to move and navigate a given environment is one of the first real steps we will make in our robotics 
                            journey 
                            
                        </p>

                        <h2 className="subtitle font-bold text-darkblue">What will you learn?</h2>
                        <ul>
                            <li>What is Perception?</li>
                            <li>Why it is important in mobile robotics.</li>
                            <li>Types of sensors and different real sensors in mobile robotics</li>
                            <li>Importance of sensors in robotics</li>
                            
                        </ul>
                        <p>
                            By the end of this section, you will have a good understanding of different kinds of sensors used in robotics, why those sensors are used, and why they are important. Having a better understanding of how robots gather information about their environment will aid students in instructing their robot to move and accomplish tasks.
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

                        <p>
                            <h2 className = "title font-bold text-darkblue">Perception</h2>

                            <p>Perception is the way that people understand and make sense of the sensory information they get
                            from their surroundings. It has to do with how we take in, organize, and make sense of feelings
                            like sight, sound, touch, taste, and smell. This lets us make sense of the world around us. It is a
                            complicated mental process that includes both bottom-up and top-down processing. In bottom-up
                            processing, sensory information is analyzed and combined to form perceptions. In top-down
                            processing, existing knowledge, expectations, and context affect how sensory input is
                            interpreted. Perception can be different for each person because of things like personality,
                            cultural background, personal situations, and cognitive biases. It is not a straight depiction of
                            reality. Instead, it is a person's subjective view of reality. Perception is an important part of our
                            daily lives because it helps us find our way around, recognize objects and people, figure out what
                            other people are trying to tell us, and make choices. It changes how we think, feel, and act, which
                            changes how we connect with others and how we see the world.</p>

                            <h5 className = "lesson-subtitle text-bold text-darkblue"> Perception in Mobile Robots </h5>

                            <p>Mobile robots require the ability to perceive their surroundings and make decisions based on
                            visual information. This enables them to navigate safely through unknown or changing
                            environments. Ultrasonic sonar sensors and eye sensors are commonly used by robots to gather
                            information about the world. Sonar sensors are employed to avoid collisions with objects, while
                            eye sensors help determine the robot's position in relation to its surroundings. The former ensures
                            the robot's safety in unmapped or dynamic areas, while the latter compensates for inaccuracies
                            that may arise over time in the robot's internal location sensors. Perception is an essential aspect
                            for mobile robots as it allows them to collect data about the environment through sensors such as
                            cameras, LiDAR, and ultrasonic sensors. 
                            <p>By utilizing perception algorithms, mobile robots can
                            create a comprehensive understanding of the environment, detect and identify objects, and
                            accurately determine their own location. This information is critical for effective path planning,
                            obstacle avoidance, and navigation. Moreover, perception plays a significant role in facilitating
                            human-robot interaction, enabling the robot to detect and interpret human presence, gestures, and
                            intentions. Ultimately, perception empowers mobile robots to autonomously perceive and
                            comprehend their surroundings, enabling them to navigate, interact, and execute tasks efficiently.
                            Perception is vital in mobile robotics for several reasons:</p></p>

                            <ul>
                            <li> Environmental Awareness: Perception allows mobile robots to gather information about
                            their surroundings, such as objects, obstacles, terrain, and landmarks. By perceiving the
                            environment, robots can build an understanding of the world, which is crucial for
                            navigation, path planning, and obstacle avoidance.</li>
                            <li> Decision-Making: Perception provides the necessary input for mobile robots to make
                            informed decisions. By perceiving and interpreting sensory data, robots can analyze their
                            surroundings, identify relevant objects or features, and determine appropriate actions or
                            behaviors.</li>
                            <li>Object Detection and Recognition: Perception enables mobile robots to detect and
                            recognize objects in their environment. This capability is essential for various robotic
                            tasks, such as picking and placing objects, inspecting and monitoring specific targets, or
                            interacting with the environment and humans.</li> 
                            <li> Localization and Mapping: Perception helps mobile robots determine their position and
                            orientation in the environment. By combining sensor data with perception algorithms,
                            robots can estimate their location accurately and build maps of the environment. This
                            information is crucial for navigation, exploration, and efficient task execution.</li>
                            <li> Safety and Collision Avoidance: Perception allows mobile robots to detect and perceive
                            obstacles, hazards, or potential dangers in their surroundings. By perceiving and
                            analyzing the sensory data, robots can plan safe trajectories, avoid collisions, and
                            navigate effectively, ensuring their own safety and the safety of the environment and
                            humans.</li>
                            <li> Human-Robot Interaction: Perception plays a critical role in facilitating natural and
                            intuitive interactions between mobile robots and humans. By perceiving and interpreting
                            human presence, gestures, and intentions, robots can understand and respond
                            appropriately, enhancing collaboration and cooperation between robots and humans.</li>

                            </ul>

                            <h5 className = "lesson-subtitle text-bold text-darkblue">Sensor</h5>

                            <p>A sensor is a device that detects and responds to a physical stimulus or change in the
                            environment and converts it into an electrical, mechanical, or optical signal. They are used in
                            various applications, enabling machines to perceive and interact with their environment and
                            providing valuable data for decision-making and control.
                            <p>Perception and sensors are intertwined in mobile robotics. Sensors act as the primary source of
                            data for perception, providing information about the environment. Perception algorithms analyze
                            and interpret this sensor data, enabling mobile robots to understand the world, make informed
                            decisions, and interact effectively with their surroundings. The integration of sensors and the
                            application of perception algorithms are crucial for enabling mobile robots to perceive and
                            interact autonomously in complex real-world environments.</p></p>

                            <h5 className = "lesson-subtitle text-bold text-darkblue"> Types of Sensors</h5>
                            <p>There are many different types of sensors used in robotics to provide feedback to the robot about
                            its environment. Here are some examples of commonly used sensors in robotics:</p>
                            <h6 className = "lesson-subtitle">Proximity Sensors:</h6>
                            <div className= "white-space-filler">...</div>

                            <p>Proximity sensors are devices that detect the presence or absence of objects without physical
                            contact. These sensors are used to detect the presence of objects nearby. They work based on
                            different principles, such as electromagnetic fields, capacitance, sound waves, light beams, or
                            magnetic fields. Some examples of proximity sensors:
                            <div className= "white-space-filler">...</div>
                            <p>● Ultrasonic Proximity Sensors: Ultrasonic sensors emit high-frequency sound waves and
                            measure the time it takes for the waves to bounce back after hitting an object. By calculating
                            the time delay, the sensor can determine the distance to the object. For instance, in parking
                            assist systems, ultrasonic proximity sensors detect obstacles near the vehicle and provide
                            distance feedback to the driver to assist in parking.
                            <p>● Inductive Proximity Sensors: These sensors emit an electromagnetic field and detect changes
                            in the field caused by the presence of metallic objects. When a metal object enters the
                            sensor's range, it disrupts the electromagnetic field, leading to a change in the sensor's output.
                            For example, in manufacturing plants, inductive proximity sensors can detect the presence of
                            metal parts on a conveyor belt, allowing for automated sorting and assembly processes.
                            <p>● Capacitive Proximity Sensors: Capacitive sensors detect the presence of both metallic and
                            non-metallic objects by measuring changes in capacitance. They generate an electric field
                            and sense the changes in capacitance when an object enters the field. This change triggers the
                            sensor's output. Capacitive proximity sensors are commonly used in touchless interfaces,
                            such as touchscreens, where the proximity of a finger or stylus is detected without physical
                            contact.
                            <p>● Magnetic Proximity Sensors: Magnetic sensors detect changes in magnetic fields caused by
                            the presence of ferrous or magnetized objects. When a magnetic object enters the sensor's
                            range, it alters the magnetic field, leading to a change in the sensor's output. Magnetic
                            proximity sensors are widely used in security systems, such as door/window sensors, where
                            the presence of a magnetized object near the sensor indicates unauthorized entry.
                            <p>● Photoelectric Proximity Sensors: These sensors use light beams to detect the presence or
                            absence of objects. They emit a light beam and measure the amount of reflected or
                            interrupted light. If the light beam is interrupted by an object, it triggers the sensor's output.
                            Photoelectric proximity sensors are commonly used in automatic doors, where the
                            interruption of the light beam by a person triggers the door to open.</p></p></p></p></p></p>
                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Vision Sensors:</h6>
                            <div className= "white-space-filler">...</div>

                            <p>Vision sensors, also known as vision systems or vision cameras, are devices that use image
                            processing techniques to capture, analyze, and interpret visual information from their

                            surroundings. These sensors are commonly used in robotics, automation, quality control, and
                            inspection applications. These sensors are used to capture images of the environment and provide
                            information about the position and orientation of objects.
                            <div className= "white-space-filler">...</div>
                            <p>● Object Detection and Recognition: Vision sensors enable robots to identify and categorize
                            objects in their surroundings. This capability is useful for applications like picking and
                            placing objects in manufacturing, warehouse automation, and even in everyday scenarios like
                            robotic vacuum cleaners recognizing obstacles.
                            <p>● Obstacle Avoidance: Vision sensors play a critical role in obstacle detection and avoidance.
                            By analyzing visual data, robots can identify obstacles in their path and plan alternative
                            routes to avoid collisions. This is essential for safe and efficient navigation in dynamic
                            environments.
                            <p>● Object Sorting and Packaging: Vision sensors are employed in sorting systems to identify
                            and sort objects based on specific characteristics such as size, shape, color, or barcode
                            reading. In logistics and packaging industries, vision sensors can accurately identify products
                            and guide them to the appropriate locations or packaging processes.
                            <p>● Robot Guidance and Positioning: Vision sensors play a crucial role in robotic systems by
                            providing visual feedback for guidance, positioning, and manipulation. They can help robots

                            locate objects, recognize their orientation, and navigate complex environments. Vision-
                            guided robots are used in various industries, including manufacturing, logistics, and

                            healthcare.
                            <p>● Gesture and Human-Machine Interaction: Vision sensors can enable gesture recognition and
                            human-machine interaction in applications such as gaming, virtual reality, or smart devices.
                            By capturing and interpreting hand movements or facial expressions, vision sensors can
                            provide intuitive and immersive user experiences.
                            <p>● Autonomous Vehicles: In the context of autonomous vehicles, vision sensors such as cameras,
                            LiDAR, and radar help cars perceive the road, pedestrians, other vehicles, and traffic signs.
                            This perception is essential for making driving decisions in real time, enabling safe
                            navigation and adherence to traffic rules.
                            <p>● Manipulation and Grasping: Cameras and depth sensors aid robots in accurately assessing
                            the size, shape, and position of objects. This information is crucial for effective grasping and
                            manipulation tasks, such as picking up objects of different shapes and sizes.
                            <p>● Augmented Reality and Virtual Reality: Vision sensors are also used in augmented reality
                            (AR) and virtual reality (VR) applications. Cameras capture the real world, and with the help
                            of computer vision, digital elements can be overlaid onto the real environment in AR or used
                            to create immersive virtual environments in VR.</p></p></p></p></p></p></p></p></p>
                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Tactile Sensors:</h6>
                            <div className= "white-space-filler">...</div>


                            <p>Tactile sensors, also known as touch sensors, are devices that detect and measure physical
                            contact or pressure. They are designed to mimic the sense of touch in humans and provide
                            feedback about the physical interaction between the sensor and its environment. Tactile sensors
                            find applications in robotics, human-robot interaction, prosthetics, and various other fields.
                            <div className= "white-space-filler">...</div>


                            <p>These sensors are used to detect physical contact or pressure. Examples include force sensors,
                            pressure sensors, and touch sensors.
                            <p>● Robotic Grasping and Manipulation: Tactile sensors are used in robotic grippers and hands
                            to provide feedback during object grasping and manipulation. By detecting the applied force
                            and pressure, the sensors enable robots to adjust their grip and exert appropriate forces for
                            safe and precise handling of objects.
                            <p>● Prosthetics and Assistive Devices: Tactile sensors are integrated into prosthetic limbs and
                            assistive devices to provide users with sensory feedback. By sensing pressure and contact,
                            these sensors allow individuals to perceive the force applied by the prosthetic or the object
                            they are interacting with, enhancing their control and sense of touch.
                            <p>● Human-Robot Interaction: Tactile sensors enable safe and intuitive interaction between
                            humans and robots. For example, in collaborative robots (cobots), tactile sensors can detect
                            contact with human operators and trigger the robot to slow down or stop to prevent collisions
                            and ensure safety.</p></p></p></p></p>
                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Motion Sensors:</h6>
                            <div className= "white-space-filler">...</div>

                            <p>Motion sensors, also known as motion detectors, are devices that detect movement or changes in
                            an object's position within their sensing range. They are widely used in security systems,
                            automation, gaming, and various other applications. Motion sensors work based on different
                            technologies, including infrared, ultrasonic, microwave, and optical sensing methods. Motion
                            sensors are used to detect movement and provide information about the speed and direction of
                            motion. Motion sensors detect motion by measuring changes in their surrounding environment.
                            <div className= "white-space-filler">...</div>

                            <p>They can detect the presence, absence, or movement of objects within their range. Here are some
                            examples of motion sensor applications:
                            <p>● Security Systems: Motion sensors are commonly used in security systems, such as burglar
                            alarms or surveillance systems. Infrared motion sensors, for example, can detect the heat
                            emitted by a moving person or object and trigger an alarm or activate a camera to capture the
                            activity. These sensors are used to detect unauthorized entry, intrusions, or suspicious
                            movements.
                            <p>● Home Automation: Motion sensors are utilized in home automation systems to enable various
                            functions. For example, they can activate or control devices such as automatic doors, HVAC
                            systems, or security cameras based on detected motion or occupancy. Motion sensors can
                            also be integrated with voice assistants to trigger specific actions upon detecting movement.
                            <p>● Gaming and Virtual Reality: Motion sensors play a vital role in gaming and virtual reality
                            experiences. They can track the movement of players or objects and translate them into

                            corresponding actions within the game or virtual environment. Examples include motion-
                            based controllers for gaming consoles or full-body motion tracking systems for immersive

                            virtual reality experiences.
                            <p>● Automatic Door Openers: Motion sensors are used in automatic door openers found in public
                            buildings, hospitals, or shopping centers. They detect the presence of individuals approaching
                            the door and trigger the door to open automatically, providing convenience and accessibility.</p></p></p></p></p></p>
                            <div className= "white-space-filler">...</div>


                            <h6 className = "lesson-subtitle">Temperature Sensors:</h6>
                            <div className= "white-space-filler">...</div>

                            Temperature sensors are devices that measure and detect changes in temperature. They are
                            commonly used in various industries and applications to monitor and control temperature
                            conditions. Temperature sensors can be based on different principles and technologies, including
                            thermocouples, resistance temperature detectors (RTDs), thermistors, and infrared sensors. These
                            sensors are used to detect temperature changes in Thermocouples. They consist of two different
                            metal wires joined at one end to form a junction. When there is a temperature difference between
                            the junction and the other end, it generates a voltage that is proportional to the temperature
                            difference. Thermocouples are widely used in industrial applications due to their ruggedness,
                            wide temperature range, and fast response time.
                            <div className= "white-space-filler">...</div>

                            <p>● Resistance Temperature Detectors (RTDs): RTDs are temperature sensors that rely on the
                            change in electrical resistance of metals with temperature. They are typically made of
                            platinum and exhibit a predictable change in resistance with temperature. RTDs offer high
                            accuracy, stability, and linearity over a wide temperature range. They are commonly used in
                            laboratory equipment, HVAC systems, and industrial processes.
                            <p>● Thermistors: Thermistors are temperature sensors that use the change in electrical resistance
                            of semiconductor materials with temperature. They are typically made of ceramics or
                            polymers and exhibit a non-linear resistance-temperature relationship. Thermistors offer high
                            sensitivity and fast response time. They find applications in temperature measurement,
                            control systems, and medical devices.
                            <p>● Infrared Sensors: Infrared temperature sensors, also known as non-contact or pyrometers,
                            measure temperature based on the thermal radiation emitted by objects. They detect infrared
                            energy and convert it into temperature readings. Infrared sensors are commonly used in
                            industrial processes, automotive applications, and temperature measurement of objects that
                            are difficult to access or in motion.</p></p></p>

                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Gas Sensors:</h6>
                            <div className= "white-space-filler">...</div>
                            <p>Gas sensors, also known as gas detectors or gas analyzers, are devices that detect and measure
                            the presence and concentration of specific gases in the environment. They are utilized in a wide
                            range of applications, including industrial safety, environmental monitoring, indoor air quality
                            assessment, and gas leakage detection. Gas sensors can be based on various sensing
                            technologies, such as electrochemical, semiconductor, infrared, or catalytic methods. Gas sensors
                            are used to detect the presence of specific gases in the environment. 
                            <div className= "white-space-filler">...</div>
                            <p>Examples include carbon
                            monoxide sensors, oxygen sensors, and hydrogen sensors.
                            <p>● Electrochemical Gas Sensors: Electrochemical gas sensors use a chemical reaction between
                            the target gas and an electrode to measure gas concentration. The gas diffuses through a
                            porous membrane and reacts with an electrolyte solution, generating an electrical signal
                            proportional to the gas concentration. Electrochemical sensors offer high sensitivity,
                            selectivity, and accuracy. They are commonly used for monitoring toxic gases, such as
                            carbon monoxide (CO), hydrogen sulfide (H2S), or ozone (O3).

                            <p>● Infrared Gas Sensors: Infrared gas sensors detect gases by measuring the absorption of
                            infrared radiation at specific wavelengths. Each gas has a unique absorption pattern, allowing
                            for selective detection. Infrared sensors are commonly used for measuring gases such as
                            carbon dioxide (CO2), methane (CH4), or sulfur hexafluoride (SF6). They offer high
                            accuracy, stability, and are not affected by humidity or oxygen interference.
                            <p>● Catalytic Gas Sensors: Catalytic gas sensors utilize a heated catalyst to promote a chemical
                            reaction between the target gas and oxygen. The reaction generates heat, which is measured
                            to determine gas concentration. Catalytic sensors are commonly used for detecting
                            flammable gases in industrial environments. They offer fast response times and are suitable
                            for high-temperature applications.</p></p></p></p></p>
                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Light Sensors:</h6>
                            <div className= "white-space-filler">...</div>
                            <p>Light sensors, also known as photodetectors or photo sensors, are devices that detect and
                            measure light intensity or the presence of light. They convert light energy into an electrical signal
                            that can be used for various purposes. Light sensors are utilized in a wide range of applications,
                            including ambient light sensing, optical communication, photography, robotics, and automatic
                            lighting control. These sensors are used to detect changes in light intensity or color. Examples
                            include photodiodes, phototransistors, and color sensors.
                            <div className= "white-space-filler">...</div>
                            <p>Light sensors enable automatic control, energy efficiency, and accurate measurements in various
                            applications. Whether its adjusting screen brightness based on ambient light, detecting motion, or
                            converting sunlight into electricity, light sensors play a vital role in enhancing functionality,
                            improving efficiency, and optimizing performance in numerous devices and systems.
                            <p>● Photodiodes: Photodiodes are the most common type of light sensors. They are
                            semiconductor devices that generate an electric current when exposed to light. Photodiodes
                            are made of a photosensitive material that absorbs photons and releases electrons, resulting in
                            a flow of current. They are used in applications such as ambient light sensing in smartphones,
                            optical communication systems, and light metering in cameras.
                            <p>● Phototransistors: Phototransistors are light sensors that combine the functions of a
                            photodiode and a transistor. They have a higher sensitivity to light compared to photodiodes
                            and provide a current amplification capability. Phototransistors are often used in applications
                            that require higher levels of light detection, such as light barriers, motion detection, or
                            proximity sensing.
                            <p>● Photovoltaic Cells: Photovoltaic cells, also known as solar cells, convert light energy directly
                            into electrical energy through the photovoltaic effect. They are widely used for solar power
                            generation, where light energy is converted into electricity. Photovoltaic cells are used in
                            solar panels to capture sunlight and generate electrical power.
                            <p>● Light-Emitting Diodes (LEDs): While LEDs are primarily used as light sources, they can also
                            be used as light sensors. When reverse-biased, LEDs can detect light and generate a small
                            current. This property is sometimes utilized in applications where a separate light sensor is
                            not available or when cost constraints are a factor.

                            <p>● Light-dependent Resistors (LDRs): LDRs, also known as photoresistors, are passive light
                            sensors that change their resistance based on the intensity of light. The resistance of an LDR
                            decreases with increasing light intensity and vice versa. They are commonly used in
                            applications such as automatic lighting control, solar-powered devices, or burglar alarm
                            systems.
                            <p>● Ambient Light Sensors: Ambient light sensors are specialized light sensors that measure the
                            intensity of light in the surrounding environment. They are commonly used in electronic
                            devices like smartphones, tablets, or laptops to automatically adjust the screen brightness
                            based on the ambient light conditions. Ambient light sensors enhance user comfort, save
                            energy, and optimize screen visibility.</p></p></p></p></p></p></p></p>
                            <div className= "white-space-filler">...</div>

                            <h6 className = "lesson-subtitle">Range Sensors:</h6>
                            <div className= "white-space-filler">...</div>

                            <p>Range sensors, also known as distance sensors or proximity sensors, are devices that measure the
                            distance between the sensor and an object or surface. They are commonly used in robotics,
                            automation, and navigation systems to detect obstacles, perform object recognition, or enable
                            precise positioning. Range sensors utilize various technologies to measure distance, including
                            ultrasound, laser, infrared, and time-of-flight methods. These sensors are used to measure the
                            distance between the sensor and an object or surface in its environment. 
                            <div className= "white-space-filler">...</div>
                            <p>Examples include
                            ultrasonic sensors, laser rangefinders, time-of-flight sensors, and infrared sensors etc.
                            <p>● Ultrasonic Range Sensors: Ultrasonic range sensors emit high-frequency sound waves and
                            measure the time it takes for the sound waves to bounce back after hitting an object. By
                            knowing the speed of sound, the sensor can calculate the distance to the object. Ultrasonic
                            sensors are commonly used in robotics for obstacle avoidance, object detection, and distance
                            measurement.
                            <p>● Laser Range Finders: Laser range finders use laser beams to measure the distance to an
                            object. They emit a laser pulse and measure the time it takes for the pulse to reflect off the
                            object and return to the sensor. Laser range finders provide high accuracy and are used in
                            applications such as surveying, autonomous vehicles, and industrial automation.
                            <p>● Infrared Range Sensors: Infrared range sensors use infrared light to measure distance. They
                            emit infrared light and measure the time it takes for the light to reflect off an object and
                            return to the sensor. Infrared sensors are commonly used in proximity detection, gesture
                            recognition, and object tracking applications.
                            <p>● Time-of-Flight (ToF) Sensors: Time-of-flight sensors measure distance by measuring the
                            time it takes for light to travel to an object and back to the sensor. They emit a pulse of light,

                            typically using infrared or laser technology, and calculate the distance based on the time-of-
                            flight principle. ToF sensors are used in various applications, including robotics, augmented

                            reality, and depth sensing for cameras.

                            <p>● Capacitive Range Sensors: Capacitive range sensors measure the distance to an object based
                            on changes in capacitance. They emit an electromagnetic field and detect changes in the field
                            caused by the presence of an object. Capacitive sensors are commonly used for touch sensing
                            applications, but they can also be adapted for distance measurement.
                            Range sensors enable robots and autonomous systems to perceive their environment and make
                            informed decisions based on the detected distances. They are essential for navigation, collision
                            avoidance, and object manipulation. Range sensors find applications in robotics, industrial
                            automation, self-driving cars, and many other fields where accurate distance measurement is
                            required for safe and efficient operations.
                            <p>Overall, sensors are critical components in robotics that enable the robot to interact with its
                            environment and perform tasks autonomously.</p></p></p></p></p></p></p></p>

                            <div className= "white-space-filler">...</div>
                            <div className= "white-space-filler">...</div>


                            <h5 className = "lesson-subtitle text-bold text-darkblue">Importance of Sensors in Robotics</h5>

                            <p>Sensors play a critical role in robotics by providing robots with the ability to perceive and
                            interact with their environment. Here are some examples of how sensors are used in robotics and
                            why they are important:
                            <p>● Obstacle avoidance in autonomous vehicles - Autonomous vehicles rely on a variety of
                            sensors, including cameras, lidar, and radar, to detect obstacles in their path and adjust
                            their course accordingly. Without these sensors, autonomous vehicles would not be able
                            to safely navigate on roads, which could result in accidents and fatalities.
                            <p>● Object detection in industrial automation - In industrial automation, sensors are used to
                            detect the presence and location of objects in a factory environment. Robots use these
                            sensors to pick up and move objects without colliding with other objects or people. This
                            reduces the risk of accidents and injuries in the workplace and improves efficiency.
                            <p>● Feedback control in medical robotics - Sensors are used in medical robotics to provide
                            feedback control during surgical procedures. For example, haptic sensors can be used to
                            provide surgeons with a sense of touch while performing minimally invasive surgeries,
                            allowing them to feel the tissues they are working on. This helps to improve surgical
                            accuracy and reduce the risk of complications.
                            <p>● Navigation in drones - Drones rely on sensors such as GPS and altimeters to maintain
                            their position and altitude. In addition, they use sensors such as accelerometers and
                            gyroscopes to adjust their orientation and stabilize their flight. Without these sensors,
                            drones would not be able to maintain a stable position or avoid obstacles during flight.
                            Overall, sensors are crucial to the functioning of robots in a wide range of applications, from
                            autonomous vehicles to medical robotics. They enable robots to perceive and interact with their
                            environment, making them safer and more efficient.</p></p></p></p></p>
                        </p>

                        </div>

                        <div className="static-slider-1">
                            <Row className="justify-content-between">
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/Lesson3#top-section">
                                        <Button color="darkblue" className = "border-button">Previous</Button>
                                    </Link>
                                </Col>
                                <Col md="6" className="align-self-center text-center">
                                    <h1 className="title"></h1>
                                    <h6 className="subtitle op-8"></h6>
                                </Col>
                                <Col md="2" className="align-self-center text-center">
                                    <Link to="/Lesson5#top-section">
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
						    <li>Given a laser scanner with an angular resolution of 0.01 rad and a maximum range of 5.6 meters,
                            what is the minimum range d a robot needs to have from an object of 1cm width to definitely
                            sense it, i.e., hit it with at least one of its rays? You can approximate the distance between two
                            rays with the arc length.</li>                                    
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

Lesson4.propTypes = {
    classes: PropTypes.object
};

export default Lesson4;
