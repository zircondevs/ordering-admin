

import styled from "styled-components";

 
 
 
 
  
export const PageContainer =  styled("div")`
	 
	  
		 scrollbar-color: #e3e3e3 transparent;
		 scrollbar-width: thin;
	   
		 &::-webkit-scrollbar {
		   width: 5px;
		   height: 11px;
		 }
		 &::-webkit-scrollbar-button {
		   width: 0;
		   height: 0;
		 }
		 &::-webkit-scrollbar-thumb {
		   border-radius: 50px;
		   background: #e3e3e3;
		 }
		 &::-webkit-scrollbar-thumb:active {
		   background: #ff6600;
		 }
		 &::-webkit-scrollbar-track {
		   background: transparent;
		   border-radius: 53px;
		 }
		 &::-webkit-scrollbar-track:hover {
		   background: #eff0f5;
		 }
		 &::-webkit-scrollbar-track:active {
		   background: #e3e3e3;
		 }
		 &::-webkit-scrollbar-corner {
		   background: transparent;
		 }
		 display: flex;
		 margin: 0;
		 width: 100%;
		 align-items: center;
		 justify-content: flex-end;
		 overflow-x: auto;
		 *,
		 *::after,
		 *::before {
		   box-sizing: border-box;
		 }
	 
	   
		.Paginator { 
			 display: flex;
			 justify-content: flex-start;
			 margin: 0;
			 padding: 0;
			 padding: 10px 0;
		}
	   
	   .paginator-ListItem { 
		 padding: 5px;
		 display: flex;
		 justify-content: center;
		 align-items: center;
		 text-decoration: none;
		 min-width: 30px;
		 width: auto;
		 transition: all 0.3s;
		 font-weight: 400;
		 border-radius: 4px;
		 margin: 2px;
		 cursor: pointer;
		 color: #6b6b6b;
		 &:hover {
		   background-color:   #94868635;
		 }
	   }
	   .paginator-ListItem-active {
		 box-shadow: 0 4px 5px 0 rgba(156, 39, 176, 0.14), 
		 0 1px 10px 0 rgba(156, 39, 176, 0.12),  0 2px 4px -1px rgba(156, 39, 176, 0.2);
		 background-color: ${({ theme }) => theme.palette.Grey[2]};
		 &:hover {
			 background-color: ${({ theme }) => theme.palette.Grey[2]};
		   }
	   }
	   .paginator-ListItem-disabled{
		   background-color: #44444435;
		   cursor: not-allowed;
	   }
	   
	   .Items { 
		 display: inline-flex;
		 justify-content: center;
		 align-items: center;
		 color: #6b6b6b;
		 font-size: 16px;
		 line-height: 20px;
	   }
	   .Items-active {
		 font-weight: bold;
		 color: white;
	   }
	   .Items-show-more{
		 padding: 5px 10px;
	   }
	   .Items-show-more-disabled{
		 background-color: #44444435;
		 cursor: not-allowed;
	  }
	   .Items-show-more span{
		  color: rgb(114, 109, 172);
		  font-size: 12px; 
	   }
	   .Items-show-more-disabled span{
		 color: #44444435;
		 cursor: not-allowed;
	  }
	 
	 
	   .FirstLast { 
		 font-size: 12px;
		 cursor: pointer;
		 margin: 2px;
		 list-style: none;
		 padding: 5px;
		 font-weight: normal;
		 color:  #6b6b6b;
		 &:hover {
			 background-color:   #44444435;
		 }  
	   }
	   .FirstLast-disabled {
		   color: #44444435;
		   cursor: not-allowed;
		   background-color: #44444435;
	   }
	 
 `;
