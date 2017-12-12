import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Category extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchCategory()
  }

  render() {

    return (
      <div className="App">

      </div>
    );
  }
}

export default Category;
