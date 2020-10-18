import React, {useState, ChangeEvent} from 'react';
import {useHistory} from 'react-router-dom';

//Redux stuff
import {useAppDispatch} from '../../app/store';
import {registered} from '../../app/reducers/registerSlice';

// API stuff
import {
  registerationRequestPayload,
  registerationResponsePayload,
  register,
} from '../../app/API/register';

//Componenets:
import TextInput from '../Ncurses/TextInput';
import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, {
  menuDialogSize,
} from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';

const Register: React.FunctionComponent = () => {
  const [nickname, setNickname] = useState('');
  const updateNickname = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const updateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRegistration = (nickname: string, email: string) => {
    const payload: registerationRequestPayload = {
      nickname,
      email,
    };

    register(payload).then(response => {
      switch (response.status) {
        case 200:
          dispatch(registered());
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
  };

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
      <WithMenuButton>Save</WithMenuButton>
    </WithMenuDialog>
  );
};

export default Register;
