
import styled from "styled-components";
import {  Button,   } from "..";


export const ButtonStyle =  styled(Button)<{
	bgColour?: string; txtColour: string;
	bodColour?: string;
	disabled: boolean;
	isLoading : boolean;
}>`
	font-family: ${({ theme }) => theme?.typography?.fontFamily["ubuntu"] };
    background-color: ${({ bgColour, disabled, isLoading  }) =>!disabled && !isLoading && bgColour && bgColour};
    border:   ${({ bodColour, disabled, isLoading }) => !disabled && !isLoading && bodColour &&  "1px solid " + bodColour};
	font-size: 16px;
	span {
		color: ${({ txtColour, isLoading, disabled  }) => !disabled && !isLoading  && txtColour};
		font-size: 14px;
	}
`;

 
 
 