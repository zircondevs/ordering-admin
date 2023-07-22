import styled from "styled-components";
import { Flex, Grid } from "..";


 





export const IconStyles = styled(Flex)`
	padding: 5px 0;
	border-radius: 4px;
	 & > span {
		padding-right: 8px;
		color: ${({ theme }) => theme.palette.Black[80]};

	 }
	 & > svg {
		transform: rotate(90deg)
	 }
`;

 

export const TimePickerStyles = styled("div")`
	display: inline-block;
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
	line-height: ${({ theme }) => theme.typography.lineHeight[27]};
	text-align: start;
	font-size: ${({ theme }) => theme.fontSizes[20]};
	position: relative;
	span {
		color: black;
	}
	margin: 10px;
	box-shadow: 0 0 10px 4px #e3e3e3;
	height: 200px;
	border-radius: 4px;
	padding: 5px 0;
	overflow: hidden;
	background-color: white;
	display: flex;
	flex-direction: column;
`;
 


export const DropdownStylws = styled(Flex)`
	 z-index: 10;
	 width: 150px;
	 overflow: hidden;
	 background-color: #fbfbfb;
	 flex: 1;
	 & > div {
		flex: 1;
	 }
`;
 

export const BtnStyle = styled("button")<{active: boolean}>`
	background-color: ${({ active}) => active && "#e8e8e8"};
	padding: 7px 0;
	border-radius: 4px;
	transition: 200ms linear;
	&:hover span {
		color: black;
	}
	
`;
 

export const Times = styled(Grid)`
	 z-index: 10;
	 width: auto;
	 height: max-content;
`;
 

export const TimesValue = styled("span")`
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
	line-height: ${({ theme }) => theme.typography.lineHeight[19]};
	font-size: ${({ theme }) => theme.fontSizes[14]};
	text-align: center;
	cursor: pointer;
	color: #8e8c8c;
	
`;
 

export const Footer = styled(Flex)`
	height: auto;
	justify-content: flex-end;
	 button {
		padding: 10px;
		color:  ${({theme }) =>   theme?.palette?.Grey["3"]  };
		&:hover {
			color:${({theme }) =>   theme?.palette?.Orange["default"]  };
		}
	 }
`;
 