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

 
 
 
export const SearchStyles =  styled(Flex)`
	& > div {
		max-width: 300px;
		min-width: 250px;
	}
	& > button {
		margin-right: 16px;
		min-width: auto;
	}
	@media (max-width: 500px) {
		width: 100%;
		margin-top: 20px;
		& > div {
			max-width: unset;
		}
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
	padding:  8px 16px;
	border-radius: 8px;
	font-size: 14px;
`;
 

 
 
 