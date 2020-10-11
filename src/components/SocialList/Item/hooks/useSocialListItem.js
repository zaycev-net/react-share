const useSocialListItem = (name, url) => {
	const clickHandler = (e) => {
		e.preventDefault();

		window.open(url, '', 'width=650, height=570');
	};

	return {
		clickHandler
	};
};

export default useSocialListItem;
