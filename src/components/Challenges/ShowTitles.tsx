import React from 'react';

import {useSelector} from 'react-redux';

import {
  selectChallenge,
  addAnswer,
  challenge,
  currentQAnswer,
  answerUpdate,
} from '../../app/reducers/challengeSlice';
type showQuestionProps = {
  onClick(c: number): void;
  activeID: number,
};

const ShowTitles: React.FC<showQuestionProps> = ({activeID, onClick}) => {
  const challenges = useSelector(selectChallenge);
  let Titles;
  if (challenges !== null) {
    Titles = challenges.map((c: challenge) => {
      let classes = 'ctitle';
      if (c.hasAnswered === true) {
        classes += ' correct';
      }

      let id = ' ';
      if (c.id === activeID){
        id="active";
      }
      return (
        <li key={c.id} id={id} className={classes} onClick={() => onClick(c.id)}>
          {' '}
          {c.challengeTitle} ({c.score})
        </li>
      );
    });
  } else Titles = <div />;

  return <ul id="challenges"> {Titles} </ul>;
};

export default ShowTitles;
