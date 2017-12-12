import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoryQuestions } from '../actions/categoriesActions';
import '../App.css';

class Category extends Component {

  render() {
    console.log(this.props.category.title)

    return (
      <div className="App">
        <h1>{this.props.category.title}</h1>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const category = state.categories.find(category=>category.id == ownProps.match.params.categoryId)
  return {
    category
  };
}


export default connect(mapStateToProps)(Category);
