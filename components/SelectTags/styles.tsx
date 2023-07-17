
import styled from "styled-components";
import {  Flex } from "..";




export const Layout =  styled(Flex)`
 
`; 
 

 
export const SelectTagStyles =  styled(Flex)<{active: string, disable: boolean}>`
	width: auto;
	height: auto;
	padding: 5px 12px;
	border: 	1px solid ${({ theme, active , disable}) =>  disable ? theme.palette.Grey["4"] : active ? theme.palette.Grey["2"] : theme.palette.Grey[5]};
	margin: 0 10px 10px 0;
	cursor: ${({ disable}) => disable ? "not-allowed" : "pointer"};
	background-color: ${({ active, theme, disable }) => active  ? 
		disable?
			theme.palette.Grey["6"] 
			:theme.palette.Orange["5"] 
		: theme.palette.Grey[8]};
	border-radius: 100px;
	overflow: hidden;
	transition: 250ms linear;
	&:hover {
		transform: ${({ disable }) => !disable && "translateY(-2px) scale(1.1)"};
	}
`;

 

export const CancelStyles =  styled(Flex)`
	width: 12px;
	height: 12px;
	background-color: ${({ theme, disable  }) =>	disable?
		theme.palette.Grey["4"] :   theme.palette.Orange["default"]};
	border-radius: 100%;
	margin-left: 10px;
`; 
 