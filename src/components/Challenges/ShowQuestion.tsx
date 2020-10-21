import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//Componenets:
import challenges, {challenge} from '../../res/challenges';

const submitButton = document.getElementById('falcon');
if (submitButton !== null) {
  const originalOnclick = submitButton.getAttribute('onclick');
}
const hint = document.getElementById('yoda');
const makeVisible = (id: string) => {
  const element = document.getElementById(id);
  if (element !== null) element.className = 'show';
};
const binarySet = new RegExp('^[0-1]+$');
let firstRecurstion = true;
const askNicely = () => makeVisible('flag');
//const checkBinaryHandler = () => {
//  const userAnswer = document.getElementById('skywalker').value;
//  if (binarySet.test(userAnswer)) {
//    makeVisible('yoda');
//  } else if (firstRecurstion) {
//    submitButton.setAttribute('onclick', originalOnclick);
//    firstRecurstion = false;
//    checkBinaryHandler();
//  } else {
//  }
//};
export type ShowQuestionProps = {
  id: number;
  body: string;
};

const ShowQuestion: React.FC<ShowQuestionProps> = ({id, body}) => {
  return <div dangerouslySetInnerHTML={{__html: body}} />;
};

export default ShowQuestion;
