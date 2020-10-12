import React from 'react';
import PropTypes from 'prop-types';

import listType from '../types';

import Item from './Item';
import CopyLinkButton from '../ShareButton/CopyButton';

import useSocialList from './hooks/useSocialList';

import { listDefaultProps, toCountDefaultProps } from '../configs';

import Root from './styled.index';

const SocialList = ({ style, className, list, toCount, defaultUrl }) => {
	const { countList } = useSocialList(list, toCount, defaultUrl);

	return (
		<Root style={style} className={className}>
			{countList.map((item) => {
				if (item.name === 'copy') {
					return <CopyLinkButton key={item.name} {...item} />;
				}

				return <Item key={item.name} {...item} toCount={toCount} />;
			})}
		</Root>
	);
};

SocialList.propTypes = {
	defaultUrl: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	toCount: PropTypes.bool,
	list: listType
};

SocialList.defaultProps = {
	toCount: toCountDefaultProps,
	list: listDefaultProps
};

export default SocialList;
