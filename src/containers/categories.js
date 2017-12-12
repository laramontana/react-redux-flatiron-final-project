import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';
import { Route } from 'react-router-dom';
import CategoriesList from '../components/categoriesList';
import Category from './category';
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
        <Route exact path={`${this.props.match.url}`} component={CategoriesList}/>
        <Route path={`${this.props.match.url}/:categoryId`} component={Category}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(Categories);
