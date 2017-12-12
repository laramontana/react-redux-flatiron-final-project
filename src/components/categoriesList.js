import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CategoriesList = ({categories}) =>
    <div>
      {categories.map(category=><Link  className="cat" key={category.id} to={`/categories/${category.id}`}>{category.title.charAt(0).toUpperCase() + category.title.slice(1)}</Link>)}
    </div>


export default CategoriesList;
