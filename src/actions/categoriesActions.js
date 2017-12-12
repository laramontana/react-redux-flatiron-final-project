import fetch from 'isomorphic-fetch';
export function fetchCategories() {

  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch('http://www.jservice.io/api/categories?count=48')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATEGORIES', payload: responseJson})
    })
  }
}
