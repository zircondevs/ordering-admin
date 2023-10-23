import styled from "styled-components";
import { Flex } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 64px  40px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.Black[20]};
	margin-bottom: 40px;
	@media (max-width: 700px) {
		padding: 40px  4%;
	}
`;

export const Container1 =  styled(Flex)`
	padding: 0  40px;
	@media (max-width: 700px) {
		padding: 0  4%;
	}
`;

 
 
export const TabsStyles =  styled("div")`
		width: 100%;
		& > div > div  > *{
			padding: 0  40px;
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

 
 

 
 
 