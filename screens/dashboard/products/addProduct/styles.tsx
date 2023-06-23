import styled from "styled-components";
import { Flex } from "../../../../components";





 
 
  
 
export const Footer =  styled("div")`
	position: absolute;
	bottom: 0;
	width: auto;
	right: 0;
	left: 0;
	z-index: 10;
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
`;

export const ImageStyles =  styled("div")`
	position: relative;
	height: 107px;
	width: 100%;
	background-color:  ${({ theme }) => theme?.palette?.common["black"] };
	border-radius: 5px;
`;
export const CancelStyles =  styled(Flex)`
	background-color:  ${({ theme }) => theme?.palette?.Grey["2"] };
	position: absolute;
	height: 18px;
	width: 18px;
	border-radius: 100%;
	top: -5px;
	right: -4px;
	z-index: 2;
	cursor: pointer;
`;


 
 