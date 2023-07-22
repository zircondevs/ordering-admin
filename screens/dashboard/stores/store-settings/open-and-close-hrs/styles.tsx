import styled from "styled-components";
import {  Flex, Grid } from "../../../../../components";




 
 
 
 
 
export const Container1 =  styled(Grid)`
	max-width: 400px;
`;

 
 
export const Container2 =  styled(Flex)`
	height: auto;
	width: auto;
	& > div {
		padding: 0 16px;
		border-radius: 5px;
		border: 1px solid  ${({ theme }) => theme.palette.Grey[5]};;
		margin: 0 0 0 16px;
	}
`;

 
 
