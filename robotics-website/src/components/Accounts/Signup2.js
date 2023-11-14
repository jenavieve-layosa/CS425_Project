
import React, { useState } from 'react';
import axios from 'axios';

const SignUp2 = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            // Make a POST request to the Flask backend endpoint for account creation
            const response = await axios.post('http://localhost:5000/create_account', {
                username,
                password,
            });

            // Log the response from the server
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up2</button>
        </div>
    );
};

export default SignUp2;
