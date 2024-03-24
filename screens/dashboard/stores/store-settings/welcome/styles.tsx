import styled from "styled-components";
import { Flex } from "../../../../../components";





 
  
 
 
  
export const LogoStyles =  styled("div")`
	border-radius: 100%;
	position: relative;
	height: 167px;
	width: 167px;
	margin-right: 24px;
	@media (max-width: 600px) {
		margin: 0;
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
export const VideoContainer =  styled(LogoStyles)`
	position: relative;
	flex: 1;
	min-width: 300px;
	& > video {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;
export const VideButtons =  styled(Flex)`
	position: absolute;
	height: auto;
	bottom: 20px;
	button {
		margin: 0 10px;
		background-color: ${({ theme }) => theme.palette.Grey["4"]};
		height: 30px;
		width: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		box-shadow: ${({ theme }) => theme.shadows.small};
		transition: 200ms linear;
		&:hover {
			background-color: ${({ theme }) => theme.palette.Grey["8"]};
			transform: scale(1.5)
		}
	}
`;