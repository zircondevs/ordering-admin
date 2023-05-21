import styled from "styled-components";
import { Flex } from "../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	min-height: calc(100vh - 70px);
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 64px  40px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.Black[20]};
	margin-bottom: 40px;
	@media (max-width: 700px) {
		padding: 40px  4%;
	}
`;

export const Container1 =  styled(Flex)`
	padding: 0  40px;
	@media (max-width: 700px) {
		padding: 0  4%;
	}
`;

 
 
export const TabsStyles =  styled("div")`
		width: 100%;
		& > div > div  > *{
			padding: 0  40px;
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
`;

 
 

export const TableStyle =  styled(Flex)`
	border-radius: 16px;

	& > section {
		background-color: transparent;
		width: 100%;
		& > div > table {
			background-color: transparent;
			thead th {
				padding: 10px 0.8rem;
				font-family: ${({ theme}) => theme.typography.fontFamily.quicksandSemiBold};
				font-weight: ${({ theme}) => theme.typography.fontWeight[400]};
				font-size: 12px;
				background-color:  ${({ theme }) => theme.palette.Black[10]};
				border-right: 5px solid  ${({ theme }) => theme.palette.common["white"]};
			}
			tbody td {
				padding: 1.2rem 0.8rem;
				& > div {
					border-radius: 8px;
				}
			}
		}
	}
`;
 
 