import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo2.png';
import NavBar from './components/NavBar';
import Quiz from './containers/quiz';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trivia App</h1>
        </header>
        <Router>
          <div>
            <NavBar/>
            <Quiz/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
