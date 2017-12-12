import React from 'react';
import '../App.css';

const CategoriesList = ({categories}) =>
    <div>
      {categories.map(category=><button key={category.id} onClick={this.handleClickNext} type="button" className="cat">{category.title.charAt(0).toUpperCase() + category.title.slice(1)}</button>)}
    </div>

export default CategoriesList;
