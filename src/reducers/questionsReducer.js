export default (state = {q: "test question", a: "answer"}, action) => {
  switch (action.type) {
    case 'SHOW_Q':
      return state
    default:
      return state;
  }
}
