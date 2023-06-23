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