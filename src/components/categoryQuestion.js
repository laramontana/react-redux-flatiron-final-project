import React, { Component } from 'react';
import '../App.css';
import Question from './question';
import Answer from './answer';


class CategoryQuestion extends Component {

  constructor() {
    super();
    this.state = {
      answerClicked: false
    };
  }

  handleClick = event => {
    this.setState({
      answerClicked: true
    })
  }

  render() {
    const {question, answer} = this.props
    let showAnswer = this.state.answerClicked ? <Answer answer={answer}/> : null;

    return (
      <div>
        <Question question={question}/>
        <button onClick={this.handleClick} type="button" className="answer">Answer</button>
        {showAnswer}
      </div>
    );
  }
}

export default CategoryQuestion;
