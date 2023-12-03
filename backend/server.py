#Database is called FORE_Main_DB, table for users is called 'Users', with columns:
# email (varchar(255), unique), firstname (tinytext), lastname (tinytext), password (tinytext), more if needed

#config for mysql connector
config = {
    'user': 'root',
    'password': 'MySQL Database',
    'host': 'localhost',
    'database': 'FORE_Main_DB',
    'raise_on_warnings': True
}


#imports for flask, the restful API, SQLAlchemy, and backend stuff
from flask import Flask, request, jsonify, make_response
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
#import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector #import mysql connector for talking to mysql backend
from mysql.connector import errorcode #mysql error code handling module
#import jwt
#from datetime import datetime, timedelta
import os

# Initializing flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:MySQL Database@localhost/FORE_Main_DB'
#init SQLAlchemy db
db=SQLAlchemy(app)
#init flask-restful api
api = Api(app)

# Route for seeing a data
@app.route('/check-account', methods=['POST'])
def checkingIfAccountEquists():
    #try catch for mysql connection errors
    try:
        #connect to mysql backend using the config info set at the top
        db = mysql.connector.connect(**config) 
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your username or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    
    data = request.json
    email_entry = data.get('email')
    password_entry = data.get('password')

    mycursor = db.cursor()
    mycursor.execute("SELECT email FROM Users where email= %(email)s", {'email' : email_entry})
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
        host = 'localhost', 
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
if __name__ == '__main__':
    app.run(debug=True) #debug=True is optional