import React from 'react';
import { Link } from 'react-router-dom';

//Componenets:
import Title from '../Title';

import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';
import TextInput from '../Ncurses/TextInput';
import WithMenuButton from '../Ncurses/wrapper/WithMenuButton';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';
import WithMenuDialog, { menuDialogSize } from '../Ncurses/wrapper/WithMenuDialog';
import WithMenuNote from '../Ncurses/wrapper/WithMenuNote';


const Login: React.FunctionComponent = () => (
	<WithMenuDialog size={menuDialogSize.small} >
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
				<a href="#"><span>L</span>og in</a>
			</WithMenuButton>
			<WithMenuNote>
				<p>
					Don't have an account? <span className="clickable">
						<Link to="/register">Register here</Link>
					</span>
				</p>
			</WithMenuNote>

			<Title location={"Log in"} />
		</WithMenuDialog>


	);



export default Login;

