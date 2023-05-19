
import { Flex } from "../../components";
import styled from "styled-components";


export interface RadiusType {
    borderRadius: string;
    handleOnChange: boolean;
}
 
 
export const ChrkMarkContainer =  styled(Flex)<RadiusType>`
    border-radius: ${({ borderRadius }) => borderRadius || "100%" };
	border: 1px solid  ${({ theme, colour }) => colour ||  theme.palette.Black.default};
	background-color:   ${({   bgColor }) => bgColor ||  "red"};
    min-width: ${({ size }) => size ? `${size + 2}px` : "22px" };
    min-height: ${({ size }) => size ? `${size + 2}px` : "22px" };
    cursor: ${({ handleOnChange }) => handleOnChange ? "pointer" : "default" };
    position: relative;
`;
 

 