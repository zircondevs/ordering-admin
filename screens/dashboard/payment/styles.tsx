import styled from "styled-components";
import { Flex, Grid, Small,  } from "../../../components";






 
 
export const Main =  styled(Flex)`
	width: auto; 
`;
 

export const OverviewStyles =  styled(Flex)`
	flex: 1;
	padding: 0  40px;
	@media (max-width: 700px) {
		padding: 0  4%;
	}
`;

export const DescriptionStyle =  styled(Small)`
	display: inline-block;
`;
 
 
 
 

 
export const TabsStyles =  styled("div")`
		width: 100%;
		/* flex: 1; */
		& > div > div  > *{
			padding: 0  40px;
			@media (max-width: 700px) {
				padding: 0  4%;
			}
		}
`;

export const Cards =  styled(Grid)`
	padding: 0  40px;
	@media (max-width: 700px) {
		padding: 0  4%;
	}
`;




export const Card =  styled(Flex)<{active: boolean}>`
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	border-radius: 16px;
	padding: 24px ;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.palette.Grey["8"]};
	box-shadow: ${({ theme }) => theme.shadows.small};
	transition: 200ms linear;
	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.middle};
		transform: translateY(-3px) scale(1.02);
	}
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
	color:  ${({ theme }) => theme.palette.Black[60]};
`;

 

 