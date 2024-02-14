import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { Row, Col, Container, Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";


const Lesson5 = () => {
    return (

        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Container>
                    <Row className="justify-content-center">
                        <Col md="12" className="text-center">
                            <h1 className="lesson-title font-bold text-darkblue">Lesson 5: Locomotion </h1>
                            <h6 className="lesson-subtitle text-darkblue">Students will be able to </h6>
                            
                        </Col>
                    </Row>
                    </Container>
                    <Container maxWidth="md">
                     <div style={{ padding: '20px', border: '5px solid #ddd', borderRadius: '15px', marginBottom: '20px' }}>
                     <h2 className="subtitle font-bold text-darkblue">Course Overview</h2>
                        <p>
                            
                        </p>

                        <h2 className="subtitle font-bold text-darkblue">What will you learn?</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p>
                            By the end of this section, you will 
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

                        Introduction
Locomotion is the ability to move from one place to another. Acts like crawling, running, walking,
etc. are included. Actions occur in the wings, limbs, and flagella throughout this process. A person
or object can move from one point to another through locomotion, which is directional movement.
This displacement process uses a significant amount of energy.
A mobile robot needs locomotion systems that allow it to freely move about its surroundings. But
because there are so many different ways a robot may walk, choosing its locomotion strategy is a
crucial part of designing a mobile robot. There are research robots in the lab that are capable of
walking, jumping, running, sliding, skating, swimming, flying, and of course, rolling. Most of
these systems for movement were influenced by their biological counterparts.

Figure: Locomotion Mechanism in Biological Systems (Source: Book)

Key Issues with Locomotion
Locomotion is the complement of manipulation. In manipulation, the robot arm stays in one place,
but by applying force to items in the area, it can move them. In locomotion, the environment is
fixed, and the robot moves by providing force to the environment. In both cases, the scientific base
is the study of actuators that create interaction forces and processes that create the desired
kinematic and dynamic attributes. Locomotion and manipulation thus share the same core issues
of stability, contact characteristics, and environmental type:
• Stability
o Number and Geometry of Contact Points:
More contact points generally provide more stability but may limit maneuverability.
The geometric configuration of these points also affects balance and the ability to
generate movement.
o Center of Gravity:
The placement of a robot's center of gravity (CoG) totally influences its stability. Lower
CoG helps to increase stability.
o Static & Dynamic Stability:
This refers to a robot's ability to maintain its balance while stationary (static stability)
or while in motion (dynamic stability). The design and control strategy should ensure
both types of stability. Static stability means that the robot is stable, with no need for
motion at every moment of time.
o Inclination of Terrain:
The slope of the surface can impact a robot's stability and the strategy it uses for
locomotion. It can also affect the points of contact and the center of gravity.

• Characteristics of Contact
o Contact Point/Path Size and Shape
The characteristics of the contact point/path, such as its size and shape, affect how the
robot interacts with the environment. This also impacts force distribution and friction
generation.
o Angle of Contact
The angle at which a robot makes contact with the environment affects the distribution
of forces and the robot's ability to generate movement.
o Friction
Friction between the robot and the environment is crucial for locomotion and
manipulation. It allows the robot to grip objects and the environment for effective
interaction and movement.

• Type of Environment
o Structure
Whether the environment is structured (like a factory floor) or unstructured (like a
natural terrain) impacts the approach to locomotion and manipulation. The latter often
demands more complex strategies.
o Medium (e.g., water, air, soft or hard ground)
The medium in which the robot operates (like air, water, or different types of ground)
influences its design and the actuators used. For example, a robot designed for aquatic
environments may employ propellers, while a terrestrial robot may use wheels or legs.

Importance of locomotion in mobile robotics
• Mobility: This is the primary reason for the development of locomotion in robotics. Mobile
robots are made to go from one place to another, do different jobs in different places, and work
in different settings. Robots can move around thanks to locomotion.
• Exploration and Mapping: Locomotion allows robots to explore unknown environments, map
the surroundings, and gather information about the terrain, objects, or features of interest. By
moving around, robots can learn a lot about their surroundings. This lets them plan routes,
avoid hurdles, and make smart choices.
• Environmental Interaction: Locomotion controls how a robot interacts with its surroundings.
Different movement systems are appropriate for various contexts. Wheeled locomotion, for
example, may be more suited to organized surroundings with flat surfaces, whereas legged
locomotion may be better suited to unstructured situations with uneven terrain.
• Versatility and adaptability: Mobile robots with locomotion mechanisms can adapt to a
variety of terrains and surroundings. They can move across a variety of surfaces, including
flat floors, uneven terrain, stairs, and even obstructions. This adaptability allows robots to be
used in a wide range of applications, including indoor and outdoor exploration, disaster
response, agriculture, and more.
• Task Efficiency: The method of movement has a significant impact on task execution
efficiency. A mobile robot in a warehouse, for example, could reach an item faster if it adopts
an efficient locomotion approach, saving time and increasing productivity.
• Sensor Data Collection: Locomotion enables robots to deliberately position themselves in
order to collect sensor data from various perspectives. Robots can capture various viewpoints
by moving around objects or surroundings, which can be useful for tasks such as 3D
reconstruction, object recognition, and tracking moving targets.

• Accessibility: Locomotion strategies can assist a robot in reaching places that are difficult or
impossible for people to reach, such as hazardous situations, narrow spaces, or remote sites.
• Energy Efficiency: The energy efficiency of various locomotion techniques varies. The
appropriate locomotion mechanism can help the robot last longer and consume less energy.
• Flexibility: Advanced movement skills allow robots to adapt to a wide range of tasks and
surroundings. A robot that can roll and fly, for example, can be beneficial in a variety of
situations.
• Multi-Robot Collaboration: Locomotion is critical for allowing several robots to collaborate
effectively. Robots can coordinate their operations, split tasks, and cover diverse regions
efficiently by moving independently. This collaboration has the potential to increase
productivity, speed up task completion, and improve overall system performance.

Different Types of Locomotion in Mobile
Robotics
In mobile robotics, there are various types of locomotion methods used to enable robots to move
and navigate their environments. Here are some common types:
Wheeled locomotion
This is one of the simplest and most widely used methods. Robots equipped with wheels can move
in a variety of directions, including forward, backward, and turning. Wheeled locomotion is
efficient on flat and smooth surfaces, such as floors, roads, or sidewalks.
Tracked locomotion
Tracked robots use continuous tracks or treads instead of wheels. This method provides improved
traction and stability over uneven or rough terrains, making them suitable for outdoor applications
or challenging environments like construction sites or off-road exploration.
Legged locomotion
Legged robots mimic the movement of animals and insects by using legs for propulsion. They can
traverse various terrains, including stairs, rocks, or even vertical surfaces. Legged locomotion
offers enhanced adaptability and maneuverability but can be more complex to control and design
compared to wheeled or tracked robots.

Flying locomotion
Aerial robots, such as drones, use flying locomotion to navigate in three-dimensional spaces. They
typically employ rotors or wings for lift and propulsion. Flying locomotion enables robots to
overcome obstacles on the ground and access hard-to-reach areas. Drones are commonly used for
aerial photography, surveillance, delivery, and search and rescue operations.
Swimming locomotion
Underwater robots or autonomous underwater vehicles (AUVs) use swimming locomotion for
marine exploration or underwater tasks. They are equipped with fins, propellers, or flippers to
move through water. Swimming locomotion is advantageous for marine research, oceanography,
pipeline inspection, and underwater mapping.
Snake-like locomotion
Snake robots, also known as serpentine robots, imitate the slithering motion of snakes. They
consist of numerous articulated segments that can move independently, enabling them to navigate
through tight spaces or complex environments. Snake-like locomotion is useful for search and
rescue operations in disaster-stricken areas or exploration of narrow passages.
Hybrid locomotion
Some robots combine multiple locomotion methods to achieve versatility in different
environments. For example, a robot might have wheels for efficient movement on flat surfaces but
also feature extendable legs or tracks for navigating rough terrains or overcoming obstacles.
Each locomotion method has its advantages and limitations, and the choice of locomotion depends
on the specific requirements of the robot's intended tasks and operating environment.

Wheeled Locomotion
Wheeled locomotion is the most common locomotion method in man-made vehicles, so it is not
surprising that it is so often used in mobile robotics. Reasons for this are the easy mechanical
implementation of the wheel, there is no need for balance control if the vehicle has at least three
or in some cases two wheels and wheeled locomotion is relatively power efficient, even at high

speed. Wheeled locomotion has a number of advantages, including efficiency, speed, stability, and
ease of control. Wheels may disperse a vehicle's or object's weight over a wider surface area,
reducing friction and allowing for smoother mobility.

Despite its benefits, wheeled mobility has several drawbacks. It may struggle in some terrains,
such as hard or uneven surfaces, stairs, or obstructions. Furthermore, wheels are prone to punctures
or breakage, necessitating maintenance and replacement on a regular basis. The issues of wheeled
robots differ from those of legged robots, stability is not as severe as it is in legged locomotion,
but there are some others. The focus of wheeled robots research is on traction and stability in
uneven terrain, as well as maneuverability and control.

Wheeled Locomotion Types
There are different types of wheeled locomotion systems. They are listed below. Each locomotion
system is unique, has some advantages and disadvantages.

● Differential Drive
● Car Type Drive
● Skid Steer Drive
● Articulated Drive
● Synchronous Drive
● Pivot Drive
● Dual Differential Drive

Source
Differential Drive
This is the most common and extensively used type of drive for wheeled robots since it is the
simplest and easiest to implement. There are two motors, each with its own movement. In the first
two diagrams above, both motors are turned in the same direction of motion, and the robot goes
forward or backward. In the last two diagrams, the two motors rotate so that their motions oppose
one other, resulting in a coupling and a turning effect.

Car Type
The most typical drive in the actual world is this one, but not in the robotics world. The robot
should travel in this direction according to this set of wheels, whereas movement is caused by
another set of wheels. The front wheels give rotational motion, whilst the rear wheels offer
translating motion. Even though the two actions are separate, the interlinking of them leads to
increased accuracy.

Skid Steer Drive
It is closely related to the differential drive system. Here, all of one side's motors are connected as
a single unit to maximize traction (think tanks). The center motors are the only ones linked. Due
to the center motors' force, the other motors also move. The wheels slide across the ground when
turning. Due to the two motors' different motions, turning may happen.

Articulated Drive
The robot's body or frame is bent to make it rotate. The wheels are what make it move forward
and backward. One motor is needed to move the wheels, and the other is needed to change the
angle of the linear actuator.

Synchronous Drive
In this case, the robot can move in any direction without having to change its position. One set of
motors is needed to move the wheels, and the other set is needed to change their direction. The
picture above shows this very clearly. It works at the same time as everything else and is more
accurate. It's hard to put together, but easy to use.

Pivot Drive
This is a unique way to move something. There is a four-wheeled chassis that gives the car movement in
one direction, and a rotating base that gives the car movement in the other direction. So, it moves in an
exact straight line. While turning, the raised platform is lowered enough to lift the chassis, turn it to the
position you want, and then raise it back up to keep the chassis on the ground. This can be done with one
or two motors, based on how complicated the job is and what is needed.

Dual Differential Drive
This is like differential drive, but it uses special gear systems that make it easier to move in a
straight line and turn on the spot. So, this was all about the different ways to move on wheels. In
the next post, we'll talk in general terms about the different kinds of controllers.

Wheel Design
There are four main wheel design classes that are being followed.

Figure: The four basic wheel types. (a) Standard wheel: two degrees of freedom; rotation around the
(motorized) wheel axle and the contact point. (b) castor wheel: two degrees of freedom; rotation around
an offset steering joint. (c) Swedish wheel: three degrees of freedom; rotation around the (motorized) wheel
axle, around the rollers, and around the contact point. (d) Ball or spherical wheel: realization technically
difficult. (Source: Book)
More Details: https://www.sciencedirect.com/science/article/pii/S0094114X20302056

The four designs differ from their working methods and choice of wheel type depends on the
working methods for mobile robotics.
The main benefits of the standard and the castor wheel are how easy they are to set up, how much
weight they can hold, and how well they can handle the uneven ground. But these wheels aren't
naturally able to go in any direction. For a vehicle with these wheels to be able to turn, the steerable
wheel(s) (depending on the type of vehicle) must be used. The car must first be turned along a
vertical axis, and then it must be moved along a horizontal axis. So, this method of steering causes
high friction and scrubbing, especially in heavy vehicles that aren't moving, because the wheel is
actively turned around its vertical axis. This uses more power and makes it harder for the vehicle
to stay in the right place.
The Swedish wheel works like a regular wheel, but it has small inactive rollers all around its edge.
Depending on how the rollers are set up, they also offer little resistance in the other way, so the
wheel can roll smoothly in any direction. The main axis of the wheels is the only actively driven
joint, but you can use these wheels to make holonomic robots that can move in any direction.
The spherical wheel is a real omnidirectional wheel. There are several implementations of
spherical wheels. One of these is the ball wheel mechanism which was developed by West and
Asada in 1997 as shown in figure. In a ball wheel, a motor sends power through gears to an active
roller ring. The rollers and the ball then rub against each other to send the power to the ball. The
ball can roll in any direction because the rollers are attached to the roller ring and the frame. For a
robot to move, it needs at least three spherical wheels. One mechanism for implementing this
spherical design imitates the computer mouse, providing actively powered rollers that rest against
the top surface of the sphere and impart rotational force.

Figure 19: Ball or spherical wheel mechanism

When making a robot with wheels, the designer has a few options for how the wheels are set up
and what kind of wheels they are. The stability, maneuverability, and controllability of the robot
depend on how the wheels are set up and what kind of wheels they are. One example of this is the
Ackermann wheel configuration of a car, which has two steerable wheels in the front and two fixed
wheels in the back. At least two of the wheels are powered, and they are all linked by an axis.
Almost every car is set up this way because it gives the driver the most control, steadiness, and
maneuverability in a shared environment: the road network.
The Ackermann wheel configuration is a steering geometry design used in vehicles, particularly
in cars, to improve the turning radius and minimize tire scrub during turns. It ensures that all four
wheels of a car follow different turning radius when the vehicle is turning.

Figure: Simple approximation for designing Ackermann geometry

In the Ackermann configuration, the front wheels are steered using a mechanism that allows them
to pivot around a vertical axis. When the car is turning, the inside wheel follows a smaller turning
radius than the outside wheel. This design enables the wheels to track different paths while
maintaining proper wheel alignment angles, which reduces tire wear and provides better handling.
The primary goal of the Ackermann steering geometry is to achieve a condition called "zero scrub
radius." The scrub radius refers to the distance between the point where the steering axis intersects
the ground and the center of the tire's contact patch. In the Ackermann configuration, the scrub
radius is minimized, which helps reduce steering effort and provides better road feel. By
implementing the Ackermann wheel configuration, the car's turning radius is improved compared
to a parallel steering design, where the wheels are always parallel to each other during turns. This
improvement allows for easier maneuvering and tighter turns, which are particularly beneficial in
low-speed situations like parking or navigating through narrow spaces.
When it comes to mobile robots, not all of them are made for the same setting. Instead, different
robots are made for use in a wide range of situations. But there isn't a single wheel configuration
that makes the robot easy to control, stable, and easy to move in every setting. The designer's job

is to find a configuration that makes the robot easy to control, stable, and easy to move. No matter
what kind of wheel is used, robots made for all terrains and robots with more than three wheels
usually need a suspension system to keep the wheels in touch with the ground. One of the easiest

ways to make a suspension work is to make the wheel itself flexible. For example, some four-
wheeled indoor robots with castor wheels have a simple stabilization made of a soft rubber tire

that can be bent. Obviously, this simple approach can't compete with a complex suspension system
when the robot needs a more dynamic suspension for a lot of uneven ground.

Wheel Geometry
The selection of wheel type for a mobile robot really depends on the wheel arrangement or wheel
geometry. These decisions affect how well a robot can move around, how easy it is to control, and
how stable it is. The mobile robot designer must consider these two issues simultaneously when
designing the locomoting mechanism of a wheeled robot. Why do wheel type and wheel geometry
matter?
Mobile robots are made to be used in a wide range of situations, unlike automobiles, which are
mostly made for a highly uniform environment (the road network). All cars have wheels that are
set up the same way because there is only one place in the design space where maneuverability,
controllability, and stability are at their best: on a paved road. But there is no one way to set up the
wheels that improves these qualities for the different places that mobile robots can be used. So,
mobile robots will have wheels that are set up in many different ways.
Now there will be different configuration based on number of wheels for mobile robots will be
shown below:

Figure: Icons, need to understand the next figures

Figure: Wheel Configuration for 2 wheels

Figure: Wheel Configuration for 3 wheels

Figure: Wheel Configuration for 4 wheels

Figure: Wheel Configuration for 6 wheels

Issues of wheeled locomotion
Stability
Two wheels are the bare minimum for stability when standing still. If the center of mass is below
the wheel axle or if there is a third point of touch with the floor, a robot with a two-wheeled
differential drive can achieve stability. But these are exceptions; normally, a wheeled robot needs
at least three wheels that make contact with the ground to achieve static stability, and the center of
gravity must be fully inside the support polygon created by the three wheels that make contact
with the ground.

Figure: Cye, a commercially available domestic robot that can vacuum and make deliveries in the home,
is built by Aethon Inc. (http://www.aethon.com).

Maneuverability
For a wheeled robot to do its job effectively, maneuverability is a crucial factor. A robot is
omnidirectional when it can move in any direction along the ground plane (x,y). For this amount
of movement, wheels that can move in more than one direction, like Swedish or spherical wheels,
are generally needed. Cars, on the other hand, use the Ackermann steering setup, which is not
omnidirectional. When a vehicle is set up like this, it’s turning radius is usually bigger than the
vehicle itself, and it can't move sideways (that is, along its axis). To park a vehicle like this, you
have to change the direction of the wheels and move it forward and backward over and over again.

This way of steering is very popular in hobby robotics because it is cheap to use a kit for a remote-
controlled race car as a platform for a robot that can move.

Controllability
With omnidirectional designs, the robot can move in any direction, which is good, but this makes
it harder to handle the robot. For example, to move a robot like the Carnegie Mellon Uranus robot
(see figure), which has four powered Swedish wheels, in a straight line, all four wheels must be
driven at the exact same speed. Even small changes in how fast the wheels spin will make the robot
go in the wrong direction. At this point, the benefit of Ackermann steering becomes clear because
it's much easier to drive these kinds of cars. To go straight forward, you just have to lock the wheels
that let you turn and move the powered wheels. These are linked by an axis, so if you turn on just
one motor, the speed of the drive wheels will always be the same. Taking all of these things into
account, it can be said that controllability and flexibility usually go in the opposite direction. If the
car is easy to control, it is less nimble, and if it is very nimble, it is harder to control.

Various Case studies of wheel robots
Below, we talk about different wheel configurations to show how the ideas we talked about
above can be used to make mobile robots that can do things in the real world.
Synchro Drive
In indoor mobile robot applications, the synchro drive configuration is widely utilized to set up the
wheels. Three driven and steered wheels are used, but only two motors are used overall. The same
motor moves all three wheels at the same speed, and the same motor turns all three wheels at the
same time around each of their own vertical turning axes. There is no direct way to reorient the
robot chassis because the wheels are being steered in relation to it. In fact, the orientation of the
chassis does change over time because of uneven tire wear, which causes a rotational dead
reckoning mistake.

Figure: Synchro drive: The robot can move in any direction; however, the orientation of the chassis is not

controllable. (Source: Book)

The use of synchro drive is especially beneficial in circumstances in which omnidirectionality is
being attempted. The robot is always able to reorient its wheels and move along a new trajectory
without affecting its footprint as long as each vertical steering axis is aligned with the contact path
of each tire. Naturally, if the robot chassis has directionality and the designers intend to reorient
the chassis purposely, then a synchro drive is only appropriate when combined with an
independently rotating turret that attaches to the wheel chassis. This is because the turret will rotate
in the opposite direction of the wheel chassis. This configuration has been offered for sale on a
number of commercial research robots. When it comes to dead reckoning, synchro drive systems
are typically more advantageous than full omnidirectional designs, but they are less advantageous
than differential-drive and Ackerman steering systems.
There are two primary explanations for this phenomenon. First and foremost, the motor that
controls the translation typically uses a single belt to drive all three of the wheels. When the drive
motor is engaged, the wheel that is closest to the motor starts spinning before the wheel that is
furthest away. This results in a slight shift in the orientation of the chassis due to the slop and
backlash that are present in the drive train. When additional modifications are made to the motor
speed, these relatively little alterations in angular position add up to produce a significant mistake
in orientation when using dead reckoning. Second, the mobile robot does not have any direct
control over the direction in which the chassis is oriented. The direction of the wheel thrust can be
very asymmetric, with two wheels on one side and the third wheel alone, or it can be symmetric,
with one wheel on each side and one wheel either straight ahead or straight behind, depending on
the orientation of the chassis. The asymmetric circumstances lead to a variety of inaccuracies due
to the possibility of tire-ground slippage, which in turn leads to errors in dead reckoning of robot
direction.
Omnidirectional Drive
Movement in any direction, not only forward or backward, is of vital interest for full
maneuverability. Robots that can move in any direction, at any moment, are referred to as

holonomic. Omnidirectional robots fall into this category as well. They can be accomplished by
the use of Swedish wheels, castor wheels, or spherical wheels.
Omnidirectional locomotion with three spherical wheels: The foundation of the omnidirectional
robot consists of three spherical wheels, each of which is driven by a separate motor. The spherical
wheels in this configuration are held in place by three contact points; two of these contact points
are provided by spherical bearings, and the third is provided by a wheel that is attached to the axle
of the motor. This idea offers exceptional maneuverability while also being straightforward in its
construction. On the other hand, it can only be used on level surfaces and with light weights, and
it is extremely difficult to locate round wheels that have high friction coefficients.

Figure: The Tribolo designed at EPFL (Swiss Federal Institute of Technology, Lausanne, Switzerland.
Left: arrangement of spheric bearings and motors (bottom view). Right: Picture of the robot without the

spherical wheels (bottom view). (Source: Book)

Omnidirectional locomotion with four Swedish wheels: The omnidirectional configuration has
been implemented with great success on a number of different research robots, one of which being
the Carnegie Mellon Uranus. This set-up is comprised of four Swedish 45-degree wheels, each of
which is powered by its own separate engine. The robot's ability to move along any path in the
plane and, even more impressively, to simultaneously spin around its vertical axis can be achieved
by adjusting the direction of rotation and relative speeds of its four wheels.

Figure: The Carnegie Mellon Uranus robot, an omnidirectional robot with four powered-swedish 45

wheels.

Omnidirectional locomotion with four castor wheels and eight motors: Castor wheels are an
additional option that can be utilized to achieve omnidirectionality. The great maneuverability of
the Nomad XR4000 manufactured by Nomadic Technologies is a direct result of this modification.
Mobile robot production at Nomadic has been discontinued, much to our regret. The use of hybrid
techniques that mix tracked and wheeled locomotion, as well as legged and wheeled mobility, can
also offer some distinct benefits.

Figure: The Nomad XR4000 from Nomadic Technologies had an arrangement of four castor wheels for
holonomic motion. All the castor wheels are driven and steered, thus requiring precise synchronization

and coordination to obtain a precise movement.

Tracked slip/skid Locomotion
In the configurations of the wheels that were just gone over, the assumption that has been made is
that the wheels will not be allowed to skid against the surface. Slip/skid steering is a sort of
alternative steering that can be used to reposition the robot by spinning wheels that are facing the

same direction at different speeds or in opposite directions. This can be accomplished by rotating
the wheels in a clockwise or anticlockwise motion. This is how the military tank operates, and the
Nanokhod is an example of a mobile robot that operates in a similar fashion based on the same
concept.
When compared to traditional wheeled designs, robots that make use of tread have substantially
greater ground contact patches, which can significantly improve their maneuverability in loose
terrain. Changing the orientation of the robot, however, typically needs a skidding turn, which is
when a considerable piece of the track must slide against the terrain in order to change directions.
This is because of the wide ground contact patch.

Figure: The Microrover Nanokhod, developed by von Hoerner & Sulger GmbH and the Max Planck

Institute, Mainz, for the European Space Agency (ESA), for Mars.

The slip/skid steering that comes with such systems is one of the drawbacks of using them. The
precise center of rotation of the robot is difficult to predict due to the significant amount of sliding
that occurs during a turn, and the precise change in position and orientation is also prone to
fluctuations depending on the ground friction. As a result, using such robots for dead reckoning
results in very erroneous results. This is the sacrifice that must be made in order to achieve
exceptionally high levels of maneuverability and traction while traversing rough and loose terrain.
In addition, using a slip/skid strategy on a surface with a high coefficient of friction can quickly
exceed the torque capabilities of the motors that are being utilized. This strategy is moderately
efficient in terms of power consumption when applied to lose terrain, but it is quite inefficient
when applied to other types of terrain.
Walking wheels
Walking robots may give the greatest degree of maneuverability when traversing difficult terrain.
On the other hand, they are not very effective on flat ground and require complex control systems.
An intriguing middle ground can be found in the form of hybrid systems, which combine the
versatility of legs with the efficacy of wheels. In the fields of field robotics and space robotics,
solutions that passively adapt to the terrain are of special interest.

Figure: Full-scale mock-up of Sojourner Rover that went to Mars in 1997(Source: Image)
The Sojourner robot developed by NASA and JPL is an example of a hybrid solution that is capable
of overcoming obstacles that are up to the size of the wheels. EPFL has recently developed a more
modern design for a mobile robot that can be used for applications that are comparable. This
climbing robot, known as Shrimp, is equipped with six powered wheels and has the ability to scale
obstacles that are twice as tall as its wheel diameter. Even though the robot is even smaller than
the Sojourner, it is nevertheless able to climb standard stairs because to this feature. The Shrimp
is designed in the shape of a rhombus and features a steering wheel at both the front and the back
of the vehicle, as well as two wheels mounted on a bogie on each side. A spring suspension is used
on the front wheel, which ensures that all four wheels maintain optimum contact with the ground
at all times. Synchronizing the steering of the front and rear wheels of the rover as well as the
speed difference of the bogie wheels enables the rover to steer in the desired direction. Because of
this, it is possible to perform high-precision maneuvers and turn on the spot with a minimal amount
of slip or skid from the four middle wheels. The utilization of parallel articulations for both the
front wheel and the bogies results in the creation of a virtual center of rotation at the same level as
the axis of the wheel. This offers the highest possible level of stability and climbing capabilities,
even when the friction coefficients between the wheel and the ground are quite low.

                    </div>
                </div>
            <Footer />
        </div>
        
    );
}

Lesson5.propTypes = {
    classes: PropTypes.object
};

export default Lesson5;
