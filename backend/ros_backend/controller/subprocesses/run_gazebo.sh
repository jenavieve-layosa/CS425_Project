#! /bin/bash
# move to correct file
cd /home/andy/backend_controller/turtlebot3_ws/

# source ros and workspace
source /opt/ros/humble/setup.bash
source /home/andy/backend_controller/turtlebot3_ws/install/setup.bash

# build current ws
colcon build

# run turtlebot3 in gazebo without gui
ros2 launch turtlebot3_gazebo empty_world.launch.py gui:=false
