import styled from "styled-components";
import { Flex, Grid,   } from "../../../../components";



 

 

export const Cards =  styled(Grid)`
	@media (max-width: 1200px) {
		grid-template-columns: repeat(auto-fit,  250px)
	}
	@media (max-width: 900px) {
		grid-template-columns: repeat(auto-fit,  minmax(220px, 1fr))
	}
	
`;

 
 
export const Card =  styled("div")<{active: boolean}>`
	 border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	 border-radius: 16px;
	padding: 24px;

	&:nth-child(1) .icon{
		background-color:  ${({ theme }) => theme.palette.Orange["default"]};
	}
	&:nth-child(2) .icon{
		background-color:  ${({ theme }) => theme.palette.Yellow["default"]};
	}
	&:nth-child(3) .icon{
		background-color:  ${({ theme }) => theme.palette.Blue["default"]};
	}
	@media (max-width: 800px) {
		flex-direction: row;
		display: flex;
		padding: 16px;
		& > div:last-child{
			flex: 1;
			& > div {
				height: 4px;
			}
		}
	}
`;
export const Icon =  styled(Flex)`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	margin: 24px 0 60px;
	color:  ${({ theme }) => theme.palette.Black[60]};
	/* @media (max-width: 600px) {
		margin: 24px 0 ;
	} */
	@media (max-width: 800px) {
		margin: 0 16px 0 0;
		height: 30px;
		width: 30px;
	}
`;

 
 