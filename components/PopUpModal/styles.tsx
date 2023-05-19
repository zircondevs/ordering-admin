 


import styled from "styled-components";
import { OverFlowScrollBar } from "../OverflowContainer/styles";
 

  
  
 
 
export const Wrapper =  styled("div")`

 
		position: relative;
		width: max-content;
		min-width: max-content;
 
	.layout  {
		background: $transparent; 
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 250ms ease-in-out;
		border:  1px solid $grey_100;
		svg {
			font-size: $size_12;
			color:  $grey_200;
		}
		&:hover {
			box-shadow: $shadow_100;
			& > span {
				opacity: 1;
			}
		}
	}

	

	.overlay  {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index:  ${({ theme }) => theme?.zIndex?.header  };
		cursor: auto;
	}
 
`;

 
export const Content =  styled(OverFlowScrollBar)`
	position: fixed;
	z-index:  ${({ theme }) => theme?.zIndex?.tooltip };
	width: auto;
	background-color: white;
	box-shadow: ${({ theme }) => theme?.shadows?.shadows };
	border-radius: 4px;
	max-height: calc(90vh - 100px);
	overflow:  hidden auto;
	height: auto;
	transition: 200ms linear;
`;