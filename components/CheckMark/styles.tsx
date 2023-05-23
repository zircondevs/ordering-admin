
import { Flex } from "../../components";
import styled from "styled-components";



export const CheckboxStyles = styled(Flex)`
width: 20px;
height: 20px;
position: relative;
cursor: pointer;
border-radius: 100%;
&:before {
	border-radius: 100%;
	background-color:  ${({ theme, checked }) => checked ?  theme.palette.Success["default"] : theme.palette.common["white"]};
	border-color:  ${({ theme, checked }) => checked ?  theme.palette.Success["default"]: theme.palette.Grey[3]};
	border-style: solid;
	border-width:  1px;
	width:  18px;
	height:  18px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
	z-index: 10;
	content: "" ;
}
& > svg {
	position: absolute;
	z-index: 10;
}
input {
	opacity: 0;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 10;
	width: 20px;
	height: 20px;
	cursor: pointer;
}
`;