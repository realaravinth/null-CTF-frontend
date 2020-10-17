import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { log_in } from '../../app/authentication/Slice';

//Componenets:
import TextInput from '../Ncurses/TextInput';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuNote from '../Ncurses/wrapper/WithMenuNote';


const Login: React.FunctionComponent = () => {
	
	const [userId, setUserId] = useState("");
	const dispatch = useDispatch();

	const logMeIn = (username: string, password: string) => {
		const status = fetch("https://localhost").then(data => data.json());
		if (status) {
			dispatch(log_in())	
		}
	}

	const updateUserID = (event: ChangeEvent<HTMLInputElement>) => 
		setUserId(event.target.value);
	

	return(
	<WithMenuDialog 
		size={menuDialogSize.small}
		menuTitle={"Log in"}
		pageTitle={"Log in"}
		topText={"Please Log in to continue"} >
			<WithContentContainer>
				<TextInput 
					label={"User ID: "}
					required={true}
					autoFocus={true}
					autoComplete={"username"}
					name={"userId"}
					input_type={"text"}
					placeholder={"User ID"}
					value={userId}
					onChange={updateUserID}
				/>

			</WithContentContainer>

			<WithMenuButton>
				<a href="#"><span>L</span>og in</a>
			</WithMenuButton>

		</WithMenuDialog>
	);

}

export default Login;


//				<TextInput 
//						label={"Password: "}
//						required={true}
//						autoFocus={false}
//						autoComplete={"password"}
//						name={"password"}
//						input_type={"password"}
//						placeholder={"Password"}
//				/>

