import styled from "styled-components";
import { Grid } from "../../../../../components";





 
  
 
 
  
export const Main =  styled(Grid)`
	max-width: 500px;
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