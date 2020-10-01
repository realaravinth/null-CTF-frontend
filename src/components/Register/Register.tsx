import React from 'react';
import { Link } from 'react-router-dom';


//Componenets:
import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';
import TextInput from '../Ncurses/TextInput';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';
import WithMenuNote from '../Ncurses/wrapper/WithMenuNote';

const Register: React.FunctionComponent = () => (
	<WithMenuDialog isChallenges={false}>
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

