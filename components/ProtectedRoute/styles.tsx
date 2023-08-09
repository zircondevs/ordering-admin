
import styled, { keyframes } from "styled-components";
import {  Flex } from "..";


export const Main =  styled(Flex)`
	min-height: 100vh;
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
