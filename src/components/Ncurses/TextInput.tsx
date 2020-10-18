import React, {ChangeEvent} from 'react';

import '../../ncurses.css';

type TextInputProps = {
  label: string;
  required: boolean;
  autoFocus: boolean;
  autoComplete: string;
  name: string;
  input_type: string;
  placeholder: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  value: string;
};

const TextInput: React.FunctionComponent<TextInputProps> = ({
  label,
  required,
  autoFocus,
  autoComplete,
  name,
  input_type,
  placeholder,
  value,
  onChange,
}) => (
  <div className="formGroup">
    <label className="label">{label}</label>
    <input
      className="textInput"
      required={required}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      name={name}
      type={input_type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
