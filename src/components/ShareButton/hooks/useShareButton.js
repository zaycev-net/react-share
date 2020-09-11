import {useState, useEffect, useRef} from 'react';

const useShareButton = (callback, defaultUrl) => {
	const [enabled, setEnabled] = useState(false);
	const [visible, setVisible] = useState(false);
	const [copyLink, setCopyLink] = useState('');
	const ref = useRef(null);

	const toggleVisible = () => {
		setEnabled(true);
		setVisible(prev => !prev);
	};

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false);
		}

		else if (callback) {
			callback();
		}
	};

	const handleCopyLink = () => {
		navigator.clipboard.writeText(`${copyLink}`);
		setVisible(false);
	};

	useEffect(() => {
		const url = defaultUrl || document.location.href;

		setCopyLink(url);
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, []);

	return {
		ref,
		enabled,
		visible,
		toggleVisible,
		handleCopyLink
	};
};

export default useShareButton;
