import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/categoriesActions';
import '../App.css';

class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {

    return (
      <div>
        {this.props.categories.map(category=><Link className="cat" key={category.id} to={`/categories/${category.id}`}>{category.title.charAt(0).toUpperCase() + category.title.slice(1)}</Link>)}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesList);
