# Import flask and datetime module for showing date and time
#Database is called students, Table is persons, Values are (user, password)

from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import jsonify
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector
import jwt
from datetime import datetime, timedelta
import os

# Initializing flask app
app = Flask(__name__)
#JWT configuration
app.config['SECRET_KEY'] = os.getenv("JWT_KEY")
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///Database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
db=SQLAlchemy(app)

# Route for seeing a data
@app.route('/check-account', methods=['POST'])
def checkingIfAccountEquists():
    db = mysql.connector.connect(
        user='root', 
        #this is whatever your stuff is it will change for each person
        password='MySQL Database', 
        host = '127.0.0.1', 
        database='students')
    
    mycursor = db.cursor()
    mycursor.execute('SELECT * FROM persons WHERE user= %(user)s', {'user' : username_entry})
    checkUserName = mycursor.fetchall()
    db.close()
    if len(checkUserName) == 0:
        print("user not found")
        return {
                "userExists" : False
            }
    elif (username_entry == checkUserName[0][0]) and (password_entry == checkUserName[0][1]):
        print("User found & Password is correct")
        return {
                "userExists" : True
            }
    elif (username_entry == checkUserName[0][0]) and (password_entry != checkUserName[0][1]):
        print("Password is incorrect")
        return {
                "userExists" : False
            }

def createUser():
    db = mysql.connector.connect(
        user='root', 
        #this is whatever your stuff is it will change for each person
        password='MySQL Database', 
        host = '127.0.0.1', 
        database='students')
    mycursor = db.cursor()
    mycursor.execute("SELECT user FROM persons WHERE user= %(user)s", {'user' : username_entry})
    stored_pass = mycursor.fetchone()

    sql = "INSERT INTO persons (user, password) VALUES (%s, %s)"
    val = (username_entry, password_entry)
    stored_pass = mycursor.fetchone()
    #mycursor.execute("INSERT INTO students (user, password) VALUES (password= %(password)s, user= %(user)s", {'password' : password_entry}, {'user' : username_entry})
    mycursor.execute(sql, val)
    db.commit()
    mycursor.execute("SELECT user FROM persons WHERE user= %(user)s", {'user' : username_entry})
    stored_user = mycursor.fetchone()

    db.close()

    if stored_pass is None:
        print("User not created")
    elif password_entry == stored_user[0]:
        print("User Created")

# Running app

#gotta make this an input
username_entry = 'Scott@gmail.com'
password_entry = 'password'
if __name__ == '__main__':
    app.run(debug=True)
