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
};

const ShowTitles: React.FC<showQuestionProps> = ({onClick}) => {
  const challenges = useSelector(selectChallenge);
  let Titles;
  if (challenges !== null) {
    Titles = challenges.map((c: challenge) => (
      <li key={c.id} className={'ctitle'} onClick={() => onClick(c.id)}>
        {' '}
        {c.challengeTitle}{' '}
      </li>
    ));
  } else Titles = <div />;

  return <ul id="challenges"> {Titles} </ul>;
};

export default ShowTitles;
