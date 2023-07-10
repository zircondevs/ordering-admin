import styled from "styled-components";
import {  Flex } from "..";
 
 

  
 
  
export const Container2 =  styled(Flex)`
	flex-wrap: nowrap;
	align-items: stretch;
	@media (max-width: 400px) {
		width: 100%;
		margin-top: 16px;
	}
	.clearFilter {
		border: 1px solid ${({ theme }) => theme?.palette?.Error["20"] };
		margin-left: 20px;
		min-width: unset;
		padding: 0 15px;
		border-radius: 4px;
		&:hover {
			background-color:  ${({ theme }) => theme?.palette?.Error["20"] };
		}
		small {
			white-space: nowrap;
			padding-left: 10px;
		}
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
	@media (max-width: 400px) {
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