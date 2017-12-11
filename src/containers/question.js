import React, { Component } from 'react';

class Question extends Component {

  render() {
    return (
      <div>
        {this.props.question.q}
      </div>
    )
  }
};


export default Question;
