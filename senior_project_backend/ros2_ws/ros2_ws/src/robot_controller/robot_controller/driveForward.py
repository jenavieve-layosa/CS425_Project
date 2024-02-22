#!/usr/bin/env python3
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
import time

class DriveForward(Node):
    def __init__(self):
        super().__init__('drive_forward')
        self.get_logger().info("Drive_Forward started")
        self.pub = self.create_publisher(Twist, '/cmd_vel', 10)
        timer_period = .1
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.start_time = self.get_clock().now()
        self.driving_time = 5

    def timer_callback(self):
        current_time = self.get_clock().now()
        if(current_time - self.start_time).seconds_nanoseconds < self.driving_time:
            msg = Twist()
            msg.linear.x = 0.5
            msg.angular.z = 0.0
            self.pub.publish(msg)
        else:
            msg = Twist()
            msg.linear.x = 0.0
            msg.angular.z = 0.0
            self.pub.publish(msg)
            self.destroy_timer(self.timer)


def main(args=None):
    rclpy.init(args=args)
    drive_forward = DriveForward()
    rclpy.spin(drive_forward)
    drive_forward.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
