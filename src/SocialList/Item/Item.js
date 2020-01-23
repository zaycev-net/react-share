import React from 'react';
import PropTypes from 'prop-types';

import renderIcon from './utils/renderIcon';

import {Root, Info, Count} from './Item.styled';
import useSocialListItem from './hooks/useSocialListItem';

const SocialListItem = ({
	name, textButton, count, toCount, defaultUrl
}) => {
	const {url, socialUrl} = useSocialListItem(defaultUrl);

	return (
		<Root name={name}>
			<a
				href={`${socialUrl[name]}${url}`}
				target="_blank"
				rel="noopener noreferrer"
				title={textButton}
			>
				<Info>
					{renderIcon(name)}
					{textButton}
				</Info>
				{
					toCount
					&& (
						<Count>
							{count}
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
	defaultUrl: PropTypes.string,
	count: PropTypes.number,
	toCount: PropTypes.bool
};

SocialListItem.defaultProps = {
	count: 0
};

export default SocialListItem;
