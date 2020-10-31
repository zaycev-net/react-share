import React from 'react';
import { ShareButton, SocialList } from 'react-share';

const App = () => {
	const list = [
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
			utm: 'copy',
			onClick: () => {
				// eslint-disable-next-line no-alert
				alert('Ссылка скопирована');
			}
		}
	];

	const listSubscribe = [
		{
			name: 'telegram',
			textButton: 'Telegram',
			defaultUrl: `https://t.me/zaycevnetbot?start=trackId2167057`
		},
		{
			name: 'viber',
			textButton: 'Viber',
			defaultUrl: `viber://pa?chatURI=zaycevnet&context=trackId2167057`
		}
	]

	return (
		<div className="wrapper">
			{/* eslint-disable-next-line no-console */}
			<ShareButton callback={() => console.log('Share click')} list={list} />
			<ShareButton callback={() => console.log('Share click')} list={listSubscribe} isSubscribe title='Subscribe'/>
			<SocialList list={list} />
		</div>
	);
};

export default App;
