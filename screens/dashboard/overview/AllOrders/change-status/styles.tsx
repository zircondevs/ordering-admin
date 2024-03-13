import styled from "styled-components";
import { Flex, } from "../../../../../components";



  

export const ModalContainer =  styled("div")`
	&  > div >  div  > main > div > div > div > span{
		 top: 20px;
		 right: 24px;
	}
 	&  >  div > div {
		background-color: rgba(0, 0, 0, 0.1);
		 & > main {
			 justify-content: flex-end;
			 border-radius: 16px;
			 & > div:last-child{
				 height:  400px;
				max-height:  400px;
				min-height:  400px;
				background-color: ${({ theme }) => theme.palette.common["white"]};
				 & > div {
					 height: auto;
					 display: flex;
					flex-direction: column;
					flex-wrap: nowrap;

					 & > div:nth-child(1){
						& > div {
							justify-content: flex-start;
							padding: 0 15px;
						}
					 }
					 & > div:nth-child(2){
						 height: 100%;
						 max-height:  unset;
						 width: 100%;
						 
					 }
				 }
			 }
		 }
	}

`;


 
  

export const Container1 =  styled(Flex)`
	border: 1px solid ${({ theme }) =>theme.palette.Black[40]};
	flex: 1;
	border-radius: 4px;
	& > div  {
		width: 100%;
		& > div {
			padding: 6px 10px;
			justify-content: space-between;
			width: 100%;
			& > span {
				font-size: 14px;
			}
		}
		& > section > ul li:nth-child(5) span{
			color:  ${({ theme }) =>theme.palette.Error["default"]};
		}
	}
`;
  
 
export const Footer =  styled("div")`
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
`;
 
 