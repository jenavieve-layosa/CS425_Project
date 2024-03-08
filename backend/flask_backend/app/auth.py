from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user
from flask_cors import CORS
from .models import User
from . import db
import json

auth = Blueprint('auth', __name__)
CORS(auth)

@auth.route('/login', methods=['GET'])
def check_login():
    if current_user.is_authenticated:
        return json.dumps({'status':True})
    else:
        return json.dumps({'status':False})

@auth.route('/api/login', methods=['POST'])
def login_post():
    # reads in json data
    data = request.get_json()
    email = data['email']
    password = data['password']


    user = User.query.filter_by(email=email).first()

    # check if the user actually exists
    # take the user-supplied password, hash it, and compare it to the hashed password in the database
    if not user or not check_password_hash(user.password, password):
        return json.dumps({'status': False,
                           'err_msg':'Please check your login details and try again.'})

    # if the above check passes, then we know the user has the right credentials
    return json.dumps({'status':login_user(user)})

@auth.route('/signup')
def signup():
    return render_template('signup.html')

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
    
    
    # create a new user with the form data. Hash the password so the plaintext version isn't saved.
    new_user = User(email=email, firstname=firstname, lastname=lastname, password=generate_password_hash(password, method='pbkdf2:sha1', salt_length=8), user_type=account_type, user_verified=False)
    
    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()
    
    return json.dumps({'status':True})

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))

