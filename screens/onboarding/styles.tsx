import styled from "styled-components";
import { Flex, Span } from "../../components";



 
export const Main =  styled(Flex)`
	min-height: calc(100vh - 70px);
	width: auto;
	& > div {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		max-width: 600px;
		background-color: white;
	}
	.submit-btn {
		margin-top: 40px;
		border-radius: 8px;
		overflow: hidden;
	}
`;
 
 
export const SkipStyles =  styled(Span)`
	position: absolute;
	right: 24px;
	top: 24px;
	cursor: pointer;
	&:hover{
		text-decoration: underline;
	}
`;
 

  
 