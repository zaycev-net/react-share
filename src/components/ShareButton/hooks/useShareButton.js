import {useState, useEffect, useRef} from 'react';

const useShareButton = () => {
	const [data, setData] = useState(null);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	const toggleVisible = e => {
		e.stopPropagation();

		setVisible(prev => !prev);
	};

	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);

		return () => document.removeEventListener('click', handleClickOutside, true);
	}, []);

	return {
		ref,
		data,
		visible,
		setData,
		toggleVisible
	};
};

export default useShareButton;
