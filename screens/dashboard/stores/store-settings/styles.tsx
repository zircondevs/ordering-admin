import styled from "styled-components";
import { Flex,   } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
`;
 
 

 
export const Container1 =  styled(Flex)`

@media (max-width: 700px) {
		padding: 0  4%;
	}
`;
 

 
 
export const StoreStyles =  styled(Flex)`
	border-radius: 16px;
	padding: 24px;
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	background-color:  #fff;
`;

 
export const IconStyles =  styled(Flex)`
	border-radius: 100%;
	background-color:  ${({ theme }) => theme.palette.Grey[6]};
`;
export const DropdownContentStyles =  styled(Flex)`
	font-weight: ${({ theme}) => theme.typography.fontWeight[700]};
	svg {
		margin-right: 8px;
	}
`;

 
export const TabsStyles =  styled("div")`
	width: 100%;
	& > div    {
		display: flex;
		flex-direction: row;
		& > ol {
			height: auto;
			width: auto;
			margin: 0 40px 0 0;
			padding: 0  40px  40px 0;
			flex-direction: column;
			align-items: flex-start;
			justify-content: stretch;
			border: none;
			@media (max-width: 1000px) {
				margin: 0 0 32px;
				padding: 0;
				flex-direction: row;
				align-items: stretch;	
			}
			& > li {
				margin: 0 0 20px;
				height: auto;
				padding: 3px 0;
				font-size: 14px;
				line-height: 19px;
				border-radius: 3px;
				font-weight: 400;
				width: 100%;
				justify-content: flex-start;
				&:hover{
					color:  ${({ theme }) => theme.palette.Grey["3"]};
				}
				&:hover:before{
					display: none
				}
				&.tab-list-active{
					padding: 8px 17px;
					color:  ${({ theme }) => theme.palette.Grey["2"]};
					border: 1px solid  ${({ theme }) => theme.palette.Grey["5"]};
					border-left: 3px solid  ${({ theme }) => theme.palette.Orange["default"]};
					background-color:   ${({ theme }) => theme.palette.common["white"]};
					@media (max-width: 1000px) {
						background-color:   ${({ theme }) => theme.palette.Orange["5"]};
						color:   ${({ theme }) => theme.palette.Orange["default"]};
						border: 1px solid  ${({ theme }) => theme.palette.Orange["default"]};
					}
				}
				@media (max-width: 1000px) {
					margin: 0 16px 0 0;
				}
			}
		}
		& > div {
			flex: 1;
			padding: 0 0 0 0;
		}
		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}
`;
