// Score.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class Score extends Component {
    componentDidMount(){
        this.props.onQuizGrade();
    }
	render() {
		const { score, onNextQuestion, onSwitchQuiz, quizzes } = this.props;
		return (
			<div>
				<h2>Results</h2>
				<h4>Your score: {score}</h4>
                <button onClick={onSwitchQuiz}>Switch Quiz</button>

               
			</div>
		);
	}
}

export default Score;
