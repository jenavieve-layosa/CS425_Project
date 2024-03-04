// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import { qBankQuiz1, qBankQuiz2 } from "./Components/QuestionBank";
import Score from "./Components/Score";
//import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; //importing styles
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      CurrentQuiz: 1,
      quizzes:[
        { id:1, name: 'Quiz 1', questions: qBankQuiz1 },
        { id:2, name: 'Quiz 2', questions: qBankQuiz2 },
      ],
			currentQuestion: 0,
      //fix
      userAnswers: Array.from({ length: qBankQuiz1.length }, () => ''),
			selectedOption: "",
			score: 0,
			quizEnd: false,
		};
	}
  /*
  togglePopup = () => {
    this.setState((prevState) => ({ isPopupOpen: !prevState.isPopupOpen }));
  };*/

	handleOptionChange = (e) => {
    const { currentQuestion } = this.state;
    const updatedAnswers = [...this.state.userAnswers];
    updatedAnswers[currentQuestion] = e.target.value;
		this.setState({ userAnswers: updatedAnswers });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
    console.log("Form submitted")
		//this.checkAnswer();
		this.handleNextQuestion();
	};
/*
	checkAnswer = () => {
		const { CurrentQuiz, currentQuestion, selectedOption, score } = this.state;
		const CurrentQuizQuestions = this.state.quizzes[CurrentQuiz - 1].questions;

    if (selectedOption === CurrentQuizQuestions[currentQuestion].answer) {
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}
	};
*/

	handleNextQuestion = () => {
		const { CurrentQuiz, currentQuestion } = this.state;
		//const CurrentQuizQuestions = this.state.quizzes[CurrentQuiz - 1].questions;
    
    //if (currentQuestion + 1 < CurrentQuiz.length) {
		if(currentQuestion + 1 < this.state.quizzes[this.state.CurrentQuiz - 1].questions.length){
      this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				//selectedOption: "",
			}));
		} else {
      console.log("end of quiz")
			this.setState({
				quizEnd: true,
			});
		}
	};

  handleQuizGrade = () => {
    console.log("handleQuizGrade is called");
    const { userAnswers, quizzes, CurrentQuiz } = this.state;
    const currentQuizQuestions = quizzes[CurrentQuiz - 1].questions;
  
    console.log("userAnswers", userAnswers);
    console.log("currentQuizQuestions", currentQuizQuestions);
  
    let score = 0;
  
    currentQuizQuestions.forEach((question, index) => {
      if (userAnswers[index].toLowerCase() === question.answer.toLowerCase()) {
        score++;
      }
    });
  
    console.log("graded score:", score);
  
    this.setState({
      score: score,
      quizEnd: true,
    });
  };
  
  handleSwitchQuiz = (quizId) => {
    this.setState({
      CurrentQuiz: quizId,
      currentQuestion: 0,
      userAnswers: Array.from({length: this.state.quizzes[quizId - 1].questions.length }, () => ''),
      selectedOption: "",
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { quizzes, CurrentQuiz, currentQuestion, selectedOption, score, quizEnd } =
      this.state;
    const currentQuizQuestions = quizzes[CurrentQuiz - 1].questions;
    const isLastQuestion = currentQuestion === currentQuizQuestions.length - 1;
    // subtract one cause of how counting works in code
    const CurrentQuizQuestions = quizzes[CurrentQuiz - 1].questions;
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title">{quizzes[CurrentQuiz-1].name}</h1>
        {!quizEnd ? (
          <div>
            <Question
              question={CurrentQuizQuestions[currentQuestion]}
              selectedOption={this.state.userAnswers[currentQuestion]}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit}
              currentQuestion={currentQuestion}
              quizzes={this.state.quizzes}
              CurrentQuiz={CurrentQuiz}
            />
            {isLastQuestion ? null :(
              <button onClick ={this.handleNextQuestion}>Next Question</button>
            )}
          </div>
        ) : (
          <Score
            score={score}
            onNextQuestion={this.handleNextQuestion}
            onSwitchQuiz ={() => this.handleSwitchQuiz(CurrentQuiz == 1? 2 : 1)}
            onQuizGrade={this.handleQuizGrade}
            quizzes={quizzes}
            className="score"
          />
        )}
      </div>
    );
  }
}

export default App;
