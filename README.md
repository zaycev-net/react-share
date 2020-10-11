# react-social-btn

> Buttons "Share" on social networks with the number of users to rate for React.

[![NPM](https://img.shields.io/npm/v/react-share.svg)](https://www.npmjs.com/package/react-share) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
This package requires `node >= 4`, but we recommend `node >= 8`.

```bash
yarn add react-social-btn
```

## Usage

```jsx
import React from 'react';

import {ShareButton, SocialList} from 'react-social-btn';

const Example = () => {
    const list = [
        {
            name: 'vk',
            textButton: 'Vkontakte',
            utm: '?utm' //optional
        },
        {
            name: 'mail',
            textButton: 'My@Mail.ru',
            utm: '?utm' //optional
        },
        {
            name: 'ok',
            textButton: 'Odnoklassniki',
            utm: '?utm' //optional
        },
        {
            name: 'facebook',
            textButton: 'Facebook',
            utm: '?utm' //optional
        },
        {
            name: 'twitter',
            textButton: 'Twitter',
            utm: '?utm' //optional
        },
        {
            name: 'telegram',
            extButton: 'Telegram',
            utm: '?utm' //optional
        },
        {
            name: 'copy',
            extButton: 'Copy link',
            utm: '?utm' //optional
        }
    ];
 
    return (
        <>
            <ShareButton
                title="Share"
                style={{
                    marginBottom: '1em'
                }}
                className="share"
                toCount={true}
                list={list}
                defaultUrl="https://zaycev.net"
            />
            <SocialList
                style={{
                    marginBottom: '1em'
                }}
                className="share-list"
                list={list}
                toCount={true}
                defaultUrl="https://zaycev.net"
            />
        </>
    );
};
```

### Props

#### ShareButton

Name props | Default | Optional props | Description
--- | --- | --- | ---
`title` | Поделиться | | Title button
`style` | | | Other styles from Button
`className` | | | Extra className from Button
`toCount` | true | true/false | Enabled/Disabled count social share
`list` | All social | array |  List name and title button  
`defaultUrl` | | | Default Url
`callback` | | | Callback from button click

#### SocialList

Name props | Default | Optional props | Description
--- | --- | --- | ---
`style` | | | Other styles from Button
`className` | | | Extra className from Button
`toCount` | true | true/false | Enabled/Disabled count social share
`list` | All social | array |  List name and title button  
`defaultUrl` | | | Default Url

## License

MIT © [Zaycev.net](https://github.com/zaycev-net)
