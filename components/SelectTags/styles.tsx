
import styled from "styled-components";
import {  Flex } from "..";




export const Layout =  styled(Flex)`
 
`; 
 

 
export const SelectTagStyles =  styled(Flex)<{active: string}>`
	width: auto;
	height: auto;
	padding: 5px 12px;
	border: 	1px solid ${({ theme, active }) =>  active ? theme.palette.Grey["2"] : theme.palette.Grey[5]};
	margin: 0 10px 10px 0;
	cursor: pointer;
	background-color: ${({ active, theme }) => active ? theme.palette.Orange["5"] : theme.palette.Grey[8]};
	border-radius: 100px;
	overflow: hidden;
	transition: 250ms linear;
	&:hover {
		transform: translateY(-2px);
	}
`;

 

export const CancelStyles =  styled(Flex)`
	width: 12px;
	height: 12px;
	background-color: ${({ theme,   }) =>   theme.palette.Orange["default"]};
	border-radius: 100%;
	margin-left: 10px;
`; 
 