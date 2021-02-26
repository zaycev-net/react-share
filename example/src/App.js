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

	return (
		<div className="wrapper">
			{/* eslint-disable-next-line no-console */}
			<ShareButton callback={() => console.log('Share click')} list={list} />
			<SocialList list={list} />
		</div>
	);
};

export default App;
