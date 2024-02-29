import styled from "styled-components";
import { Flex } from "../../../../../components";




 
 
  
 
export const Footer =  styled("div")`
	position: absolute;
	bottom: 0;
	width: auto;
	right: 0;
	left: 0;
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
`;
  
 
export const AccountDteial =  styled(Flex)`
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	border: 1px solid   ${({ theme }) => theme?.palette?.Black["20"] };
	border-radius: 5px;
	padding: 30px ;
	box-shadow: ${({ theme }) => theme?.shadows["small"] };
	b {
		margin-left: 8px;
	}
`;

 
 
 