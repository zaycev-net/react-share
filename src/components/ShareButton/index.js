import React from 'react';
import PropTypes from 'prop-types';

import SocialList from '../SocialList';

import ShareIcon from '../../assets/share-icon.svg';

import useShareButton from './hooks/useShareButton';

import { Wrapper, Button, Tooltip } from './styled.index';

const ShareButton = ({ title, style, className, toCount, list, defaultUrl, callback }) => {
	const { ref, enabled, visible, toggleVisible, handleCopyLink } = useShareButton(callback, defaultUrl);

	return (
		<Wrapper ref={ref} className={className} style={style}>
			<Button title={title} visible={visible} onClick={toggleVisible}>
				<ShareIcon />
				{title}
			</Button>
			{enabled && (
				<Tooltip visible={visible}>
					<SocialList toCount={toCount} list={list} defaultUrl={defaultUrl} handleCopyLink={handleCopyLink} />
				</Tooltip>
			)}
		</Wrapper>
	);
};

ShareButton.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.objectOf(PropTypes.string),
	toCount: PropTypes.bool,
	list: PropTypes.arrayOf(
		PropTypes.exact({
			name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter', 'telegram', 'copy']),
			textButton: PropTypes.string,
			utm: PropTypes.string
		})
	),
	defaultUrl: PropTypes.string,
	callback: PropTypes.func
};

ShareButton.defaultProps = {
	title: 'Поделиться',
	toCount: true,
	list: [
		{
			name: 'vk',
			textButton: 'Вконтакте',
			utm: 'vk'
		},
		{
			name: 'mail',
			textButton: 'Мой мир',
			utm: 'mail'
		},
		{
			name: 'ok',
			textButton: 'Одноклассники',
			utm: 'ok'
		},
		{
			name: 'facebook',
			textButton: 'Facebook',
			utm: 'facebook'
		},
		{
			name: 'twitter',
			textButton: 'Twitter',
			utm: 'twitter'
		},
		{
			name: 'telegram',
			textButton: 'Telegram',
			utm: 'telegram'
		},
		{
			name: 'copy',
			textButton: 'Копировать ссылку',
			utm: 'copy'
		}
	]
};

export default ShareButton;
