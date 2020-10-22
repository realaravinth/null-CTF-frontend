import React from 'react';

import challenges, {challenge} from '../../res/challenges';

type showQuestionProps = {
  onClick(c: number): void;
};



const ShowTitles: React.FC<showQuestionProps> = ({onClick}) => {
const Titles = challenges.challenges.map((c: challenge) => (
    <li key={c.id} className={"ctitle"} onClick={() => onClick(c.id)}>
      {' '}
      {c.challengeTitle}{' '}
    </li>
  ));
  return <ul id="challenges"> {Titles} </ul>
}

export default ShowTitles;

