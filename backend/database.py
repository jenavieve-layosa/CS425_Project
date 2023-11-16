import mysql.connector

mydb = mysql.connector.connect(
    host='localhouse',
    user='myusername',
    password='mypassword'
)

print(mydb)