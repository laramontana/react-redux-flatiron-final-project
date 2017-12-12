import React from 'react';
import '../App.css';

const CategoryQuestion = ({question, answer}) =>
    <div>
      <p><b>{question}</b></p>
      <p><i>{answer}</i></p>
    </div>

export default CategoryQuestion;
