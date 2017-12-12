import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import '../App.css';

class Categories extends Component {

  constructor() {
    super();
    this.state = {
    };
  }


  render() {

    return (
      <div className="App">
      <h4 className="App-title">Choose a category</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(Categories);
