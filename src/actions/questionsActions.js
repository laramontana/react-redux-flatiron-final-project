import fetch from 'isomorphic-fetch';
export function fetchQuestion() {

  return function(dispatch){
    dispatch({type: 'LOADING'})
    return fetch('http://www.jservice.io/api/random')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_QUESTION', payload: {q: responseJson.question, a: responseJson.question}})
    })
  }
}
