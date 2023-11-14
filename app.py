from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS



# Configure MySQL
app.config['MYSQL_HOST'] = '3306'
app.config['MYSQL_USER'] = 'jenavieve'
app.config['MYSQL_PASSWORD'] = 'Password!'
app.config['MYSQL_DB'] = 'foreDatabase'

mysql = MySQL(app)

@app.route('/create_account', methods=['POST'])
def create_account():
    try:
        # Get user data from the request
        user_data = request.json
        username = user_data['username']
        password = user_data['password']
        hashed_password = hash_password(password)

        # Create a MySQL cursor
        cur = mysql.connection.cursor()

        # Insert user into the database
        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed_password))

        # Commit the transaction
        mysql.connection.commit()

        # Close the cursor
        cur.close()

        return jsonify({"message": "Account created successfully"})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/login', methods=['POST'])
def login():
    try:
        # Get user data from the request
        user_data = request.json
        username = user_data['username']
        password = user_data['password']

        # Create a MySQL cursor
        cur = mysql.connection.cursor()

        # Retrieve user from the database
        cur.execute("SELECT * FROM users WHERE username = %s", (username,))
        user = cur.fetchone()

        # Close the cursor
        cur.close()

        if user:
            # Check if the provided password matches the stored hashed password
            if check_password(password, user['password']):
                return jsonify({"message": "Login successful"})
            else:
                return jsonify({"message": "Incorrect password"})
        else:
            return jsonify({"message": "User not found"})
    except Exception as e:
        return jsonify({"error": str(e)})

def hash_password(password):
   
    return hash(password)

def check_password(input_password, stored_password):
    
    return hash(input_password) == stored_password

if __name__ == '__main__':
    app.run(debug=True)
