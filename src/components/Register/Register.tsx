import React, {useState, ChangeEvent} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

//Redux stuff
import {useAppDispatch} from '../../app/store';
import {
  selectAuth,
  setRegistered,
  isAuthenticated,
} from '../../app/reducers/authSlice';

// API stuff
import {
  registerationRequestPayload,
  registerationResponsePayload,
  register,
} from '../../app/API/register';

//utils
import isBlankString from '../../app/utils/blankString';

//Componenets:
import TextInput from '../Ncurses/TextInput';
import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';

const Register: React.FunctionComponent = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();
  const history = useHistory();

  const updateNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRegistration = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isBlankString(email) || isBlankString(nickname)) {
      alert('email and nickname cant be empty');
    } else {
      const payload: registerationRequestPayload = {
        nickname,
        email,
      };
      register(payload).then(response => {
        switch (response.status) {
          case 200:
            dispatch(setRegistered);
            history.push('/challenges');
            break;
          case 400:
            if (response.body !== null) {
              response.body.map((data: registerationResponsePayload) => {
                alert('Somthing happened');
                data.error.map(duplicateValue =>
                  alert(`looks like ${duplicateValue} is already taken`),
                );
              });
            }
            break;
        }
      });
    }
  };

  const authState = useSelector(selectAuth);

  if (authState === isAuthenticated.loggedIn) {
    return (
      <WithMenuDialog
        size={menuDialogSize.small}
        pageTitle={'Register'}
        menuTitle={'Register'}
        topText={'Please enter the following details to continue'}>
        <WithContentContainer>
          <TextInput
            label={'Nickname: '}
            required={true}
            autoFocus={true}
            autoComplete={'name'}
            name={'nickname'}
            input_type={'text'}
            placeholder={'Nickname'}
            value={nickname}
            onChange={updateNickname}
          />
          <TextInput
            label={'Email: '}
            required={true}
            autoFocus={false}
            autoComplete={'email'}
            name={'email'}
            input_type={'email'}
            placeholder={'Email'}
            value={email}
            onChange={updateEmail}
          />
        </WithContentContainer>
        <WithMenuButton onClick={handleRegistration}>Save</WithMenuButton>
      </WithMenuDialog>
    );
  } else {
    return <div> {history.push('/')} </div>;
  }
};

export default Register;
