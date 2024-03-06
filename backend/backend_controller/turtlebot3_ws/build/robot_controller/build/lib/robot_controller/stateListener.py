#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from nav_msgs.msg import Odometry
from std_msgs.msg import Int32
import sys

# confirm the format of the data is correct
def odom_data_test(odom_data):
    if len(odom_data) > 0:
        formatted_data = True
        # check format
        for data in odom_data:
            if not ('Time' in data and 'Position' in data and 'Orientation' in data):
                formatted_data = False
                break
        
        if formatted_data:
            print("odom_data is formatted correctly")
            return True
        else:
            print("odom data is not being saved as its incorrectly formated")
            return False

    else:
        print("odom has no data and therefor will not be saved")
        return False

class StateListener(Node):
    def __init__(self):
        self.first = True
        super().__init__('state_listener')
        self.get_logger().info("State_Listener started")
        self.sub = self.create_subscription(Odometry, '/odom', self.odom_callback, 10)
        self.sub_kill = self.create_subscription(Int32, 'kill_topic', self.kill_listener, 10)
        self.data_list = []
        self.start_time = self.get_clock().now().nanoseconds

    def odom_callback(self, msg):
        current_time = self.get_clock().now().nanoseconds
        if self.first:
            self.first = False
            self.start_time = current_time
        current_pose = msg.pose.pose
        time = (current_time - self.start_time) * 1e-9
        self.get_logger().info(f"odom update time: {time}")
        position = current_pose.position
        orientation = current_pose.orientation
        data = f"Time:{time}, Position:{position}, Orientation:{orientation}"
        self.data_list.append(data)

    def write_data(self):
        if odom_data_test(self.data_list):
            with open('/home/andy/backend_controller/sim_save/robot_positions.txt', 'w') as file:
                for data in self.data_list:
                    file.write(f"{data}\n")
            self.get_logger().info("State_Listener data saved")

    def kill_listener(self, msg):
        if msg.data == 1:
            self.write_data()
            exit()
        else:
            self.get_logger().info(f"Bad kill msg: {msg}")
        
def main(args=None):
    rclpy.init(args=args)
    global state_listener
    state_listener = StateListener()
    try:
        rclpy.spin(state_listener)
    except Exception as e:
        state_listener.get_logger().info(f"Shutdown with exception: {e}")
   

if __name__ == '__main__':
    main()
