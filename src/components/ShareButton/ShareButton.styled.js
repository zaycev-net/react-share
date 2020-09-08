import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const Button = styled.button`
	margin: 0;
	border: 1px solid #DA8320;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	border-radius: 4px;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	padding: .625rem .75rem;
	background-color: ${({visible}) => (visible ? '#e5f6fb' : '#fff')};
	outline: none;
	color: #DA8320;
	font-size: .875rem;
	transition: background-color .2s ease-in-out;
	position: relative;
	min-height: 2.5rem;
	
	&:hover {
		background-color: #e5f6fb;
	}
	
	svg {
		margin-right: .625rem;
		width: .75rem;
		height: .875rem;
	}
`;

export const Tooltip = styled.div`
	position: absolute;
	top: 4em;
	left: 50%;
	z-index: 10;
	min-width: 13rem;
	transform: translateX(-50%);
	box-sizing: border-box;
	box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
	background: #fff;
	padding: 1em;
	
	&:after {
		content: '';
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: -8px;
		width: 1.875rem;
		height: 1.875rem;
		transform: translateX(-50%) rotate(45deg);
		box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
		z-index: 0;
	}
	
	&:before {
		content: '';
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
	}

    ${({visible}) => !visible && css`
		display: none;
	`}
`;
