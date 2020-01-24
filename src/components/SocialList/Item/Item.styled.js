import styled, {css} from 'styled-components';

const color = {
	vk: '#526e8f',
	mail: '#00468c',
	ok: '#f59310',
	facebook: '#2851a3',
	twitter: '#00b7ec'
};

export const Root = styled.li`
	margin-bottom: 1em;
	
	&:last-child {
		margin-bottom: 0;
	}
    
    a {
		min-width: 13em;
		border: 1px solid #fff;
	    line-height: 1.5;
	    text-align: left;
	    cursor: pointer;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    color: #000;
	    background-color: transparent;
	    transition: background-color .2s ease-in-out, color .2s ease-in-out;
	    position: relative;
	    z-index: 1;
	    text-decoration: none; 
	    
	    &:hover {
			background-color: #fff;
			color: #fff;
			
			svg {
				fill: #fff;
			}
		}
		
		& > div > svg {
	        width: 1rem;
	        height: 1rem;
	        padding: 0.3rem .5em;
	        fill: #000;
	        transition: fill .2s ease-in-out;
	        margin-right: 0;
	    }
		
		${({name}) => name && css`
			border: 1px solid ${color[name]};
			color: ${color[name]};
			
			& > div > svg {
				fill: ${color[name]};
			}
			
			&:hover {
				background-color: ${color[name]};
			}
		`}
    }
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	margin-right: 1em;
`;

export const Count = styled.div`
	margin-right: .5em;
	font-size: .75rem;
`;
