import {useState, useEffect} from 'react';

// import axios from 'axios';

const params = url => ({
	vk: {
		urlCount: `https://zaycev.net/api/external/social/vk?url=${url}`,
		params: 'width=650, height=570'
	},
	mail: {
		urlCount: `https://zaycev.net/api/external/social/mail?url=${url}`,
		params: 'width=550, height=360'
	},
	ok: {
		urlCount: `https://zaycev.net/api/external/social/ok?url=${url}`,
		params: 'width=550, height=360'
	},
	facebook: {
		urlCount: `https://graph.facebook.com/?id=${url}&fields=engagement&access_token=554151405320632|TC5PKffr4rEmq5idMRyGsmdhTzg`,
		params: 'width=600, height=500'
	},
	twitter: {
		urlCount: `https://counts.twitcount.com/counts.php?url=${url}`,
		params: 'width=600, height=450'
	}
});

const useSocialList = async (countShare, list) => {
	const [countList, setCountList] = useState({});

	return {
		countList
	};
};

export default useSocialList;
