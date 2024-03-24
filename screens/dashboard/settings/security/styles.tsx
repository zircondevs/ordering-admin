import styled from "styled-components";
import { Flex, Grid } from "../../../../components";



 
export const Main =  styled("div")`

	width: 100%;
`;
 
 
 
export const HeaderSTyles =  styled(Flex)`
	padding: 0  0;
`;





export const FormStyles =  styled(Grid)`
	max-width: 400px;
	padding: 30px;
	background-color: white;
	padding: 30px;
	box-shadow: ${({ theme }) => theme.shadows.small};
	border-radius: 8px;
	@media (max-width: 500px) {
		padding: 15px
	}
`;
 
 
 