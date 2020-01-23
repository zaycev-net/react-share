import {useState, useEffect} from 'react';

const useSocialListItem = defaultUrl => {
	const socialUrl = {
		vk: 'https://vk.com/share.php?&url=',
		mail: 'https://connect.mail.ru/share?share_url=',
		ok: 'https://connect.ok.ru/offer?url=',
		facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
		twitter: 'https://twitter.com/intent/tweet?url='
	};
	const [url, setUrl] = useState(defaultUrl);

	useEffect(() => {
		if (!defaultUrl) setUrl(document.location.href);
	}, [defaultUrl]);

	return {
		url,
		socialUrl
	};
};

export default useSocialListItem;
