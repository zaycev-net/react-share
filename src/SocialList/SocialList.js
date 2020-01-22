import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item/Item';

import Root from './SocialList.styled';

const SocialList = ({
	style, className, list, countShare
}) => (
	<Root style={style} className={className}>
		{
			list.map(item => (
				<Item key={item.name} {...item} countShare={countShare}/>
			))
		}
	</Root>
);

SocialList.propTypes = {
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	countShare: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter']),
		textButton: PropTypes.string
	}))
};

SocialList.defaultProps = {
	countShare: true,
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
