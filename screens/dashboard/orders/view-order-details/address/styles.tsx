import styled from "styled-components";
import {   Flex } from "../../../../../components";




 
 

export const DeliveryTypeStyle =  styled(Flex)<{PRIMARY_COLOR: string}>`
	padding: 16px 24px;
	border-radius: 16px;
	width: auto;
	border: 1px solid ${({ theme }) => theme?.palette?.Grey["6"] };
	background-color:  ${({ theme }) => theme?.palette?.common.white};
	box-shadow: ${({ theme }) => theme?.shadows["small"] };
	@media (max-width: 600px) {
		padding:20px 10px ;
	}
`;
 

 
export const Container1 =  styled(Flex)`
	position: relative;
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: flex-start;
		& > div {
			align-items: flex-start;
		}
		& > div:not(:first-child) {
			margin-top: 20px;
		}
		& > span {
			margin-top: 10px;
			display: inline-block;
		}
		
	}
 
`;
 