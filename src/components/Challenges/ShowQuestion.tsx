import React, {useState} from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

import {
  selectChallenge,
  setHasAnswered,
  addAnswer,
  currentQAnswer,
  answerUpdate,
} from '../../app/reducers/challengeSlice';
import {checkResponse} from '../../app/API/checkResponse';
import {useAppDispatch} from '../../app/store';
//utils
import isBlankString from '../../app/utils/blankString';

import WithMenuButton, {
  WithMenuButtonSmall,
} from '../Ncurses/wrapper/WithMenuButton';
import MenuNote from '../Ncurses/wrapper/WithMenuNote';
import TextInput from '../Ncurses/TextInput';

const binarySet = new RegExp('^[0-1]+$');

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
  const dispatch = useAppDispatch();
  const [userAnswer, setUserAnswer] = useState('');
  const history = useHistory();
  const [showHint, setShowHint] = useState(showHintVals.noHint);

  const challenges = useSelector(selectChallenge);
  const toggleHint = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showHint === showHintVals.noHint) {
      setShowHint(showHintVals.showFlag);
    }
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isBlankString(currentQAnswer(id))) {
      alert("can't be empty");
    } else {
      if (binarySet.test(currentQAnswer(id))) {
        if (id === 1) {
          if (binarySet.test(currentQAnswer(id))) {
            setShowHint(showHintVals.showBinToDecHint);
          }
        }
      } else {
        const payload = JSON.stringify({
          id: id,
          userAnswer: currentQAnswer(id),
        });
        checkResponse(payload).then(res => {
          if (res.status === 200) {
            res.json().then((data: any) => {
              if (data.isCorrect === true) {
                dispatch(setHasAnswered(id));
              }
            });
          } else if (res.status === 403) {
            res.json().then((data: any) => {
              alert(data.error);
              history.push("/logout")
            });
          }
        });
      }
    }
  };
  const updateUserAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload: answerUpdate = {
      id,
      challengeAnswer: event.target.value,
    };
    dispatch(addAnswer(payload));
  };

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
  const currentQAnswer = (id: number) => {
    if (challenges !== null)
      if (challenges[id - 1].challengeAnswer !== null) {
        return challenges[id - 1].challengeAnswer;
      } else return ' ';
    else return ' ';
  };

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
          value={currentQAnswer(id)}
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
