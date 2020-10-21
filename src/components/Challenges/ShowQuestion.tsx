import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//Componenets:
import challenges, {challenge} from '../../res/challenges';

import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';
import MenuNote from '../Ncurses/wrapper/WithMenuNote';
import TextInput from '../Ncurses/TextInput';

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
  const [userAnswer, setUserAnswer] = useState('');
  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('submit');
  };
  const updateUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserAnswer(event.target.value);

  let prelude;
  if (id === 1) {
    prelude = (
      <div>
        <div dangerouslySetInnerHTML={{__html: body}} />
        <FirstQuestion />
      </div>
    );
  } else {
    prelude = <div dangerouslySetInnerHTML={{__html: body}} />;
  }

  return (
    <div className="challengeBody">
      {prelude}
      <TextInput
        label={'Flag:'}
        autoFocus={true}
        name={'userAnswer'}
        input_type={'text'}
        autoComplete={'flag'}
        placeholder={'Flag'}
        value={userAnswer}
        onChange={updateUserAnswer}
        required={true}
      />

      <WithMenuButton onClick={submitHandler}>submit</WithMenuButton>
    </div>
  );
};

const FirstQuestion: React.FC = () => {
  const [showHint, setShowHint] = useState(false);
  const toggleHint = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHint(true);
  };
  if (showHint) {
    return <p>000111000111011110100100110110100001</p>;
  } else {
    return (
      <WithMenuButton onClick={toggleHint}>Aks computer nicely</WithMenuButton>
    );
  }
};

export default ShowQuestion;
