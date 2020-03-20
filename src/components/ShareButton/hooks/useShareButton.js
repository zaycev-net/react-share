import {useState, useEffect, useRef} from 'react';

const useShareButton = callback => {
	const [enabled, setEnabled] = useState(false);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const toggleVisible = () => {
		setEnabled(true);
		setVisible(prev => !prev);
	};

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false);
		}

		if (callback) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, []);

	return {
		ref,
		enabled,
		visible,
		toggleVisible
	};
};

export default useShareButton;
