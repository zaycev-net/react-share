import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  z-index: 13;
  margin-top: 1em;
  border: 1px solid #465468;
  cursor: pointer;
  
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

export const Info = styled.div`
	display: flex;
	align-items: center;
	padding: 0.3rem .5em;
`;

export const TextInfo = styled.span`  
	font-size: .875rem;
	list-style: none;
	font-weight: 400;
	font-family: Roboto, sans-serif;
	color: #465468;
	margin-left: .5em;
`;
