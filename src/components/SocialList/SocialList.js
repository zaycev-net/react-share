import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item/Item';

import useSocialList from './hooks/useSocialList';

import Root from './SocialList.styled';

const SocialList = ({
	style, className, list, toCount, defaultUrl, oldData, setData
}) => {
	const {countList} = useSocialList(list, toCount, defaultUrl, oldData, setData);

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
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter']),
		textButton: PropTypes.string
	})),
	oldData: PropTypes.array,
	setData: PropTypes.func
};

SocialList.defaultProps = {
	toCount: true,
	list: [
		{
			name: 'vk',
			textButton: 'Вконтакте'
		},
		{
			name: 'mail',
			textButton: 'Мой мир'
		},
		{
			name: 'ok',
			textButton: 'Одноклассники'
		},
		{
			name: 'facebook',
			textButton: 'Facebook'
		},
		{
			name: 'twitter',
			textButton: 'Twitter'
		}
	]
};

export default SocialList;
