import styled from "styled-components";
import { Flex,   } from "../../../../components";
import { alphaColorsRank, colorType,   } from "../../../../lib";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

 
export const Container1 =  styled(Flex)`

@media (max-width: 700px) {
		padding: 0  4%;
	}
`;
 

 
 
export const StoreStyles =  styled(Flex)`
	border-radius: 16px;
	padding: 24px;
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
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

 
