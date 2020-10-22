import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

import {selectChallenge, addAnswer, fetchChallenges, thunkedGetChallenges, challenge} from '../../app/reducers/challengeSlice';

//Componenets:
import ShowQuestion from './ShowQuestion';
import ShowTitles from './ShowTitles';

import WithContentColumned from '../Ncurses/wrapper/WithContentColumned';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';
import WithContentSidebar from '../Ncurses/wrapper/WithContentSidebar';
import WithContentSidebarBody from '../Ncurses/wrapper/WithContentSidebarBody';

import {useAppDispatch} from '../../app/store';



const Challenges: React.FC = () => {


  const dispatch = useAppDispatch();

  const authState = useSelector(selectAuth);
  const [currentQ, setCurrentQ] = useState(1);
  const [currentQBody, setCurrentQBody] = useState(
  );

  const challenges = useSelector(selectChallenge);
  const setBody = (c: number) => {
    if (challenges !== null){
    challenges.forEach((i: challenge) => {
      if (i.id === c) setCurrentQBody(i.challengeBody);
    }
    )}};


  console.log(currentQBody);
  const viewQuestion = (c: number) => {
    setCurrentQ(c);
    setBody(c);
  };
  if (authState === isAuthenticated.challengeReady) {
    return (
      <WithMenuDialog
        size={menuDialogSize.big}
        menuTitle={'Challenges'}
        topText={
          'Solve these challges to find flags. Flags will be in the form nCTF{secret-goes-in-here}'
        }
        pageTitle={'Challenges'}>
        <WithContentColumned>
          <WithContentSidebar>
            <ShowTitles onClick={viewQuestion} />
          </WithContentSidebar>
          <WithContentSidebarBody>
            <ShowQuestion body={currentQBody} id={currentQ} />
          </WithContentSidebarBody>
        </WithContentColumned>
      </WithMenuDialog>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Challenges;
