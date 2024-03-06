from flask import Blueprint, send_from_directory, jsonify
from flask_login import login_required, current_user
from . import db

main = Blueprint('main', __name__, static_folder='CS425_Project')

@main.route('/')
def serve():
    return send_from_directory(main.static_folder, 'index.html')

@main.route('/profile')
def profile():
    data = {
        'email': current_user.email,
        'firstname': current_user.firstname,
        'lastname': current_user.lastname,
    }
    return jsonify(data)