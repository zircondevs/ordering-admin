import styled from "styled-components";
import { Flex } from "..";
 
 

  
 
  
export const MainContainer =  styled(Flex)`
	@media (max-width: 600px) {
		width: 100%;
		margin-top: 16px;
	}
`;
export const DateStyle =  styled(Flex)`
	border: 1px solid ${({ theme }) => theme?.palette?.Black["20"] };
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	width: auto;
	padding: 4px 8px;
	border-radius: 4px;
`;
export const Container1 =  styled(Flex)`
	@media (max-width: 600px) {
		flex-direction: column;
		margin: 0;
		margin-top: 4px;
		width: 100%;
		margin-left: 0;
		& > * {
			width: 100%;
			margin: 0;
		}
		.arrow{
			width: auto;
			transform: rotate(90deg)
		}
	}
`;

export const DatePicker =  styled(Flex)`
	position: relative;
	overflow: hidden;
	margin-left: 16px;
	input {
		cursor: pointer;
		z-index: 10;
		opacity: 0;
		right: 0;
		left: 0;
		bottom: 0;
		top: 0;
		position: absolute;
		height: 100%;
		width: 100%;
	}

`;