import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item/Item';

import useSocialList from './hooks/useSocialList';

import Root from './SocialList.styled';

const SocialList = ({
	style, className, list, toCount, defaultUrl
}) => {
	const {countList} = useSocialList(list, toCount, defaultUrl);

	return (
		<Root style={style} className={className}>
			{
				countList.map(item => (
					<Item
						key={item.name}
						{...item}
						toCount={toCount}
					/>
				))
			}
		</Root>
	);
};

SocialList.propTypes = {
	defaultUrl: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	toCount: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter', 'telegram']),
		textButton: PropTypes.string,
		utm: PropTypes.string
	}))
};

SocialList.defaultProps = {
	toCount: true,
	list: [
		{
			name: 'vk',
			textButton: 'Вконтакте',
			utm: 'vk'
		},
		{
			name: 'mail',
			textButton: 'Мой мир',
			utm: 'mail'
		},
		{
			name: 'ok',
			textButton: 'Одноклассники',
			utm: 'ok'
		},
		{
			name: 'facebook',
			textButton: 'Facebook',
			utm: 'facebook'
		},
		{
			name: 'twitter',
			textButton: 'Twitter',
			utm: 'twitter'
		},
		{
			name: 'telegram',
			textButton: 'Telegram',
			utm: 'telegram'
		}
	]
};

export default SocialList;
