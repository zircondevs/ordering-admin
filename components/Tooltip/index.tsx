
import { LayoutWrap } from "./styles";
import React from "react"; 





const Tooltip = ({ message, right, left, top, bottom , children}: 
	{ 
		message: any, 
		children: JSX.Element, 
		right?: string;
		left?: string;
		top?: string;
		bottom?: string;
	} 
) => {


	return (
		<LayoutWrap 
			content={message} 
			top={top}
			right={right}
			left={left}
			bottom={bottom}
		>
 
			{children}
 
		</LayoutWrap>
	);
};
export default Tooltip;
 