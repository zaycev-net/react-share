import React from 'react';
import PropTypes from 'prop-types';

import listType from '../types';

import SocialList from '../SocialList';

import ShareIcon from '../../assets/share-icon.svg';

import useShareButton from './hooks/useShareButton';

import { Wrapper, Button, Tooltip } from './styled.index';
import { listDefaultProps, toCountDefaultProps } from '../configs';

const ShareButton = ({ title, style, className, toCount, list, defaultUrl, callback, trackId, isSubscribe, trackName }) => {
	const { ref, enabled, visible, toggleVisible } = useShareButton(callback, defaultUrl);

	return (
		<Wrapper ref={ref} className={className} style={style}>
			<Button title={title} visible={visible} onClick={toggleVisible}>
				{!isSubscribe && <ShareIcon />}
				{title}
			</Button>
			{enabled && (
				<Tooltip visible={visible}>
					<SocialList toCount={toCount} list={list} defaultUrl={defaultUrl} trackId={trackId} isSubscribe={isSubscribe} trackName={trackName}/>
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
	list: listType,
	defaultUrl: PropTypes.string,
	callback: PropTypes.func,
	trackId: PropTypes.number,
	isSubscribe: PropTypes.bool
};

ShareButton.defaultProps = {
	title: 'Поделиться',
	toCount: toCountDefaultProps,
	list: listDefaultProps
};

export default ShareButton;
