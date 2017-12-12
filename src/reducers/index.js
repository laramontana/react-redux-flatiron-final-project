import { combineReducers } from 'redux';
import question from './questionsReducer';
import categories from './categoriesReducer.js';

export default combineReducers({
  question,
  categories
});
