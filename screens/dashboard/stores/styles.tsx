import styled from "styled-components";
import { Flex,   } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	min-height: calc(100vh - 70px);
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 64px  40px 0;
	margin-bottom: 40px;
	@media (max-width: 700px) {
		padding: 40px  4%;
	}
`;
 
 
 
export const TabsStyles =  styled("div")`
	width: 100%;
	& > div > div  > *{
		padding: 0  40px;
	}
`;
