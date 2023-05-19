import styled from "styled-components";
import {   Flex, } from "..";
 

  
 
export const BreadCrumStyles =  styled(Flex)`
 
	& > svg {
		transform: rotate(180deg);
	}
	& > button {
		margin: 0 8px;
	}
	& > button:first-child{
		margin-left: 0;
	}
	& > button:last-child{
		cursor: auto;
	}
`;
 
 
 