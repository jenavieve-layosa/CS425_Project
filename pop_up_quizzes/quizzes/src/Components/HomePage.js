//HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div>
            <h1>Pick your quiz</h1>
            <Link to ="/quiz">
                <button>Start Quiz</button>
            </Link>
        </div>
    );
};

export default HomePage;