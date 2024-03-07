# python3 /home/andy/CS425_Project/backend/ros-backend/backend_controller.py

import subprocess
import time
import signal
import shutil
import os
from flask import request, jsonify, Blueprint
from flask_cors import CORS
from ..flask_backend.app import db
from ..flask_backend.app.models import LessonProgress

auth = Blueprint('auth', __name__)
CORS(auth)

def get_current_code(lesson_id, user_id):
    lesson_progress = LessonProgress.query.filter_by(lesson_id=lesson_id, user_id=user_id).first()
    if lesson_progress:
        return lesson_progress.current_code
    else:
        print("unable to pull current code")
        return None
    
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

@auth.route('/api/run_simulation', methods=['POST'])
def main():
    # grab needed info to get current code
    data = request.get_json()
    lesson_id = data['lesson_id']
    user_id = data['user_id']

    # get current code
    current_code = get_current_code(lesson_id, user_id)

    # save current code to correct file location
    dest_file = './turtlebot3_ws/src/turtlebot3/robot_controller/robot_controller/controller.py'
    with open(dest_file, 'w') as file:
        file.write(current_code)
    
    exit() # stuff below currently works need the stuff above to work
    # Paths to the shell scripts
    gazebo_script = '/home/andy/CS425_Project/backend/ros-backend/subprocesses/run_gazebo.sh'
    state_listener_script = '/home/andy/CS425_Project/backend/ros-backend/subprocesses/run_state_listener.sh'
    robot_controller_script = '/home/andy/CS425_Project/backend/ros-backend/subprocesses/run_robot_controller.sh'
    
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
