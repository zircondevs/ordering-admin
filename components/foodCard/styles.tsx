import styled from "styled-components";
import {  Container, Flex } from "..";
 

  
 
export const CradStyles =  styled(Flex)`
	background-color: ${({ theme }) => theme?.palette?.common["white"] };
	border: 1px solid ${({ theme }) => theme?.palette?.Black.transparent["30"] };
    box-shadow: ${({ theme }) => theme?.shadows["small"] };
	border-radius: 16px;
	overflow: hidden;
	flex-basis: 60%;
	@media (${({theme}) => theme.mediaQuery.below["midDesktop"]}) {
		margin: 0  0 24px  0;
		width: 100%
	}
`;

 

 
 
 
export const ImageStyles =  styled(Flex)`
	position: relative;
	height: 147px;
	
`;
 
 
export const SubContainer =  styled(Container)`
	@media (max-width: 800px) {
		padding: 16px;
	}
	
`;

 

 
 
export const Footer =  styled(Flex)`
	@media (max-width: 600px) {
		flex-direction: column;
		align-items: stretch;
		& > * {
			width: 100%;
		}
		& > button{
			margin-top: 16px;	
			padding: 10px 16px;
		}
	}
	
`;

 

 
 