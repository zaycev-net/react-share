import { useState, useEffect, useRef, useCallback } from 'react';

const useShareButton = (callback, defaultUrl) => {
	const [enabled, setEnabled] = useState(false);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const toggleVisible = () => {
		setEnabled(true);
		setVisible((prev) => !prev);
	};

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setVisible(false);
			} else if (callback) {
				callback();
			}
		},
		[callback]
	);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, [defaultUrl, handleClickOutside]);

	return {
		ref,
		enabled,
		visible,
		toggleVisible
	};
};

export default useShareButton;
