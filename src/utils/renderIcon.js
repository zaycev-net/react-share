import React from 'react';

import VK from '../assets/social/vk.svg';
import Mail from '../assets/social/mail.svg';
import OK from '../assets/social/ok.svg';
import Facebook from '../assets/social/facebook.svg';
import Twitter from '../assets/social/twitter.svg';
import Telegram from '../assets/social/telegram.svg';

const renderIcon = name => {
	switch (name) {
		case 'vk':
			return <VK/>;
		case 'mail':
			return <Mail/>;
		case 'ok':
			return <OK/>;
		case 'facebook':
			return <Facebook/>;
		case 'twitter':
			return <Twitter/>;
		case 'telegram':
			return <Telegram/>;
	}
};

export default renderIcon;
