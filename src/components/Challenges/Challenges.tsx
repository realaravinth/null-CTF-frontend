import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

//redux stuff
import {selectAuth, isAuthenticated} from '../../app/reducers/authSlice';

//Componenets:
import ShowQuestion from './ShowQuestion';
import ShowTitles from './ShowTitles';

import WithContentColumned from '../Ncurses/wrapper/WithContentColumned';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';
import WithContentSidebar from '../Ncurses/wrapper/WithContentSidebar';
import WithContentSidebarBody from '../Ncurses/wrapper/WithContentSidebarBody';
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



const Challenges: React.FC = () => {
  const authState = useSelector(selectAuth);
  const [currentQ, setCurrentQ] = useState(1);
  const [currentQBody, setCurrentQBody] = useState(
    challenges.challenges[0].challengeBody,
  );

  
  const setBody = (c: number) =>
    challenges.challenges.forEach((i: challenge) => {
      if (i.id === c) setCurrentQBody(i.challengeBody);
    });


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
