import React from 'react';
import PropTypes from 'prop-types';

import renderIcon from './utils/renderIcon';

import {Root, Info, Count} from './Item.styled';

const SocialListItem = ({
	name, textButton, count, countShare
}) => {

	return (
		<Root name={name}>
			<Info>
				{renderIcon(name)}
				{textButton}
			</Info>
			{
				countShare
				&& (
					<Count>
						{count}
					</Count>
				)
			}
		</Root>
	);
};

SocialListItem.propTypes = {
	name: PropTypes.string.isRequired,
	textButton: PropTypes.string.isRequired,
	count: PropTypes.number,
	countShare: PropTypes.bool
};

SocialListItem.defaultProps = {
	count: 0,
	countShare: true
};

export default SocialListItem;
