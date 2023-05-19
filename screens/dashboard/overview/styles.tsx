import styled from "styled-components";
import { Flex, Grid,   } from "../../../components";
import { PRIMARY_COLOR } from "../../../hooks/colors";



 
export const Main =  styled(Flex)`
	width: auto;
	min-height: calc(100vh - 70px);
`;
 

export const OverviewStyles =  styled("div")`
	flex: 1;
	padding: 0  40px;
`;
 

export const Cards =  styled(Grid)`
	@media (max-width: 1200px) {
		grid-template-columns: repeat(auto-fit,  250px)
	}
`;

 
 
export const Card =  styled("div")<{active: boolean}>`
	 border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	 border-radius: 16px;
	padding: 24px;
	background-color:  ${({ active }) => active && PRIMARY_COLOR[0]};

`;
export const Icon =  styled(Flex)`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	margin: 24px 0 64px;
	background-color:  ${({ theme }) => theme.palette.Black[10]};
	color:  ${({ theme }) => theme.palette.Black[60]};

`;

 
 