import React from 'react';
import {ShareButton, SocialList} from 'react-share';

const App = () => (
	<div className="wrapper">
		<ShareButton copyTitle='Копировать ссылку'/>
		<SocialList/>
	</div>
);

export default App;
