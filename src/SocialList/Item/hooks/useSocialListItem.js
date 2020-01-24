import {useState, useEffect} from 'react';

const useSocialListItem = (defaultUrl, name) => {
	const socialUrl = {
		vk: 'https://vk.com/share.php?&url=',
		mail: 'https://connect.mail.ru/share?share_url=',
		ok: 'https://connect.ok.ru/offer?url=',
		facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
		twitter: 'https://twitter.com/intent/tweet?url='
	};
	const [url, setUrl] = useState(`${socialUrl[name]}${defaultUrl}`);

	const clickHandler = e => {
		e.preventDefault();

		window.open(`${socialUrl[name]}${url}`, '', 'width=650, height=570');
	};

	useEffect(() => {
		if (!defaultUrl) setUrl(`${socialUrl[name]}${document.location.href}`);
	}, [defaultUrl]);

	return {
		url,
		clickHandler
	};
};

export default useSocialListItem;
