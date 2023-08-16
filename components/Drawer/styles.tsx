
import styled from "styled-components";
import {  Flex } from "..";
import { PRIMARY_COLOR } from "../../hooks/colors";



export const Layout =  styled("div")`
 
`; 
export const MenuiconStyles =  styled("button")`
	position: fixed;
	top: 20px;
	left: 4%;
	display: none;
	z-index: 2000;
	@media (max-width: 700px){
        display: block;
    }
`; 
export const Overlay =  styled("div")`
	position: fixed;
	top: 0;
	left: 0%;
	bottom: 0;
	right: 0;
	display: none;
	z-index: 1000;
	background-color: #00000059;
	cursor: pointer;
	@media (max-width: 700px){
        display: block;
    }
`; 


export const MenuStyles =  styled("aside")<{openDrawer: boolean}>`
    width: auto;
    height: 100vh;
    background-color: ${({ theme }) => theme?.palette?.common["white"] };

    position: fixed;
    z-index:  ${({ theme }) => theme?.zIndex["drawer"] };;
    left: 0;
    top: 0;
	width: 280px;
	bottom: 0;
	
	border: 1px solid #E0E0E0;

    @media (max-width: 700px){
		transition: 200ms ease-in;
		transform: ${({  openDrawer }) => !openDrawer  ? "translateX(-280px)" : "translateX(0)"}; 
    }
	& > div {
		width: 100%;
		padding: 70px 3vw 40px;
		@media (${({theme}) => theme.mediaQuery.below["tab"]}){
			padding: 70px 4vw 40px;
		}
	}
`;

export const DrawerMenu =  styled(Flex)`
	position: relative;
	max-width: 130px;
	height: 47px;
`; 
 
export const DrawerItem =  styled(Flex)`
	 justify-content: flex-start;
	 flex-wrap: nowrap;
	 height: auto;
	 color: ${({theme, active }) => active ? PRIMARY_COLOR[0] : theme?.palette?.Black["60"]  };
	 background-color: ${({  active }) => active && PRIMARY_COLOR[5] };
	 margin-bottom: 4px;
	 padding: 10px 19px;
	 border-radius: 16px;
	 cursor: pointer;
	 span {
		padding-left:  16px;
		color: ${({theme, active }) => active ? PRIMARY_COLOR[0] : theme?.palette?.Black["60"]  };
	 }
	 &:hover {
		background-color: ${({  active , theme}) => !active && theme.palette.Grey[7] };

	 }
`; 

 
export const SelectStores =  styled(Flex)`
	background-color: ${({theme }) =>   theme?.palette?.Grey["6"]  };
	 height: auto;
	 border-radius: 8px;
	 margin-bottom: 24px;
	 & > div {
		 width: 100%;
		 & > div  {
			padding: 14px 16px;
			justify-content: space-between;
			svg {
				min-width: 10px;
			}
		}
	 }
`; 


export const SingleStore =  styled("div")`
	padding: 14px 16px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
`; 