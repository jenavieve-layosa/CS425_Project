# python3 /home/andy/backend_controller/controller/backend_controller.py

import subprocess
import time
import signal
import shutil
import os


def make_executable(path):
    try:
        subprocess.run(['chmod', '+x', path], check=True)
        print(f"Made {path} executable successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error making {path} executable: {e}")

def run_shell_script(script_path, wait=False):
    try:
        process = subprocess.Popen(script_path, shell=True)
        if wait:
            process.wait()
            print(f"Script {script_path} executed successfully.")
        else:
            return process
    except subprocess.CalledProcessError as e:
        print(f"Error executing {script_path}: {e}")

def move_file(src, dest):
    try:
        shutil.move(src, dest)
        print(f"Moved file from {src} to {dest}")
    except Exception as e:
        print(f"Error moving file: {e}")

def check_gazebo_ready():
    # Placeholder for a more sophisticated check
    # For now, just wait a fixed amount of time
    print("Waiting for Gazebo to launch...")
    time.sleep(45)  # Adjust this based on your typical Gazebo startup time


def main():
    # Define paths
#    src_file = '/home/andy/before_test/' + os.listdir('/home/andy/before_test/')[0] # this is file from aws
    dest_file = '/home/andy/backend_controller/turtlebot3_ws/src/turtlebot3/robot_controller/robot_controller/controller.py'
    
    # Move file into ROS2 package
#    move_file(src_file, dest_file)
    
    # Paths to the shell scripts
    gazebo_script = '/home/andy/backend_controller/controller/subprocesses/run_gazebo.sh'
    state_listener_script = '/home/andy/backend_controller/controller/subprocesses/run_state_listener.sh'
    robot_controller_script = '/home/andy/backend_controller/controller/subprocesses/run_robot_controller.sh'
    
    make_executable(gazebo_script)
    make_executable(state_listener_script)
    make_executable(robot_controller_script)
    
    # Run Gazebo launch script
    print("Launching Gazebo...")
    gazebo_proccess = run_shell_script(gazebo_script, wait=False)
    check_gazebo_ready()
    print("gazebo is ready")
    
    # Run state_listener script without waiting for it to complete
    print("Starting state_listener...")
    state_listener_process = run_shell_script(state_listener_script, wait=False)
    time.sleep(2)
    
    # Start robot_controller script without waiting for it to complete
    print("Starting robot_controller in parallel")
    run_shell_script(robot_controller_script, wait=True)
    print("Finished robot_controller")
    
    # After both scripts finish, kill gazebo
    gazebo_proccess.terminate()
    print("gazebo terminated.")

    

if __name__ == '__main__':
    main()
