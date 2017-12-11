import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo2.png';
import { fetchQuestion } from './actions/questionsActions';
import Question from './components/question';
import Answer from './components/answer';
import './App.css';

class App extends Component {

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

  componentDidMount() {
      this.props.fetchQuestion()
  }

  render() {
    const {question} = this.props
    let answer = this.state.answerClicked ? <Answer question={question}/> : null;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trivia App</h1>
        </header>
        <div className="App-intro">
          <Question question={question}/>
          <button onClick={this.handleClick} type="button" className="btn btn-outline-warning">Answer</button>
          {answer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {question: state.question}
}

export default connect(mapStateToProps, {fetchQuestion})(App);
