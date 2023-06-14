import styled from "styled-components";
import { Flex, Grid,   } from "../../../../components";



 

 

export const Cards =  styled(Grid)`
	@media (max-width: 1200px) {
		grid-template-columns: repeat(auto-fit,  250px)
	}
`;

 
 
export const Card =  styled("div")<{active: boolean}>`
	 border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	 border-radius: 16px;
	padding: 24px;
	@media (max-width: 600px) {
		padding: 16px;
	}
	&:nth-child(1) .icon{
		background-color:  ${({ theme }) => theme.palette.Orange[80]};
	}
	&:nth-child(2) .icon{
		background-color:  ${({ theme }) => theme.palette.Yellow[0]};
	}
	&:nth-child(3) .icon{
		background-color:  ${({ theme }) => theme.palette.Blue[0]};
	}
`;
export const Icon =  styled(Flex)`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	margin: 24px 0 64px;
	/* background-color:  ${({ theme }) => theme.palette.Black[10]}; */
	color:  ${({ theme }) => theme.palette.Black[60]};
`;

 
 