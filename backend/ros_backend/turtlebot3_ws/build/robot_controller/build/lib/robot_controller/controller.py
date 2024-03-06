#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
from std_msgs.msg import Int32

class DriveForward(Node):
    def __init__(self):
        self.first = True
        super().__init__('drive_forward')
        self.get_logger().info("Drive_Forward started")
        self.pub = self.create_publisher(Twist, '/cmd_vel', 10)
        self.pub_kill = self.create_publisher(Int32, 'kill_topic', 10)
        timer_period = 0.1  # Seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.start_time = self.get_clock().now().nanoseconds
        self.driving_time = 5  # Seconds

    def timer_callback(self):
        current_time = self.get_clock().now().nanoseconds
        if self.first:
            self.first = False
            self.start_time = current_time
        elapsed_time = (current_time - self.start_time) * 1e-9
        if elapsed_time < self.driving_time:
            msg = Twist()
            msg.linear.x = 0.5
            msg.angular.z = 0.0
            self.pub.publish(msg)
        else:
            msg = Twist()
            msg.linear.x = 0.0
            msg.angular.z = 0.0
            self.pub.publish(msg)
            msg = Int32()
            msg.data = 1
            self.pub_kill.publish(msg)
            self.get_logger().info("Drive_Forward finished shuting down")
            self.destroy_timer(self.timer)
            # Call shutdown in the callback after finishing the action
            exit()
            

def main(args=None):
    rclpy.init(args=args)
    drive_forward = DriveForward()
    rclpy.spin(drive_forward)

if __name__ == '__main__':
    main()
