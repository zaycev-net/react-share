import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

import {socialUrl, requestUrl} from '../../../utils/urlList';

const useSocialList = (list, toCount, defaultUrl, oldData, setData) => {
	const [countList, setCountList] = useState([]);
	const request = async (name, url) => {
		const {data} = await axios.get(requestUrl(url)[name]);
		const count = name === 'facebook' ? data.engagement.share_count : data.count;

		return Number(count);
	};
	const requestCount = useCallback(async url => {
		if (oldData && oldData.length) {
			setCountList(oldData);
		} else {
			setCountList(list);
			if (setData) setData(list);
		}

		if (toCount && !oldData) {
			const newList = await Promise.all(list.map(async ({name, textButton}) => ({
				name,
				textButton,
				url: socialUrl(url)[name],
				count: await request(name, url)
			})));

			setCountList(newList);
			if (setData) setData(newList);
		}
	}, [defaultUrl, list]);

	useEffect(() => {
		const url = defaultUrl || document.location.href;

		requestCount(url);
	}, [list, requestCount]);

	return {
		countList
	};
};

export default useSocialList;
