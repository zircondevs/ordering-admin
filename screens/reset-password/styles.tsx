import styled from "styled-components";
import { Flex, Grid } from "../../components";



 
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
 

 
export const InputsFrame =  styled(Grid)`
margin: auto;
margin-top: 32px;
	&#InputsFrame {
		@media (max-width: 400px) {
			width: 100%
		}
	}
`;
