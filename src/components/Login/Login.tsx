import React from 'react';

//Componenets:
import MenuTitle from '../Ncurses/MenuTitle';
import MenuTopText from '../Ncurses/MenuTopText';
import TextInput from '../Ncurses/TextInput';
import MenuButton from '../Ncurses/MenuButton';

import WithContentContainer from '../Ncurses/wrapper/WithContentContainer';


const Login: React.FunctionComponent = () => (
		<div>
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

			<MenuButton>
				<a href="#"><span>L</span>og in</a>
			</MenuButton>


		</div>
	);



export default Login;

