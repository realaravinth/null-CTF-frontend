import React from 'react';

import challenges, {challenge} from '../../res/challenges';

type showQuestionProps = {
  onClick(c: number): void;
};



const ShowTitles: React.FC<showQuestionProps> = ({onClick}) => {
const Titles = challenges.challenges.map((c: challenge) => (
    <li key={c.id} onClick={() => onClick(c.id)}>
      {' '}
      {c.challengeTitle}{' '}
    </li>
  ));
  return <ul> {Titles} </ul>
}

export default ShowTitles;

