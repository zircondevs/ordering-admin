import styled from "styled-components";
import { Flex } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 0  40px;
`;

 
 
export const TabsStyles =  styled("div")`
	width: 100%;
	& > div > div  > *{
		padding: 0  40px;
	}
`;

 
export const TableHeadStyle =  styled(Flex)`
	border-radius: 16px;
	margin-top: 40px;
	& > div {
		& > div {
			max-width: 300px;
			@media (max-width: 900px) {
				max-width: unset;
			}
		}
	}
 
`;
 
 
export const SearchSection =  styled(Flex)`
	@media (max-width: 900px) {
		display: grid;
		grid-gap: 16px;
		justify-content: stretch;
	}
 
`;
 