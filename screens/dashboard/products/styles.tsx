import styled from "styled-components";
import { Flex } from "../../../components";
import { PRIMARY_COLOR } from "../../../hooks/colors";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 64px  40px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.Black[20]};
	margin-bottom: 40px;
	@media (max-width: 1200px) {
		padding: 40px  4%;
	}
`;

export const Container1 =  styled(Flex)`
	padding: 0  40px;
	@media (max-width: 1200px) {
		padding: 0  4%;
	}
`;

 
 
export const FoodStyles =  styled(Flex)`
	position: relative;
	height: 40px;
	width: 40px;
	min-height: 40px;
	min-width: 40px;
	margin-left: -25px;
	border: 2px solid ${({ theme }) => theme.palette.Grey[3]};
`;
 
export const SearchStyles =  styled(Flex)`
	& > div {
		max-width: 300px;
		min-width: 250px;
	}
	& > button {
		margin-right: 16px;
		min-width: auto;
	}
`;

 
 

export const BtnsStyles =  styled(Flex)`
	& > * {
		margin-left: 24px;
	}
`;
 

export const AddBtn =  styled(Flex)`
	width: max-content;
	height: max-content;
	background-color: ${() => PRIMARY_COLOR[0]};
	padding: 14px 24px;
	border-radius: 8px;
`;
 

export const ProductImages =  styled(Flex)`
	 width: auto;
	 justify-content: flex-start;
	 margin-right: 8px;
	 min-width: auto;
	 & > div {
		border-radius: 100%;
		overflow: hidden;
		&:first-child{
			margin: 0;
		}
	 }
`;
 
 