import styled from "styled-components";
import { Flex, Grid,   } from "../../../../components";



 

 

export const Cards =  styled(Grid)`
 
`;

 
 
export const Card =  styled(Flex)<{active: boolean}>`
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	border-radius: 16px;
	padding: 24px;
	justify-content: flex-start;
	@media (max-width: 600px) {
		padding: 16px;
	}
	&:nth-child(1) .icon{
		background-color:  ${({ theme }) => theme.palette.Orange["default"]};
	}
	&:nth-child(2) .icon{
		background-color:  ${({ theme }) => theme.palette.Yellow["default"]};
	}
	&:nth-child(3) .icon{
		background-color:  ${({ theme }) => theme.palette.Blue["default"]};
	}
`;
export const Icon =  styled(Flex)`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	margin: 0 24px 0 0;
	color:  ${({ theme }) => theme.palette.Black[60]};
`;

 
 