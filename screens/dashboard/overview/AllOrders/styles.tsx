import styled, { keyframes } from "styled-components";
import { Bold, Flex,   } from "../../../../components";
import { OverFlowScrollBar } from "../../../../components/OverflowContainer/styles";




 
  
export const Aside =  styled("aside")`
	flex-basis: 400px;
	z-index: 1300;
	border-left: 1px solid ${({ theme }) => theme.palette.Black[20]};
	background-color:  #EEEEEE8A;
	position:relative;
	z-index: 100;
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 70px;
	height: calc(100vh - 70px);
	@media (max-width: 1200px) {
		display: none;
	}
`;

 
 

 
 


export const Orders =  styled(OverFlowScrollBar)`
	padding: 0  40px;
	flex: 1;

`;

export const TotalOrders =  styled(Flex)`
	 & > div {
		margin-left: 16px;
		border-radius: 8px;
		padding: 4px;
		border: 1px solid ${({ theme }) => theme.palette.Black[20]};
		background-color:  #F6FBFD;
	 }
`;
export const AsideStyle =  styled(Flex)`
	position: relative;
	border-bottom: 1px solid ${({ theme }) => theme.palette.Black[20]};
	padding: 64px  40px;
`;
 
 
 


const SlideIn = ()  => keyframes`
	0% {
		opacity: .5;
		transform: translateX(100%)
	}
	100% {
		transform: translateX(0%);
		opacity: 1;
	}
`;
export const RecentOrders =  styled(Flex)<{index: number}>`
	border-radius: 8px;
	padding: 16px;
	opacity: 0;
	background-color:  ${({ theme }) => theme.palette.common["white"]};
	box-shadow:  ${({ theme }) => theme.shadows.small};
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	animation: ${ SlideIn()} 300ms ${({index}) => index* 110}ms linear forwards;
	& > * {
		transition: 200ms linear;
		opacity: 0.8;
	}
	&:hover  {
		background-color:  ${({ theme }) => theme.palette.Black[5]};
		& > * {
			transform: translateY(-3px);
			opacity: 1;
		}
		.EditOrderButton {
			opacity: 1;
		}
	}
`;
 
 
export const OrderIdStyles =  styled(Bold)`
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
`;
 
export const OrderIdButton =  styled("button")`
	display: block; 
	width: 100%;
	&:hover {
		text-decoration: underline;
	}
`;
 
export const EditOrderButton =  styled("button")`
	transition: 200ms linear;
	opacity: 0;
	&:hover {
		transform: scale(1.1)
	}
`;