export const requestUrl = url => ({
	vk: `https://zaycev.net/api/external/social/vk?url=${url}`,
	mail: `https://zaycev.net/api/external/social/mail?url=${url}`,
	ok: `https://zaycev.net/api/external/social/ok?url=${url}`,
	facebook: `https://graph.facebook.com/?fields=engagement&access_token=554151405320632|TC5PKffr4rEmq5idMRyGsmdhTzg&id=${url}`,
	twitter: `https://counts.twitcount.com/counts.php?url=${url}`
});

export const socialUrl = url => ({
	vk: `https://vk.com/share.php?&url=${url}`,
	mail: `https://connect.mail.ru/share?share_url=${url}`,
	ok: `https://connect.ok.ru/offer?url=${url}`,
	facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
	twitter: `https://twitter.com/intent/tweet?url=${url}`
});
