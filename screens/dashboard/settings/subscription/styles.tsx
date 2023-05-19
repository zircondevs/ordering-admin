import styled from "styled-components";
import { Flex,   } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 0  0;
`;

 
 
 
 
export const Card =  styled(Flex)`
	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.palette.Grey[5]};
`;
 
 
export const List =  styled(Flex)`
	& > div{
		height: 15px;
		width: 15px;
		margin-right: 8px;
		svg {
			bottom: 0;
			top: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}
		&:before , input{ 
	 
			height: 15px;
			width: 15px;
		}
	}
`;
 
 
 