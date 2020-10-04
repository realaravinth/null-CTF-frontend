import React from 'react';
import { Link } from 'react-router-dom';


//Componenets:
import Title from '../Title';

import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';
import TextInput from '../Ncurses/TextInput';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';
import WithMenuNote from '../Ncurses/wrapper/WithMenuNote';

const Register: React.FunctionComponent = () => (
	<WithMenuDialog size={menuDialogSize.small} >
		<Title location="Register" />
			<MenuTitle title={"Log in"} />
			<MenuTopText text={"Please Log in to continue"} />
			<WithContentContainer>
				<TextInput 
					label={"Username: "}
					required={true}
					autoFocus={true}
					autoComplete={"username"}
					name={"username"}
					input_type={"text"}
					placeholder={"Username"}
				/>
				<TextInput
					label={"Email: "}
					required={true}
					autoFocus={false}
					autoComplete={"email"}
					name={"email"}
					input_type={"email"}
					placeholder={"Email"}
				/>
				<TextInput 
					label={"Password: "}
					required={true}
					autoFocus={false}
					autoComplete={"password"}
					name={"password"}
					input_type={"password"}
					placeholder={"Password"}
				/>
				<TextInput 
					label={"Password: "}
					required={true}
					autoFocus={false}
					autoComplete={"password"}
					name={"password"}
					input_type={"password"}
					placeholder={"Password"}
				/>


			</WithContentContainer>
			<WithMenuButton>
				Register	
			</WithMenuButton>

			<WithMenuNote>
				<p>
					Already have an account? <span className="clickable">
						<Link to="/">Log in here</Link>
					</span>
				</p>
			</WithMenuNote>

		</WithMenuDialog>

	);

export default Register;

