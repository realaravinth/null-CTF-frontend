import React, { useEffect } from 'react';

type TitleProps = {
	location: string,
}
const Title: React.FC<TitleProps>= ({location}) => {
	const setTitle = () => {
		const title = location + " | CTF";
		document.title = title ;
	};
	useEffect(() => {
		setTitle();
	});

	return(<div />);
}

export default Title;
