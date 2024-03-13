import styled from "styled-components";
import { Bold, Flex, Span } from "../../../../../../components";




 

export const Total =  styled(Flex)`
	background-color:  ${({ theme }) =>theme.palette.common["white"]};
	padding: 16px 24px;
	margin: 16px 0 8px; ;
	width: auto;
	border-radius: 16px;
	@media (max-width: 600px) {
		padding:20px 10px ;
	}
`;
 

export const OrderId =  styled(Bold)`
	white-space: nowrap;
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	padding-right: 8px;
`;
 
export const Time =  styled(Span)`
	white-space: nowrap;
	min-width: auto;
`;
 