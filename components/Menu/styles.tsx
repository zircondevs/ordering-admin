
import styled from "styled-components";
import {  Flex } from "..";



export const MenuStyles =  styled("header")`
    width: auto;
    height: 70px;
    background-color: ${({ theme }) => theme?.palette?.common["white"] };
    padding: 0 3%;
    position: fixed;
    z-index:  ${({ theme }) => theme?.zIndex["header"] };;
    right: 0;
    left: 0;
    top: 0;
	border: 1px solid #E0E0E0;
    @media (${({theme}) => theme.mediaQuery.below["tab"]}){
        padding: 0 4%;
    }
`;

export const Line =  styled(Flex)`
	width: auto;
	& > div > div > div > svg{
				min-width: 10px;
	}
`; 



export const DrawerMenu =  styled(Flex)`
	position: relative;
	max-width: 130px;
	height: 47px;
	@media (max-width: 700px){
        margin-left: 40px;
    }
`; 
 
export const ButnStyles =  styled(Flex)`
	margin-right: 48px;
	& > button:first-child {
		margin-right: 24px;
	}
	&:after {
		content: "";
		height: auto;
		width: 2px;
		right: -24px;
		position: relative;
		background-color: #E0E0E0;;
	}
`; 

 
 


export const ProfileCard =  styled(Flex)`
	width: auto;
	flex-wrap: nowrap;
	span {
		margin-right: 16px;
	}
	& > svg {
		transform: rotate(-90deg)
	}
`;

export const ProfileDropdownList =  styled(Flex)`
	flex-wrap: nowrap;
	span {
		margin-left: 4px;
	}
`;