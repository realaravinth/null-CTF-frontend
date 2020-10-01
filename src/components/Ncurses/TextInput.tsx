import React from 'react';

import '../../ncurses.css';

type TextInputProps  = {
	label: string,
	required: boolean
	autoFocus: boolean
	autoComplete: string,
	name: string,            
	input_type: string,
	placeholder: string,
	//	onChange={this.handleInputChange} 

}

const TextInput: React.FunctionComponent<TextInputProps> = ({
	label,
	required,
	autoFocus,
	autoComplete,
	name,
	input_type,
	placeholder })=> (
	<div className="formGroup">
		<label className="label">
			{label}
		</label>
		<input
			className="textInput"
			required={required}
			autoFocus={autoFocus}
			autoComplete={autoComplete}
			name={name}            
			type={input_type}
			placeholder={placeholder}
		/>
	</div>
);

export default TextInput;



