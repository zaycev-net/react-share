import React from 'react';
import PropTypes from 'prop-types';

import SocialList from '../SocialList/SocialList';

import ShareIcon from '../../assets/share-icon.svg';

import useShareButton from './hooks/useShareButton';

import {Wrapper, Button, Tooltip} from './ShareButton.styled';

const ShareButton = ({
	title, style, className, toCount, list, defaultUrl
}) => {
	const {
		ref, enabled, visible, toggleVisible
	} = useShareButton();

	return (
		<Wrapper ref={ref}>
			<Button
				style={style}
				className={className}
				title={title}
				visible={visible}
				onClick={toggleVisible}
			>
				<ShareIcon/>
				{title}
			</Button>
			{
				enabled
				&& (
					<Tooltip visible={visible}>
						<SocialList
							toCount={toCount}
							list={list}
							url={defaultUrl}
						/>
					</Tooltip>
				)
			}
		</Wrapper>
	);
};

ShareButton.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	toCount: PropTypes.bool,
	list: PropTypes.arrayOf(PropTypes.exact({
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter']),
		textButton: PropTypes.string
	})),
	defaultUrl: PropTypes.string
};

ShareButton.defaultProps = {
	title: 'Поделиться',
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

export default ShareButton;
