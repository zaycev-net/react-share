import React from 'react';
import PropTypes from 'prop-types';

import Root from './ShareButton.styled';

import ShareIcon from '../assets/share-icon.svg';

const ShareButton = ({title, style, className}) => (
	<Root type="button" style={style} className={className} title={title}>
		<ShareIcon/>
		{title}
	</Root>
);

ShareButton.propTypes = {
	title: PropTypes.string.isRequired,
	style: PropTypes.object,
	className: PropTypes.string
};

ShareButton.defaultProps = {
	style: {},
	className: ''
};

export default ShareButton;
