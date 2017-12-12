import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import CategoriesList from '../components/categoriesList';
import '../App.css';

class Categories extends Component {

  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {

    return (
      <div className="App">
      <h4 className="App-title">Choose a category</h4>
      <CategoriesList categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(Categories);
