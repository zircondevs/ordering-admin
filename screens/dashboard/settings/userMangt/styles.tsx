import styled from "styled-components";
import { Flex, Grid } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 0  0;
`;

 
 
export const LogoStyles =  styled("div")`
	border-radius: 100%;
	position: relative;
	height: 167px;
	width: 167px;
	margin-right: 24px;
`;

 
 
export const FormStyles =  styled(Grid)`
	max-width: 400px;
`;
 
export const COlorFields =  styled("div")`
	input {
		cursor: pointer;
	}
`;

 
  
export const Card =  styled(Flex)`
	flex-direction: column;
	align-items: stretch;
	border-radius: 5px;
`;
export const ControlHead =  styled(Flex)`
	border-left: 3px solid   ${({ theme }) =>  theme.palette.Orange["default"]};
	padding: 10px 30px;
	background-color:  ${({ theme }) => theme.palette.Orange[5]};
	small{
		margin-left: 4px;
	}
	button {
		margin-left: 15px;
	}
	@media (max-width:700px) {
		padding: 10px 10px;
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
		svg {
			margin-right: 8px;
		}
	}
	& > div {
		& > div {
			margin-left: 20px;
		}
	}
	@media (max-width:700px) {
		padding: 10px 10px;
	 }
`;



export const Controls =  styled(Flex)`
	justify-content: space-between;
	height: auto;
	background-color: white;
	padding: 15px 30px;
	& > div > span {
		margin-left: 10px;
	}
`;
export const SelectControlStyle =  styled(Flex)`
	& > div > div {
		padding: 1px 5px;
		margin: 0 0 0 10px;
		span {
			font-size: 12px;
			text-transform: lowercase;
		}
	}
`;
export const ControlsGrid =  styled(Grid)`
	 @media (max-width: 1200px) {
		grid-template-columns: 1fr	
	 }
`;
