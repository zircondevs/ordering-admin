import styled from "styled-components";
import { Flex, Grid } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	max-width: 600px;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 0  0;
`;

 
export const Container1 =  styled(Flex)`
	max-width: 600px;
	& > .checkbox {
		flex: 1;
		margin-left: 50px;
		@media (max-width: 850px) {
			min-width: 100%;
			margin: 10px 0 0 0;
			justify-content: flex-start;
		}
	}
`;

 
export const CheckStyles =  styled(Flex)`
	label {
		padding: 0;
	}
	& > div {
		margin-right: 20px;
	}
`;

 
 
 
 
export const IconStyle =  styled(Flex)<{pointer?: boolean}>`
	border-radius: 100%;
	width: 42px;
	height: 42px;
	cursor: ${({ pointer }) => pointer && "pointer"};
`;
 
 
 
 
export const AutomaticStyle =  styled("button")`
	border-bottom:  1px solid ${({ theme }) => theme.palette.common["transparent"]};
	 &:hover{
		border-bottom:  1px solid ${({ theme }) => theme.palette.Orange["default"]};
	 }
`;
 
 
export const FormStyles =  styled(Grid)`
	max-width: 400px;

`;
 
 
 