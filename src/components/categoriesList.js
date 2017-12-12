import React from 'react';
import '../App.css';

const CategoriesList = ({categories}) =>
    <div>
      <h2>categoriesList</h2>
      {categories.map(category=><button onClick={this.handleClickNext} type="button" className="cat">{category.title.charAt(0).toUpperCase() + category.title.slice(1)}</button>)}
    </div>

export default CategoriesList;
