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
 

export const ModalSpacer =  styled(Flex)`
	padding: 60px 64px 60px;
	@media (max-width: 1000px) {
		padding: 24px 24px ;

	}
`;