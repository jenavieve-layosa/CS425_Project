# python3 /home/andy/CS425_Project/backend/ros-backend/backend_controller.py

import subprocess
import time
import signal
import shutil
import os
from flask import request, jsonify, Blueprint, sess
from flask_cors import CORS
from ..flask_backend.app import db
from ..flask_backend.app.models import LessonProgress

auth = Blueprint('auth', __name__)
CORS(auth)

def get_current_code(lesson_progress_id):
    lesson_progress = LessonProgress.query.filter_by(id=lesson_progress_id).first()
    if lesson_progress:
        return lesson_progress.current_code
    else:
        print("unable to pull current code")
        return None
    
def upload_current_data(lesson_progress_id, data):
    lesson_progress = LessonProgress.query.filter_by(id=lesson_progress_id).first()
    if lesson_progress:
        lesson_progress.current_sim_data = data
        try:
            db.session.commit()
            return True
        except Exception as e:
            print(f"Error uploading current data for lesson {lesson_progress_id}, with error: {e}")
            db.session.rollback()
            return False
    else:
        print("cant find lesson progress")
        return False
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
    lesson_progress_id = data[''] #TODO GET CORRECT ID

    # get current code
    current_code = get_current_code(lesson_progress_id)

    # save current code to correct file location
    dest_file = './turtlebot3_ws/src/turtlebot3/robot_controller/robot_controller/controller.py'
    with open(dest_file, 'w') as file:
        file.write(current_code)
    
    
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

    save_location = "/home/andy/CS425_Project/backend/ros_backend/sim_save/robot_positions.txt"
    if os.path.isfile(save_location):
        with open(save_location, 'r') as file:
            uploaded = upload_current_data(lesson_progress_id, file.read())
        os.remove(save_location)
        
    else:
        print("robot data not saved unable to upload to aws")

    

if __name__ == '__main__':
    main()
