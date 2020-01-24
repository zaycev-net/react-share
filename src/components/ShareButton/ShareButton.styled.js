import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const Button = styled.button`
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
	background-color: ${({visible}) => (visible ? '#e5f6fb' : '#fff')};
	outline: none;
	color: #00aadc;
	font-size: .8125em;
	transition: background-color .2s ease-in-out;
	position: relative;
	
	&:hover {
		background-color: #e5f6fb;
	}
	
	svg {
		margin-right: .625rem;
	}
`;

export const Tooltip = styled.div`
    position: absolute;
    top: 4em;
    left: 50%;
    z-index: 10;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    background: #fff;
    padding: 1em;
    transform: translateX(-50%);
    min-width: 13rem;
    
    &:before {
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
    
    &:after {
        content: '';
        background-color: #fff;
        position: absolute;
        width: 3.125rem;
	    height: 2rem;
	    left: 50%;
	    top: 0;
		transform: translateX(-50%);
    }
`;
