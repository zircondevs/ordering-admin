import styled from "styled-components";
import { Flex,   } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	min-height: calc(100vh - 70px);
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
 

 
 
export const StoreStyles =  styled(Flex)`
	border-radius: 16px;
	padding: 24px;
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	background-color:  #fff;
`;

 
export const IconStyles =  styled(Flex)`
	border-radius: 100%;
	background-color:  ${({ theme }) => theme.palette.Grey[6]};
`;
export const DropdownContentStyles =  styled(Flex)`
	font-weight: ${({ theme}) => theme.typography.fontWeight[700]};
	svg {
		margin-right: 8px;
	}
`;

 
 
 