import styled  from "styled-components";
import {   Flex,   } from "../../../../components";





  
 
export const ProgressCardStyles =  styled(Flex)`
	height: auto;
	background-color:  ${({ theme }) => theme.palette.Orange[0]};
	padding: 22px 35px;
	border-radius: 16px;
`;
 
export const DropdownIconStyles =  styled("div")<{visible: boolean}>`
	transition: 300ms linear;
	transform: ${({ visible}) => visible ? "rotate(-90deg)" : "rotate(90deg)"};
`;
 
export const AccordionBodyStyles =  styled(Flex)<{visible: boolean}>`
	height: auto;
	margin: 0 0 0 16px;
	& > div > div {
		margin-right: 16px;
	}
	& > .links {
		flex-basis: 100px;
		& > div {
			cursor: pointer;
			border-bottom: 2px solid transparent;;
			&:hover {
				border-bottom: 2px solid ${({ theme }) => theme.palette.Orange["default"]};
			}
			& > b {
				white-space: nowrap;
			}
		}
	}
`;
 
