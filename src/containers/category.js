import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../actions/categoriesActions';
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


const mapStateToProps = (state) => {
  return {category: state.category}
}

export default connect(mapStateToProps, {fetchCategory})(Category);
