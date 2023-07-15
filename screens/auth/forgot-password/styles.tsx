import styled from "styled-components";
import { Flex } from "../../../components";



 
export const Main =  styled(Flex)`
	min-height: calc(100vh - 70px);
	width: auto;
	& > div {
		border-radius: 16px;
		overflow: hidden;
		max-width: 500px;
		background-color: white;
	}
`;
 

 