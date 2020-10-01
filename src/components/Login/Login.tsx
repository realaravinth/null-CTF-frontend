import React from 'react';

//Componenets:
import MenuTitle from '../Ncurses/MenuTitle';
import MenuBorder from '../Ncurses/Border/MenuBorder';
import MenuTopBorder from '../Ncurses/Border/MenuTopBorder';
import MenuTopText from '../Ncurses/MenuTopText';
import TextInput from '../Ncurses/TextInput';


const Login: React.FunctionComponent = () => (


		<div className="menuouter">
			<MenuTitle title={"Log in"} />
			<MenuBorder />
			<MenuTopText text={"Please Log in to continue"} />
			<div className="menuoptions">
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


			</div>

			<div className="menubuttons">
				<MenuTopBorder />
				<a href="#"><span>L</span>og in</a>
			</div>
		</div>
	);



export default Login;

