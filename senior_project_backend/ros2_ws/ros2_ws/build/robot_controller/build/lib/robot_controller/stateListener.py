#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from nav_msgs.msg import Odometry
from geometry_msgs.msg import Pose

class StateListener(Node):
    def __init__(self):
        super().__init__('state_listener')
        self.get_logger().info("FDKFKD")
        self.sub = self.create_subscription(Odometry, '/odom', self.odom_callback, 10)
        self.data_list = []

    def odom_callback(self, msg):
        current_pose = msg.pose.pose
        now = self.get_clock.now()
        timestamp = now.to_msg()
        position = current_pose.position
        orientation = current_pose.orientation
        data = f"Time:{timestamp}, Position:{position}, Orientation{orientation}"
        self.data_list.append(data)

    def write_data(self):
        with open(' robot_positions.txt', 'w') as file:
            for data in self.data_list:
                file.write(data)

def main(args=None):
    rclpy.init(args=args)
    state_listener = StateListener()
    try:
        rclpy.spin(state_listener)
    except KeyboardInterrupt:
        pass
    finally:
        state_listener.write_data()
        state_listener.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
