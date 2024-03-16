import styled from "styled-components";
import { Flex } from "..";
 
 

 
export const ChartStyles =  styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
   * {
	min-width: 100%;
	min-height: 100%;
	max-height: 300px;
  }
`;
export const EmptyChart =  styled(Flex)`
	padding: 24px;
	position: absolute;
	top: 0;
	bottom: 0;
	height: fit-content;
	width: fit-content;
	right: 0;
	left: 0;
	margin: auto;
	min-height: unset;
	min-width: unset;
	p {
		width: auto
	}
`;