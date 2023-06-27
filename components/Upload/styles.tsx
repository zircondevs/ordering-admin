import styled from "styled-components";
import { Flex } from "..";





 
 
 
 

export const UploadBtnStyles =  styled(Flex)<{loadingImage: boolean}>`
	width: 100%;
	height: auto;
	max-width: 500px;
	border-radius: 16px;
	cursor: ${({ loadingImage }) => loadingImage ? "not-allowed" : "pointer"};
	border-radius: 8px;
	padding: 20px 40px;
	position: relative;
	background-color:  ${({ theme }) => theme.palette.common["white"]};
	border: 1px solid ${({ theme }) => theme.palette.Grey[6]};
	& > input {
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		opacity: 0;
		cursor: pointer;
	}
	& > .icon {
		border-radius: 100%;
		background-color: ${({ theme }) => theme.palette.Grey[6]};
	}
	& > div:not(.icon) {
		flex: 1;
		margin-left: 16px;
	}
`;

 
export const SettingsUploadBtnStyles =  styled("div")<{isLoading: boolean}>`
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
		opacity: ${({ isLoading }) => isLoading ? 0 : 1};
	}
`;