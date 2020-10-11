import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

import {socialUrl, requestUrl} from '../../../utils/urlList';

const useSocialList = (list, toCount, defaultUrl) => {
	const [countList, setCountList] = useState([]);
	const request = async (name, url) => {
		try {
		  if (name !== 'telegram') {
				const {data} = await axios.get(requestUrl(url)[name]);
				const count = name === 'facebook' ? data.engagement.share_count : data.count;

				return Number(count);
			}
		} catch (e) {
			console.error(e);
		}
	};
	const requestCount = useCallback(async url => {
		setCountList(list);

		const newList = await Promise.all(list.map(async ({name, textButton, utm}) => {
			const url = socialUrl(utm ? url + utm : url)[name];

			if (name === 'copy') {
				return {
					name,
					textButton,
					url
				}
			}
			return {
				name,
				textButton,
				url,
				count: toCount ? await request(name, url) : null
			}
		}));

		setCountList(newList);
	}, [list, toCount]);

	useEffect(() => {
		const url = defaultUrl || document.location.href;

		void requestCount(url);
	}, [defaultUrl, list, requestCount]);

	return {
		countList
	};
};

export default useSocialList;
