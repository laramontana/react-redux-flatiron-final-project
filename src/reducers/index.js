import { combineReducers } from 'redux';
import question from './questionsReducer';
import categories from './categoriesReducer';


export default combineReducers({
  question,
  categories
});
