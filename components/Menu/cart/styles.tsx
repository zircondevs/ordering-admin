

import styled from "styled-components";
import { Bold, Container, Flex } from "../..";

import { GREY, PRIMARY_COLOR, TERTIARY_COLOR } from "../../../hooks/colors";
import { OverFlowScrollBar } from "../../OverflowContainer/styles";


 
 


export const NotificationWrapStyles =  styled("div")`
	position: relative;
`;
 
 

 
export const NotificationDropdown =  styled(Container)<{openCart: boolean}>`
	position: relative;
	position: absolute;
	width: 350px;
	top: 30px;
	left: -340px;
	right: auto;
	margin: auto;
	z-index: ${({ theme }) => theme.zIndex.drawer};
	overflow: hidden;
	height: ${({ openCart }) => openCart ? "auto" : "0"};
	border-radius: 0 0 8px 8px;
	
	& > div  {
		border: ${({ openCart, theme }) => openCart ? "1px solid" + theme?.palette?.Black["10"] : "none"};
		box-shadow: ${({ theme }) => theme?.shadows.small };
		padding: 24px;
		border-radius: 0 0 8px 8px;
		background-color:  #F2F2F2;
		transform: translateY(${({ openCart }) => openCart ? "0%" : "-100%"});
		transition: ${({ theme }) => theme.transition.notification};
	}
	&:hover {
		height: auto !important;
		& > div {
			transform: translateY(0%);
		}
	}
`;


export const Icon =  styled(Flex)`
	border-radius: 100%;
	min-width: 74px;
	min-height: 74px;
	border-radius: 16px;
	overflow: hidden;
`;

export const Card =  styled(Flex)`
	padding-bottom: 16px;
	cursor: pointer;
	padding: 16px 24px;
	position: relative;
	border-radius: 8px;
	border: 1px solid  ${() => GREY[1]};
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	&:hover {
		background-color:  ${({ theme }) => theme?.palette?.Black["10"] };
	}
	& > div:last-child{
		flex: 1;
	}
`;



export const DropdownContent =  styled(OverFlowScrollBar)`
	max-height: calc(100vh - 550px);
	overflow-y: auto;
`;


export const Prize =  styled(Bold)`
	color: ${() => TERTIARY_COLOR[2]};
`;

export const Total =  styled(Flex)`
	background-color:  ${() => GREY[1]};
	padding: 16px 24px;
	margin: 16px -24px;
	width: auto;
`;

 
 
 
export const CartStyles =  styled(Flex)<{cartLent: number}>`
	border-radius: 100%;
	border: 1px solid  ${() => PRIMARY_COLOR[0]};
	background-color:   ${({ cartLent }) => cartLent > 0  &&  PRIMARY_COLOR[5]};
	min-height: 47px;
	min-width: 47px;
	position: relative;
	&:after {
		padding: 3px 5px;
		border: 2px solid white;
		display:   ${({ cartLent }) => cartLent > 0 ? "flex" : "none"};
		position: absolute;
		top: -7px;
		border-radius: 100%;
		background-color:   ${({ cartLent }) => cartLent > 0  &&  PRIMARY_COLOR[0]};
		content: "${({cartLent}) => cartLent}";
		right: -7px;
		font-size: 10px;
		justify-content: center;
		align-items: center;
		color: white;
	}
	& > button {
		height: 100%;
		width: 100%;
		border-radius: 100%;
	}
`; 
 

