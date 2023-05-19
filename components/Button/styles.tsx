
import styled from "styled-components";
import {  Button,   } from "..";


export const ButtonStyle =  styled(Button)<{
	bgColour?: string; txtColour: string;
	bodColour?: string;
	disabled: boolean;
	isLoading : boolean;
}>`
    background-color: ${({ bgColour, disabled, isLoading  }) =>!disabled && !isLoading && bgColour && bgColour};
    color: ${({ txtColour, isLoading  }) =>!isLoading  && txtColour};
    border:   ${({ bodColour, disabled, isLoading }) => !disabled && !isLoading && bodColour &&  "1px solid " + bodColour};
`;

 
 
 