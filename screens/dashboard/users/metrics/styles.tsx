import styled from "styled-components";
import { Container, Flex } from "../../../../components";



 
export const Main =  styled(Flex)`
	width: 100%;
	margin: 50px 0 0;
	@media (max-width: 1200px) {
		flex-direction: column-reverse;
	}
`;
 
 

export const ChartCard =  styled(Container)`
	flex: 1;
`;


export const Container2 =  styled(Flex)`
	@media (max-width: 490px) {
		flex-direction: column;
		align-items: flex-start;
		& > div {
			margin-top: 20px;
		}
	}
`;




export const Customer =  styled( Container)`
	flex-basis: 30%;
	margin-left: 40px; 
	max-width: 400px;
	@media (max-width: 1200px) {
		margin:  0 0 30px 0;
	}
`;

export const CustomerCard =  styled( Container)`
	background:  linear-gradient(#095F30, #065b2d, #0E4326);
	padding: 30px;
	border-radius: 5px;
	span {
		font-family: "Encode Sans Expanded", sans-serif !important;
		font-weight: 400;
		font-style: normal;
	}
	 b{
		font-family: "Encode Sans Expanded", sans-serif !important;
		font-weight: 700;
		font-style: normal;
	}
`;
