import styled from 'styled-components';

const Root = styled.button`
	margin: 0;
	border: 1px solid #00aadc;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	border-radius: 4px;
	font-family: 'Roboto', sans-serif;
	cursor: pointer;
	padding: .7195rem .625rem;
	background-color: #fff;
	outline: none;
	color: #00aadc;
	font-size: .8125em;
	transition: background-color .2s ease-in-out;
	
	&:hover {
		background-color: #e5f6fb;
	}
	
	svg {
		margin-right: .625rem;
	}
`;

export default Root;
