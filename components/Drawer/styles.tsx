
import styled from "styled-components";
import {  Flex } from "..";
import { PRIMARY_COLOR } from "../../hooks/colors";



export const MenuStyles =  styled("aside")`
    width: auto;
    height: 100vh;
    background-color: ${({ theme }) => theme?.palette?.common["white"] };
    padding: 0 3%;
    position: fixed;
    z-index:  ${({ theme }) => theme?.zIndex["drawer"] };;
    left: 0;
    top: 0;
	width: 280px;
	bottom: 0;
	padding-top: 70px;
	border: 1px solid #E0E0E0;
    @media (${({theme}) => theme.mediaQuery.below["tab"]}){
        padding: 0 4%;
    }
    @media (max-width: 700px){
        display: none;
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

 