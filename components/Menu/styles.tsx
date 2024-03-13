
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
	& > div > div {
		width: 100%;
		& > div{
			width: 100%;
		}
		span {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	& > div > div > div > svg{
		min-width: 10px;
	}
`; 



export const DrawerMenuWrapper =  styled(Flex)`
	min-width: unset;
	margin-right: 10px;
	& > b {
		min-width: unset;
		@media (max-width: 700px){
			display: none;
		}
	}
`; 

export const DrawerMenu =  styled(Flex)`
	position: relative;
	max-width: 130px;
	height: 47px;
	width: 50px;
	margin-right: 10px;
	@media (max-width: 700px){
        margin-left: 40px;
    }
	img {
		height: 100%;
		width: 1005;
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
export const ActiveStore =  styled(Flex)`
	padding: 5px 10px;
	box-shadow: ${({ theme }) => theme?.shadows?.large };
	border-radius: 5px;
	flex-wrap: nowrap;
	& > div {
		position: relative;
		&:before {
			position: absolute;
			bottom: 2px;
			right: 0;
			height: 10px;
			width: 10px;
			background-color: #0fbc0f;
			border-radius: 100%;
			content: ""
		}	
	}
	@media (max-width: 700px) {
		max-width: 150px;
	}
	@media (max-width: 500px) {
		display: none;	
	}
	& > b {
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;