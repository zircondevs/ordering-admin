import styled from "styled-components";
import { Flex } from "..";




export const OTPContainer =  styled(Flex)`
`;

export const Input =  styled("input")`
    height: 45px;
    width: 45px;
    margin: 5px;
    text-align: center;
    color: ${({ theme }) => theme?.palette?.Black["default"] };
    border: 1px solid  ${({ theme }) => theme.palette.Black[20] };
`;

 