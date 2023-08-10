
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
			animation: ${moveInRight} 4s ease-in-out   infinite;
		}
		&:after {
			animation: ${moveInUp} 4s ease-in-out infinite;
		}
	}
	 .fixed {
		opacity: .2;
		position: absolute;
		width: max-content;
		height: max-content;
	}
`; 
