import styled from "styled-components";
import { Flex, Grid } from "../../../../components";



 
export const Main =  styled("div")`
	width: 100%;
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
	height: 40px;
	width: 40px;
	margin-right: 24px;
`;

 

 
export const Container1 =  styled(Flex)`
	background-color: ${({ theme }) => theme.palette.Grey[6]};
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

 
 

 
 