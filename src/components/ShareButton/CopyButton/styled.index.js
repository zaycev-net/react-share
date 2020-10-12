import styled from 'styled-components';

export const Root = styled.li`
	position: relative;
	z-index: 13;
	border: 1px solid #465468;
	cursor: pointer;
	outline: none;
	background: transparent;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: #465468;

		span {
			color: #fff;
		}
		svg {
			path {
				fill: #fff;
			}
			rect {
				fill: #fff;
			}
		}
	}
`;

export const Info = styled.button`
	display: flex;
	align-items: center;
	padding: 0.3rem 0.5em;
	width: 100%;
	outline: none;
	border: none;
	background: transparent;
	cursor: pointer;

	svg {
		path,
		rect {
			transition: all 0.3s ease-in-out;
		}
	}
`;

export const TextInfo = styled.span`
	font-size: 0.875rem;
	list-style: none;
	font-weight: 400;
	font-family: Roboto, sans-serif;
	color: #465468;
	margin-left: 0.5em;
	transition: all 0.3s ease-in-out;
`;
