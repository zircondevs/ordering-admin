import styled from "styled-components";
import { Flex } from "..";
 

  
 
 
 
export const Styles =  styled(Flex)`
`;


export const Frame =  styled(Flex)`
	box-shadow: ${({ theme }) => theme?.shadows?.large };
	overflow: hidden;
	border-radius: 6px;
	position: relative;
	cursor: pointer;
	z-index: ${({ index }) =>  index};
	border: 2px solid ${({ theme }) => theme?.palette?.common["white"] };
	&:not(:last-child) {
		margin: 0 -25px 0 0;
	}
`;
 
 
export const EmptyCard =  styled(Flex)`
	overflow: hidden;
	box-shadow: ${({ theme }) => theme?.shadows?.large };
	border-radius: 6px;
	position: relative;
	z-index: ${({ index }) =>  index};
	background-color:  ${({ theme }) => theme.palette.Orange.default};
	margin: 0 -25px 0 0;
	cursor: pointer;
`;
 
 