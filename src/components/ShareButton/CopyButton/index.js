import React from 'react';
import PropTypes from 'prop-types';

import renderIcon from '../../../utils/renderIcon';

import { Root, Info, TextInfo } from './styled.index';

const CopyLinkButton = ({ textButton, onClick }) => (
	<Root onClick={onClick} data-qa="share-copy">
		<Info>
			{renderIcon('copyLink')}
			<TextInfo>{textButton || 'Копировать ссылку'}</TextInfo>
		</Info>
	</Root>
);

CopyLinkButton.propTypes = {
	textButton: PropTypes.string,
	onClick: PropTypes.func
};

export default CopyLinkButton;
