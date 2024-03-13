import styled from "styled-components";
import { ModalSpacer } from "../../../../../components/styles";



  

export const ModalStyle =  styled("div")`
 	&  >  div  > div {
		background-color: rgba(0, 0, 0, 0.3);
		 & > main {
			 justify-content: flex-end;
			 align-items: flex-end;
			 & > div:last-child{
				 min-height: calc(100vh - 70px);;
				 max-height: calc(100vh - 70px);
				 height: calc(100vh - 70px);;
				 border-radius: 0;
				 background-color:  ${({ theme }) =>theme.palette.Grey[5]};
		
				 & > div {
					 height: auto;
					 & > div:nth-child(1){
						position: absolute;
						z-index: 100;
					 }
					 & > div:nth-child(2){
						 height: 100%;
						 max-height: calc(100vh - 70px);;
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
  
 
export const TabStyles =  styled(ModalSpacer)`
	position: relative;
	z-index: 1;
	padding-top: 0 !important;
	& > div {
		width: 100%;
	}
`;
 
export const Footer =  styled("div")`
	position: absolute;
	bottom: 0;
	width: auto;
	right: 0;
	left: 0;
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	z-index: 10;
`;

 