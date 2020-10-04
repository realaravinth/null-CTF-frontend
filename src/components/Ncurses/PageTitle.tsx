import React, { useEffect } from 'react';

type PageTitleProps = {
	location: string,
}
const PageTitle: React.FC<PageTitleProps>= ({location}) => {
	const setPageTitle = () => {
		const title = location + " | CPageTF";
		document.title = title ;
	};
	useEffect(() => {
		setPageTitle();
	});

	return(<div />);
}

export default PageTitle;
