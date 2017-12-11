import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo2.png';
import Question from './containers/question';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trivia App</h1>
        </header>
        <div className="App-intro">
          <Question question={this.props.question}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {question: state.question}
}

export default connect(mapStateToProps)(App);
