/* eslint-disable max-lines */

 
import styled from "styled-components";
import { Container, Flex } from ".";
import { PRIMARY_COLOR } from "../hooks/colors";



export const GeneralModalStyle = styled("div")`
	&  >  div  > main > div > div > div > span{
		 top: 32px;
		 right: 24px;
	}
 	&  >  div {
		background-color: rgba(0, 0, 0, 0.69);
		 & > main {
			 justify-content: flex-end;
			 & > div:last-child{
				 min-height: 100vh;
				 max-height: 100vh;
				 height: 100vh;
				 border-radius: 0;
				background-color: ${({ theme }) => theme.palette.Grey[6]};
				 & > div {
					 height: auto;
					 & > div:nth-child(1){
						position: absolute;
						z-index: 100;
					 }
					 & > div:nth-child(2){
						 height: 100%;
						 max-height: 100vh;
						 width: 100%;
						 & > div {
							padding: 0;
						 }
					 }
				 }
			 }
		 }
	}
`;
 
export const GeneralTabStyle =  styled("div")`
    & > div > ol {
		/* border: none; */
		margin: 0;
		& > li {
			font-size: ${({ theme }) => theme?.fontSizes["14"] };
			line-height: ${({ theme }) => theme?.typography.lineHeight["19"] };
			&.tab-list-active:before {
				background-color: ${() =>  PRIMARY_COLOR[0]}
			}
			&.tab-list-active {
				 color: ${({ theme}) => theme?.palette.Grey["2"] };
			}
		}
	}
`;


export const GeneralErrorContainer =  styled("small")`
	position: relative;
	left: 0;
	color: ${({ theme }) => theme?.palette?.Error.default };
	font-family: ${({ theme }) => theme?.typography?.fontFamily["ubuntu"] };
	font-size: ${({ theme }) => theme?.fontSizes["12"] };
	font-weight: ${({ theme }) => theme?.typography?.fontWeight["400"] };
	line-height: ${({ theme }) => theme?.typography?.lineHeight["19"] };
	text-align: end;
`;


export const ModalSpacer =  styled(Flex)`
	padding: 24px 64px 60px;
	@media (max-width: 1000px) {
		padding: 24px 24px 60px;
	}
	@media (max-width: 700px) {
		padding: 24px 12px 60px;
	}
`;


export const GeneralModalHeader =  styled("div")`
	border-bottom: 1px solid ${({ theme }) => theme?.palette?.Grey["6"] };
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	padding-bottom: 16px;
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	width:100%;
	padding:    24px 64px;
	z-index: 10;
	margin:0 0 24px;
	svg {
		transform: rotate(180deg)
	}
	span {
		padding-left: 16px;
	}
	@media (max-width: 1000px) {
		padding: 24px 24px;
	}
	@media (max-width: 700px) {
		padding: 24px 12px 24px;
	}
`;



export const GeneralLabel =  styled("label")<{optional?: boolean}>`
	text-align: start;
	color: ${({ theme }) => theme?.palette?.Grey[1] };
	font-family: ${({ theme }) => theme?.typography?.fontFamily["ubuntu"] };
	font-size: ${({ theme }) => theme?.fontSizes["14"] };
	font-weight: ${({ theme }) => theme?.typography?.fontWeight["400"] };
	line-height: ${({ theme }) => theme?.typography?.lineHeight["19"] };
	letter-spacing: 0.025em;
	display: block;
	display: flex;
	&:after {
		content: "(Optional)";
		position: relative;
		font-size: 10px;
		line-height: 19px;
		padding-left: 15px;
		color: ${({ theme }) => theme?.palette?.Error["default"] };
		display: ${({ optional }) =>  optional ? "block": "none"};
		text-transform: full-size-kana;
	}
`;

export const GeneralInputWrap =  styled(Container)`
	position: relative;
	& > div > input, & > div > div >  input {
		font-size: ${({ theme }) => theme?.fontSizes["14"] };
		font-weight: ${({ theme }) => theme?.typography?.fontWeight["400"] };
		line-height: ${({ theme }) => theme?.typography?.lineHeight["16"] };
		padding: 8px 0;
	}
	& > div {
		border-radius: 0;
		border-right: none;
		border-top: none;
		border-left: none;
		& >  div {
			/* before icons */
			& > div:nth-child(1){
				margin: auto 0 5px 0;
			}
			/* inputs with before icons */
			& > div:nth-child(1) +input{
				padding: 8px 0 8px 16px
			}
		}
		& div {
			/* password eye icon  container */
			bottom: 6;
			padding: 0;
			& >  svg {
				height: 15px;
				/* position: absolute; */
			}
		}
	}
	input {
		font-family: ${({ theme }) => theme?.typography?.fontFamily["ubuntu"] };
	}
`; 
 
export const GeneralCountStyles =  styled("div")`
	margin-left: 16px;
	border-radius: 8px;
	padding: 4px;
	border: 1px solid ${({ theme }) => theme.palette.Black[20]};
	background-color:  #F6FBFD;
	display: inline-flex;
`;


export const GeneralTableStyle =  styled(Flex)`
	border-radius: 16px;

	& > section {
		background-color: transparent;
		width: 100%;
		& > div > table {
			background-color: transparent;
			/* min-width: 700px; */
			thead th {
				padding: 10px 0.8rem;
				font-family: ${({ theme}) => theme.typography.fontFamily.ubuntuSemiBold};
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
			/* avoid mobile splitting */
			thead{
				display: revert;
				th {
					min-width: unset;
				}
			}
			tbody tr{
				display: table-row;
				td:before{
					display: none;
				}
				td{
					display: revert;
					text-align: start;
				}
			}
		}
	}
`;
 

export const GeneralDivider =  styled(Flex)`
	border-bottom: 1px solid ${({ theme }) => theme.palette.Grey[5]};
`;
 
export const GeneralSelectField =  styled(Container)`
	 border:1px solid  ${({ theme }) => theme?.palette?.Grey["5"] };
	 padding: 8px 0 8px;
	 height: auto;
	 border-radius: 8px;
	 & > div {
		& > div {
			justify-content: space-between;
			margin: 0 !important;
			font-size: ${({ theme }) => theme?.fontSizes["14"] };
			font-weight: ${({ theme }) => theme?.typography?.fontWeight["400"] };
			line-height: ${({ theme }) => theme?.typography?.lineHeight["21"] };
		}
		& > section > ul{
			width: 100%;
			right: 0;
			left: 0;
			max-width: 100%;
		}
	 }
`;




export const GeneralTextArea=  styled("textarea")`
	position: relative;
	font-size: ${({ theme }) => theme?.fontSizes["14"] };
	font-weight: ${({ theme }) => theme?.typography?.fontWeight["400"] };
	line-height: ${({ theme }) => theme?.typography?.lineHeight["21"] };
	padding: 8px ;
	border: 1px solid ${({ theme }) => theme.palette.Grey[4]};
	border-radius: 4px;
	min-height: 200px;
	width: 100%;
	resize: vertical;
	font-family: ${({ theme }) => theme?.typography?.fontFamily["ubuntu"] };
	 margin-top: 8px;
`; 