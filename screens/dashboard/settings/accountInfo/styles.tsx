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

 

 
export const FormStyles =  styled(Grid)`
	max-width: 400px;
`;
 
export const COlorFields =  styled(Flex)`
	margin-top: 16px;
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
		input {
			cursor: pointer;
		}
	}
`;

 
export const UploadBtnStyles =  styled("div")<{isLoading: boolean}>`
	cursor: pointer;
	input {
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		opacity: 0;
	}
	.loader {
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: max-content;
		height: max-content;
		margin: auto;
	}
	width: max-content;
	border-radius: 8px;
	padding: 10px 16px;
	position: relative;
	border: 1px solid ${({ theme }) => theme.palette.Grey[1]};
	span {
		opacity: ${({ isLoading }) => isLoading ? 0 : 1}
	}
`;

 
 