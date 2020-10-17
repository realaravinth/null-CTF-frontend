import React, { useState, ChangeEvent } from 'react';

//App stuff

//Componenets:
import TextInput from '../Ncurses/TextInput';
import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';


type registerationPayload = {
	nickname: string,
	email: string
}

const Register: React.FunctionComponent = () =>{
	const [nickname, setNickname] = useState("");
	const updateNickname = (event: ChangeEvent<HTMLInputElement>) => 
		setNickname(event.target.value);

	const [email, setEmail] = useState("");
	const updateEmail = (event: ChangeEvent<HTMLInputElement>) => 
		setEmail(event.target.value);

	const registeration = (nickname: string, email: string) => {
		const payload : registerationPayload = {
			nickname,
			email
		}
		fetch("https://localhost", {
			method: 'post',
			headers:{
				"Content-type" : "application/json; charset=UTF-8"
			},
			body: JSON.stringify(payload)
		}).then( response => {
			if (response.status !== 200) {
				alert("Somthing happened");
			}})
		}

	return (
	<WithMenuDialog 
		size={menuDialogSize.small} 
		pageTitle ={"Register"}
		menuTitle={"Sign up"}
		topText ={"Please Log in to continue"}>
			<WithContentContainer>
				<TextInput 
					label={"Nickname: "}
					required={true}
					autoFocus={true}
					autoComplete={"name"}
					name={"nickname"}
					input_type={"text"}
					placeholder={"Nickname"}
					value={nickname}
					onChange={updateNickname}
				/>
				<TextInput
					label={"Email: "}
					required={true}
					autoFocus={false}
					autoComplete={"email"}
					name={"email"}
					input_type={"email"}
					placeholder={"Email"}
					value={email}
					onChange={updateEmail}
				/>
			</WithContentContainer>
			<WithMenuButton>
				Save	
			</WithMenuButton>
		</WithMenuDialog>

	);
}

export default Register;
