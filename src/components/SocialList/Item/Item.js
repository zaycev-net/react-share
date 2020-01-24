import React from 'react';
import PropTypes from 'prop-types';

import renderIcon from '../../../utils/renderIcon';

import {Root, Info, Count} from './Item.styled';
import useSocialListItem from './hooks/useSocialListItem';

const SocialListItem = ({
	name, textButton, count, toCount, url
}) => {
	const {clickHandler} = useSocialListItem(name, url);

	return (
		<Root name={name}>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				title={textButton}
				onClick={clickHandler}
			>
				<Info>
					{renderIcon(name)}
					{textButton}
				</Info>
				{
					toCount
					&& (
						<Count>
							{count > 999 ? `${(count / 1000).toFixed()}K` : count}
						</Count>
					)
				}
			</a>
		</Root>
	);
};

SocialListItem.propTypes = {
	name: PropTypes.string.isRequired,
	textButton: PropTypes.string.isRequired,
	url: PropTypes.string,
	count: PropTypes.number,
	toCount: PropTypes.bool
};

SocialListItem.defaultProps = {
	count: 0
};

export default SocialListItem;
