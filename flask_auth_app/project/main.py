from flask import Blueprint, send_from_directory, jsonify
from flask_login import login_required, current_user
from . import db

main = Blueprint('main', __name__, static_folder='CS425_Project')

@main.route('/')
def serve():
    return send_from_directory(main.static_folder, 'index.html')
@login_required

    #return render_template('index.html')

@main.route('/profile')
def profile():
    return 0
    #return render_template('profile.html', name=current_user.name)

@main.route('/api/data')
def get_data():
    return jsonify({'data': 'Hello World!'})