import React from 'react';
import PropTypes from 'prop-types';
import {Root, Info, TextInfo} from './CopyButtonLink.styled';
import renderIcon from '../../../utils/renderIcon';

const CopyLinkButton = ({copyTitle, handleCopyLink}) => (
	<Root onClick={handleCopyLink} data-qa="share-copy">
		<Info>
			{renderIcon('copylink')}
			<TextInfo>
				{copyTitle || 'Копировать ссылку'}
			</TextInfo>
		</Info>
	</Root>
);

export default CopyLinkButton;

CopyLinkButton.propTypes = {
	copyTitle: PropTypes.string,
	handleCopyLink: PropTypes.func
};
