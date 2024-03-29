import styled from "styled-components";
import { Flex, Grid } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
	padding-bottom: 20px;
`;
 
 

export const HeaderSTyles =  styled(Flex)`
	padding: 0  0;
`;

 
 
export const LogoStyles =  styled("div")`
	border-radius: 100%;
	position: relative;
	height: 167px;
	width: 167px;
	margin-right: 24px;
`;
export const FavStyles =  styled("div")`
	border-radius: 100%;
	position: relative;
	height: 100px;
	width: 100px;
	margin-right: 24px;
`;

 

 
export const Container1 =  styled(Flex)`
	background-color: ${({ theme }) => theme.palette.common["white"]};
	padding: 20px;
	border: 1px solid ${({ theme }) => theme.palette.Grey[5]};
	margin-bottom: 32px;
	border-radius: 8px;
	width: auto;
	& > div {
		width: auto;
	}
`;


export const FormStyles =  styled(Grid)`
	max-width: 700px;
	margin-bottom: 40px;
	padding: 30px;
	background-color: white;
	padding: 30px;
	box-shadow: ${({ theme }) => theme.shadows.small};
	border-radius: 8px;
	@media (max-width: 500px) {
		padding: 15px
	}
`;
 
export const COlorFields =  styled(Flex)`
	margin-top: 10px;
	height: auto;
	border: 1px solid ${({ theme }) => theme.palette.Grey[5]};
	border-radius: 8px;
	padding: 8px 12px;
	justify-content: space-between;
	& > div {
		cursor: pointer;
		height: 30px;
		width: 30px;
		border-radius: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		input {
			cursor: pointer;
			min-height: 40px;
			min-width: 40px;
			border-radius: 100%;
		}
	}
`;

 
 

 
 