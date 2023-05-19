
import styled from "styled-components";


export const LayoutStyles =  styled("div")`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme?.palette?.common["white"] };

`;
 
 
export const Container =  styled("section")`
	padding:  70px 0% 0px;
	position: relative;
	right: 0;
	margin: 0 0 0 auto; 
	min-height: calc(100vh - 0px);
	width: calc(100vw - 280px);
`;
 
 