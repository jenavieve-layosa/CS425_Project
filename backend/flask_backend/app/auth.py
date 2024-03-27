from flask import Blueprint, request, Response
import bcrypt
from flask_login import login_user, login_required, logout_user, current_user
from flask_cors import CORS
from .models import User
from . import db
import json

auth = Blueprint('auth', __name__)
CORS(auth)

@auth.route('/api/login', methods=['POST'])
def login_post():
    # reads in json data
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()

    # check if the user actually exists
    # take the user-supplied password, hash it, and compare it to the hashed password in the database
    if not user or not bcrypt.checkpw(password.encode(), user.password.encode()): # if the user doesn't exist or password is wrong
        return Response(("{'status':false}"), status=401, mimetype='application/json')

    # if the above check passes, then we know the user has the right credentials
    return Response(json.dumps(login_user(user)), status=200, mimetype='application/json')

@auth.route('/api/signup', methods=['POST'])
def signup_post():
    # code to validate and add user to database goes here
    data = request.get_json()
    email = data['email']
    firstname = data['firstname']
    lastname = data['lastname']
    password = data['password']
    account_type = data['account_type']


    user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

    if user: # if a user is found, we want to redirect back to signup page so user can try again
        return json.dumps({'status':False, 'err_msg':'Email address already exists'})
    
    salt = bcrypt.gensalt(rounds=8)
    bytes = password.encode('utf-8')
    
    # create a new user with the form data. Hash the password so the plaintext version isn't saved.
    new_user = User(email=email, firstname=firstname, lastname=lastname, password=bcrypt.hashpw(bytes, salt), user_type=account_type, user_verified=False)
    
    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()
    
    return Response(("{'status':true}"), status=201, mimetype='application/json')

@auth.route('/api/userData', methods=['GET'])
def getUserData():
    if current_user.is_authenticated:
        return Response(json.dumps({'id':current_user.id,'email':current_user.email, 'firstname':current_user.firstname, 'lastname':current_user.lastname, 'user_type':current_user.user_type}), status=200, mimetype='application/json')
    else:
        return Response(status=401, mimetype='application/json')

@auth.route('/api/checkAuth')
def checkAuth():
    if current_user.is_authenticated:
        return Response({"'status':True"},status=200, mimetype='application/json')
    else:
        return Response(status=401, mimetype='application/json')
    
@auth.route('/api/editAccount', methods=['POST'])
def editAccount():
    if current_user.is_authenticated:
        data = request.get_json()
        current_user.email = data['email']
        current_user.firstname = data['firstname']
        current_user.lastname = data['lastname']
        db.session.commit()
        return Response(status=200, mimetype='application/json')
    else:
        return Response(status=401, mimetype='application/json')