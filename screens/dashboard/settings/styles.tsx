import styled from "styled-components";
import { Flex } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	margin-bottom: 24px;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
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

 
 
 