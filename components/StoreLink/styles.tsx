import styled from "styled-components";
import { Flex } from "../../components";



 
 

export const StoreLinkStyles =  styled(Flex)<{copied: boolean}>`
	width: auto;
	justify-content: flex-end;
	@media (max-width: 700px) {
		margin:   20px 0;
	}
	& >  a b {
		padding: 0 0 0 5px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		display: block;
		width: 100%;
	}
	& > button {
		background-color:   ${({ theme , copied}) => copied ? theme.palette.Success[20] : theme.palette.Grey[6]};
		color:   ${({ theme , copied}) => copied ? theme.palette.Success[80] : theme.palette.Grey[2]};
		padding: 5px 10px;
		margin: 0 0 0 10px;
		border-radius: 16px;
		white-space: nowrap;
		min-width: auto;
	}
`;

 
 
 