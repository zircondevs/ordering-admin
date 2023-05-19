
import styled from "styled-components";


export const LayoutStyles =  styled("div")`
    width: 100%;
    min-height: 100vh;
	background-color: #f2f2f2;
	 & > header {
		padding: 0 7% 0;
	 }
`;
 
 
export const Container =  styled("section")`
	padding: 70px 7% 0;

	position: relative;
	right: 0;
	margin: 0  auto; 
	min-height: calc(100vh - 0px);
	max-width: 1200px;
	@media (${({theme}) => theme.mediaQuery.below.tab}) {
		width: 100%;
	}
	 & > div > div {
		margin-top: 24px;
		margin-bottom: 24px;
	 }
`;
 
 