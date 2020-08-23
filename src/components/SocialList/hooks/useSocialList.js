import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

import {socialUrl, requestUrl} from '../../../utils/urlList';

const useSocialList = (list, toCount, defaultUrl) => {
	const [countList, setCountList] = useState([]);
	const request = async (name, url) => {
		try {
			const {data} = await axios.get(requestUrl(url)[name]);
			const count = name === 'facebook' ? data.engagement.share_count : data.count;

			return Number(count);
		} catch (e) {
			console.error(e);
		}
	};
	const requestCount = useCallback(async url => {
		setCountList(list);

		if (toCount) {
			const newList = await Promise.all(list.map(async ({name, textButton, utm}) => ({
				name,
				textButton,
				url: socialUrl(utm ? url + utm : url)[name],
				count: await request(name, url)
			})));

			setCountList(newList);
		} else {
			const newList = list.map(({name, textButton, utm}) => ({
				name,
				textButton,
				url: socialUrl(utm ? url + utm : url)[name]
			}));

			setCountList(newList);
		}
	}, [list, toCount]);

	useEffect(() => {
		const url = defaultUrl || document.location.href;

		requestCount(url);
	}, [defaultUrl, list, requestCount]);

	return {
		countList
	};
};

export default useSocialList;
