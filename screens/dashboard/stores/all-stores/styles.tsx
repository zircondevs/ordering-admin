import styled from "styled-components";
import { Flex, Grid,   } from "../../../../components";
import { alphaColorsRank, colorType,   } from "../../../../lib";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

 
export const StoreCards =  styled(Grid)`
	@media (max-width: 1300px) {
		grid-template-columns: 1fr 1fr 1fr
	}
	@media (max-width: 1200px) {
		grid-template-columns: 1fr   1fr
	}
	@media (max-width: 900px) {
		grid-template-columns:     1fr
	}
	@media (max-width: 700px) {
		grid-template-columns:   1fr  1fr
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr
	}
 
`;
 

 
 
export const StoreStyles =  styled(Flex)`
	border-radius: 16px;
	padding: 24px;
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	@media (max-width: 600px) {
		padding: 15px;
	}
`;


export const IconStyles =  styled(Flex)<{name: string}>`
background-color:  ${({name}) => alphaColorsRank[name as colorType]};
	border-radius: 100%;
	min-width: auto;
	min-width: 50px;
	min-height: 50px;
`;
export const DropdownContentStyles =  styled(Flex)`
	font-weight: ${({ theme}) => theme.typography.fontWeight[700]};
	svg {
		margin-right: 8px;
	}
`;

 
