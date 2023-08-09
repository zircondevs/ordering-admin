
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
 


const moveInUp = keyframes`
	 0% {
		transform: translateY(100%); 
	}
    20% {
		transform: translateY(0%);
    }
    40% {
		transform: translateY(-100%);
    }
    60% {
		transform: translateY(-100%);
    }
    80% {
		transform: translateY(0%);
    }
    100% {
		transform: translateY(100%);
    }
`;
const moveInRight = keyframes`
	 0% {
		transform: translateX(100%); 
	}
    20% {
		transform: translateX(0%);
    }
    40% {
		transform: translateX(-100%);
    }
    60% {
		transform: translateX(-100%);
    }
    80% {
		transform: translateX(0%);
    }
    100% {
		transform: translateX(100%);
    }
`;

export const Animate =  styled(Flex)`
	min-height: 100vh;
	& > div {
		position: relative;
		overflow: hidden;
		width: auto;
	}
	& > div >  div:not(.fixed) {
		position: relative;
		overflow: hidden;
		opacity: 1;
		&:before, &:after {
			position: absolute;
			width: 100%;
			content: "";
			background-color: white;
			right: 0;
			top: 0;
			bottom: 0;
			top: 0;
		}
		&:before {
			animation: ${moveInRight} 8s ease-in-out   infinite;
		}
		&:after {
			animation: ${moveInUp} 8s ease-in-out infinite;
		}
	}
	 .fixed {
		opacity: .2;
		position: absolute;
		width: max-content;
		height: max-content;
	}
`; 
