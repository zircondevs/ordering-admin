import styled from "styled-components";




 
 
  
 
export const Footer =  styled("div")`
	position: absolute;
	bottom: 0;
	width: auto;
	right: 0;
	left: 0;
	background-color:  ${({ theme }) => theme?.palette?.common["white"] };
`;

export const ImageStyles =  styled("div")`
	border-radius: 100%;
	position: relative;
	height: 107px;
	width: 167px;
	margin-right: 24px;
`;



export const UploadBtnStyles =  styled("div")<{isLoading: boolean}>`
	margin-left: 8px;
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