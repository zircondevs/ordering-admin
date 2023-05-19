
import {  Flex } from "..";
import styled from "styled-components";

  
export const SearchContainer =  styled(Flex)`
    border: 1px solid ${({ theme}) => theme.palette.Black[20]};
    background-color:${({ theme}) => theme.palette.common.white};
    border-radius: 8px;
    input {
        padding: 12px;
        flex: 1;
    }
    width: 100%;
	svg {
		margin-left: 8px;
	}
`;
 