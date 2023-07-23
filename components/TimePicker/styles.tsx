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
	/* padding: 5px 0; */
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
	 border-bottom: 1px solid ${({theme }) =>   theme?.palette?.Grey["5"]  };
	 & > div {
		flex: 1;
	 }
`;
 

export const BtnStyle = styled("button")<{active: boolean}>`
	background-color: ${({ active,theme }) => active &&   theme?.palette?.Grey["5"]  };
	padding: 7px 0;
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
	 button {
		padding: 10px;
		color:  ${({theme }) =>   theme?.palette?.Grey["3"]  };
		&:hover {
			color:${({theme }) =>   theme?.palette?.Orange["default"]  };
		}
	 }
`;
 

export const Container1 = styled(Flex)`
	flex-wrap: nowrap;
	align-items: stretch;
	flex-direction: column;
	width: auto;
	&:nth-child(2){
		border-right: 1px solid ${({theme }) =>   theme?.palette?.Grey["5"]  };
		border-left: 1px solid ${({theme }) =>   theme?.palette?.Grey["5"]  };
	}
	& > div {
		border-top: 1px solid #d8d8d8;
	}
	& > span svg{
		transform: rotate(90deg);
	}
`;
 
export const TimeName = styled("span")`
	font-family: ${({ theme }) => theme.typography.fontFamily.regular};
	font-weight: ${({ theme }) => theme.typography.fontWeight[400]};
	line-height: ${({ theme }) => theme.typography.lineHeight[19]};
	font-size: ${({ theme }) => theme.fontSizes[13]};
	text-align: center;
	cursor: pointer;
	white-space: nowrap;
	background-color:${({theme }) =>   theme?.palette?.Orange["5"]  };
	color:${({theme }) =>   theme?.palette?.Orange["default"]  };
	 padding: 10px 5px;
`;
 