#! /bin/bash
# move to correct file
cd /home/andy/backend_controller/turtlebot3_ws/

# source ros and workspace
source /opt/ros/humble/setup.bash
source /home/andy/backend_controller/turtlebot3_ws/install/setup.bash

ros2 run robot_controller controller_node

exit