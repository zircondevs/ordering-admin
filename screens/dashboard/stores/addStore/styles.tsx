import styled from "styled-components";




 
 
  
 
export const Wrapper =  styled("div")`
	width: 100%;
	.submit-btn {
		position: absolute;
		bottom: 0;
		width: auto;
		right: 0;
		left: 0;
		background-color:  ${({ theme }) => theme?.palette?.common["white"] };
	}
`;

 