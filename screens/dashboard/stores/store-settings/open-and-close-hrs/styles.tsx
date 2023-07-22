import styled from "styled-components";
import {  Flex, Grid } from "../../../../../components";




 
 
 
 
 
export const Container1 =  styled(Flex)`
	flex-wrap: nowrap;
	justify-content: flex-start;
	& > div {
		margin-right: 8px;
	}
`;

 
 
export const Container2 =  styled(Flex)`
	height: auto;
	width: auto;
	& > div {
		padding: 0 16px;
		border-radius: 5px;
		border: 1px solid  ${({ theme }) => theme.palette.Grey[5]};;
		@media (max-width:800px) {
			padding: 0 8px;
		}
	}
`;

 
 



export const Container3 =  styled(Flex)`
	border-bottom: 3px solid   ${({ theme }) =>  theme.palette.Orange["default"]};
	@media (max-width:800px) {
		padding: 15px 8px;
	}
`;
export const ControlsGrid =  styled(Grid)`
	 @media (max-width: 1200px) {
		grid-template-columns: 1fr	
	 }
`;

export const Card2 =  styled(Flex)`
	padding: 15px 30px;
	width: auto;
	background-color:  ${({ theme }) => theme.palette.Grey[8]};
	&:not(:last-child){
		border-bottom: 1px solid   ${({ theme }) => theme.palette.Grey[5]};
	}
	& > span {
			white-space: nowrap;
		svg {
			margin-right: 8px;
		}
	}
	@media (max-width:800px) {
		padding: 10px 4px;
	 }
`;
