import styled from "styled-components";
import { Flex,   } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 64px  40px 0;
	margin-bottom: 40px;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	@media (max-width: 1000px) {
		padding: 40px  4% 0;
	}
`;


export const Container1 =  styled(Flex)`
	padding: 0  40px 40px;
	@media (max-width: 1000px) {
		padding: 0  4% 40px;
	}
`;
 

 
 
export const SearchStyles =  styled(Flex)`
	& > div {
		max-width: 300px;
		min-width: 250px;
	}
	& > button {
		margin-right: 16px;
		min-width: auto;
	}
`;


 
 
export const IconStyles =  styled(Flex)`
	border-radius: 100%;
	background-color:  ${({ theme }) => theme.palette.Grey[6]};
`;
 

 
 
export const NavStyles =  styled("div")`
	background-color:  ${({ theme }) => theme.palette.common["white"]};
	margin: 0 -40px;
	width: auto;
	padding: 10px 40px;
	@media (max-width: 1000px) {
		margin: 0 -4% 0;
		padding: 4%;
	}
`;
 

 
 
 