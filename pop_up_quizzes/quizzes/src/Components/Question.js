// Question.js

import React, {Component} from "react";
import Options from "./Options";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit, currentQuestion, quizzes, CurrentQuiz} = this.props;
        const currentQuizQuestions = quizzes[CurrentQuiz - 1].questions;
        const isLastQuestion = currentQuestion === currentQuizQuestions.length - 1;
		return(
			<div className="">
				<h3>Question {question.id}</h3>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
                    {isLastQuestion && (
                        <button type="submit" className="btn btn-primary mt-2">
                            SUBMIT
                        </button>
                    )}
					
				</form>
				
			</div>
		)
	}
}

export default Question;
