import styled from "styled-components";
import { Flex,  } from "../../../components";






 
 
export const Main =  styled(Flex)`
	width: auto; 
	background-color: white;
`;
 

export const OverviewStyles =  styled("div")`
	flex: 1;
	padding: 0  40px;
	background-color: ${({ theme }) => theme.palette.Black[0]};
	@media (max-width: 700px) {
		padding: 0  4%;
	}
`;
 
 

 