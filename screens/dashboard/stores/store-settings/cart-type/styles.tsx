import styled from "styled-components";
import {  Grid } from "../../../../../components";





 
  
 
 
  
export const Main =  styled(Grid)`
	justify-content: flex-start;
	& > div > div {
		margin-left: 30px;
	}
	& > div > label {
		padding: 0;
	}
`;

export const FormContainer =  styled("div")`
	background-color: ${({ theme }) => theme.palette.common["white"]};
	box-shadow: ${({ theme }) => theme.shadows.small};
	padding: 30px;
	border-radius: 8px;
	@media (max-width: 500px) {
		padding: 15px;	
	}
`;