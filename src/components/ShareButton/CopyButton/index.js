import React from 'react';
import PropTypes from 'prop-types';

import renderIcon from '../../../utils/renderIcon';

import { Root, Info, TextInfo } from './styled.index';

const CopyLinkButton = ({ copyTitle, handleCopyLink }) => (
	<Root onClick={handleCopyLink} data-qa="share-copy">
		<Info>
			{renderIcon('copyLink')}
			<TextInfo>{copyTitle || 'Копировать ссылку'}</TextInfo>
		</Info>
	</Root>
);

export default CopyLinkButton;

CopyLinkButton.propTypes = {
	copyTitle: PropTypes.string,
	handleCopyLink: PropTypes.func
};
