import React from 'react';
import {ShareButton, SocialList} from 'react-share';

const App = () => (
	<div className="wrapper">
		<ShareButton copyTitle='Копировать ссылку' callback={() => console.log('Share click')} />
		<SocialList/>
	</div>
);

export default App;
