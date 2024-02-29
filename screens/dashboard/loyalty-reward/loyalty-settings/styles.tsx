import styled from "styled-components";
import { Container, Grid } from "../../../../components";
 



 
  
 
 
  
export const FieldCard =  styled(Container)<{value: number}>`
		position: relative;
		background-color:  ${({ theme }) => theme.palette.Black["5"]};
		padding: 20px;
		box-shadow: ${({ theme }) => theme?.shadows?.smaller };
		border-radius: 5px;
		&:before {
			position: absolute;
			content: ${({ value }) => `"${value}"` }; 
			left: -40px; 
			height: 20px;
			width: 20px;
			/* top: 0; */
			background-color: ${({ theme }) => theme.palette.Orange["default"]};;
			color:  ${({ theme }) => theme.palette.common["white"]};
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 14px;
			border-radius: 3px;
			z-index: 10;
		}

`;




export const Main =  styled(Grid)`
	padding-left: 30px;
	margin-left: 10px;
	margin-top: 20px;
	position: relative;
	width: auto;
	@media (max-width: 1000px) {
		grid-template-columns: 1fr;	
		&:after {
			display: none;
		}
	}

	&:before {
		position: absolute;
		content: "";
		top: 20px;
		bottom: 0;
		left: 0;
		width: 2px;
		background-color:  ${({ theme }) => theme.palette.Orange[5]};;
	}
	&:after {
		position: absolute;
		content: "";
		top: 20px;
		bottom: 0;
		left: 70px;
		right: 0;
		margin: auto;
		width: 2px;
		background-color:  ${({ theme }) => theme.palette.Orange[5]};
		z-index: 2;
	}
 


`;