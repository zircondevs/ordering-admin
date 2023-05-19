
import {   Container, Flex,    } from  "../../components";
import styled, { keyframes } from "styled-components";
 

 

 



const blink = ()  => keyframes`
	0% {
		opacity: .3;
	}
	50% {
		opacity: .7;
	}
	100% {
		opacity: .3;
	}
`;
export const LoaderContainer =  styled(Container)` 
 & .animate  {
	animation: ${ blink()} 1000ms linear infinite ;

 }
`;


export const LoaderContentsContainer =  styled(Container)<{radius: string}>` 
	max-width: ${({ wit}) => wit};
	border-radius: ${({ radius}) => radius || "0px"};
	width: 90%;
`;
 
 
export const DeskTopLoaderStyles =  styled(Flex)<{isLoading: boolean}>` 
	margin: auto;
	height: auto;
	width: auto;
	overflow: visible;
	position: absolute;
	z-index: 10000;
	max-width: max-content;
	& > div {
		background-color: ${({ theme, isLoading }) => isLoading?  theme?.palette?.Yellow["10"] : theme?.palette?.Success["10"] };
		box-shadow: ${({ theme }) => theme?.shadows["smallDarker"] };
		width: auto;
		height: auto;
		padding: 3px 7px;
		border-radius: 8px;
	}
	transition: 500ms linear;
	transform: ${({isLoading}) => isLoading ? 
		"translateY(0px)"	
		: "translateY(-150px)"	
};
	div, span {
		min-width: auto;
		min-height: auto;
	}
	svg {
		max-width: 30px;
		max-height: 30px;
		min-width: 30px;
		min-height: 30px;
	}
`;
 