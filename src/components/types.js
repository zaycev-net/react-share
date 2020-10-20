import PropTypes from 'prop-types';

const listType = PropTypes.arrayOf(
	PropTypes.exact({
		name: PropTypes.oneOf(['vk', 'mail', 'ok', 'facebook', 'twitter', 'telegram', 'viber', 'copy']),
		textButton: PropTypes.string,
		utm: PropTypes.string,
		onClick: PropTypes.func
	})
);

export default listType;
