import React, {useState, ChangeEvent} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

// app stuff
import {
  selectAuth,
  setLoggedIn,
  isAuthenticated,
} from '../../app/reducers/authSlice';
import {set_start_time} from '../../app/reducers/startTimeSlice';
import {useAppDispatch} from '../../app/store';

// api stuff
import {
  login,
  loginResponsePayload,
  loginRequestPayload,
} from '../../app/API/login';

//utils
import isBlankString from '../../app/utils/blankString';

//Componenets:
import TextInput from '../Ncurses/TextInput';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';
import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';

const Login: React.FunctionComponent = () => {
  const [userID, setUserID] = useState('');
  const dispatch = useAppDispatch();
  const authVal = useSelector(selectAuth);
  let history = useHistory();

  const logingHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isBlankString(userID)) {
      alert('uer ID cant be empty');
    } else {
      const payload: loginRequestPayload = {
        userID,
      };

      login(payload)
        .then(response => response.json())
        .then(data => {
          const body = data.body;
          switch (data.status) {
            case 200:
              alert('Logged in');
              body.map((time: loginResponsePayload) => {
                dispatch(set_start_time(parseInt(time.startTime)));
                dispatch(setLoggedIn());
                history.push('/register');
              });
              break;
            case 401:
              alert('invalid credentials');
              break;
            case 403:
              body.map((time: loginResponsePayload) => {
                dispatch(set_start_time(parseInt(time.startTime)));
              });
              alert('you are early');
              break;
            case 501:
              alert('Internal server error');
              break;
            default:
              console.log(
                `Error while trying to login, server returned : ${data.status}`,
              );
          }
        })
        .catch(e => console.log(`Error occoured: ${e}`));
    }
  };

  const updateUserID = (event: ChangeEvent<HTMLInputElement>) =>
    setUserID(event.target.value);
  if (authVal === isAuthenticated.loggedOut) {
    return (
      <WithMenuDialog
        size={menuDialogSize.small}
        menuTitle={'Log in'}
        pageTitle={'Log in'}
        topText={'Please Log in to continue'}>
        <WithContentContainer>
          <TextInput
            label={'User ID: '}
            autoFocus={true}
            autoComplete={'username'}
            name={'userId'}
            input_type={'text'}
            placeholder={'User ID'}
            value={userID}
            onChange={updateUserID}
            required={true}
          />
        </WithContentContainer>

        <WithMenuButton onClick={logingHandler}>
          <span>L</span>og in
        </WithMenuButton>
      </WithMenuDialog>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Login;
