import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//utils
import isBlankString from '../../app/utils/blankString';

//Componenets:
import challenges, {challenge} from '../../res/challenges';

import WithMenuButton, {
  WithMenuButtonSmall,
} from '../Ncurses/wrapper/WithMenuButton';
import MenuNote from '../Ncurses/wrapper/WithMenuNote';
import TextInput from '../Ncurses/TextInput';

const submitButtonSmall = document.getElementById('falcon');
if (submitButtonSmall !== null) {
  const originalOnclick = submitButtonSmall.getAttribute('onclick');
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
//    submitButtonSmall.setAttribute('onclick', originalOnclick);
//    firstRecurstion = false;
//    checkBinaryHandler();
//  } else {
//  }
//};
export type ShowQuestionProps = {
  id: number;
  body: string;
};

enum showHintVals {
  noHint,
  showFlag,
  showBinToDecHint,
}
const ShowQuestion: React.FC<ShowQuestionProps> = ({id, body}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showHint, setShowHint] = useState(showHintVals.noHint);

  const toggleHint = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showHint === showHintVals.noHint) {
      setShowHint(showHintVals.showFlag);
    }
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isBlankString(userAnswer)) {
      alert("can't be empty");
    } else {
      if (binarySet.test(userAnswer)) {
        if (id === 1) {
          if (binarySet.test(userAnswer)) {
            setShowHint(showHintVals.showBinToDecHint);
          }
        }
      } else {
        alert('submit');
      }
    }
  };
  const updateUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserAnswer(event.target.value);

  let prelude;
  if (id === 1) {
    prelude = (
      <div>
        <div dangerouslySetInnerHTML={{__html: body}} />
        <FirstQuestion hintState={showHint} onClick={toggleHint} />
      </div>
    );
  } else {
    prelude = <div dangerouslySetInnerHTML={{__html: body}} />;
  }

  return (
    <div className="challengeBody">
      {prelude}

      <div className="btnSmallOuter">
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
    </div>
  );
};

type firstQProps = {
  hintState: showHintVals;
  onClick(e: React.MouseEvent): void;
};

const FirstQuestion: React.FC<firstQProps> = ({hintState, onClick}) => {
  if (hintState === showHintVals.showFlag) {
    return <p>Computer: 000111000111011110100100110110100001</p>;
  } else if (hintState === showHintVals.noHint) {
    return (
      <WithMenuButtonSmall onClick={onClick}>
        Aks computer nicely
      </WithMenuButtonSmall>
    );
  } else {
    return (
      <p>
        Well, the flag that you have entered might be correct but there's no way
        of verifying it. We, unlike computers, only speak decimal.So can you
        please present the flag in a way that we understand?{' '}
      </p>
    );
  }
};

export default ShowQuestion;
