import { useState, useEffect, useRef, useCallback } from 'react';

const useShareButton = (callback, defaultUrl) => {
	const [enabled, setEnabled] = useState(false);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const toggleVisible = () => {
		setEnabled(true);
		setVisible((prev) => !prev);
	};

	const hideTooltip = () => {
		setVisible(false);
	}

	const handleClickOutside = useCallback(
		(event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				hideTooltip();
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
		toggleVisible,
		hideTooltip
	};
};

export default useShareButton;
