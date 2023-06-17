

 
import React  from "react";
import { ButtonStyle } from "./styles";



interface ButtonType {
	bgColour?: string;
	txtColour?: string;
	bodColour?: string;
	isLoading?: boolean;
    disabled?: boolean;
    bgColor?: string;
    size?: string;
    hasIcon?: boolean;
    fullwidth?: boolean;
    nonActiveColor?: string;
    activeColor?: string;
    nonActiveBgColor?: string;
    activeBgColor?: string;
    nonActiveBorderColor?: string;
    activeBorderColor?: string;
    borderRadius?: string;
    pad?: string;
    text?: string;
	[e: string]: any
}


const CustomButton = ({
	bgColour,
	txtColour, 
	bodColour,
	text,
	...props
}: ButtonType ) => {

	return (
		<ButtonStyle
			size={props?.size || "14"}
			nonActiveColor={props?.nonActiveColor || "Black.20"}
			activeColor={props?.activeColor ||"Black.default"}
			nonActiveBgColor={props?.nonActiveBgColor || "Grey.6"}
			nonActiveBorderColor={props?.nonActiveBorderColor ||"Grey.5"}
			activeBgColor={props?.activeBgColor ||"transparent.default"}
			activeBorderColor={props?.activeBorderColor ||"Black.default"}
			borderRadius={props?.borderRadius ||"8"}
			pad={props?.pad ||"padding.small"}
			fullwidth={props?.fullwidth || false}
			loaderSize={30}
			disabled={props?.disabled || false}
			isLoading ={props?.isLoading  || false}
			bgColour={bgColour}
			txtColour={txtColour}
			bodColour={bodColour}
			text={text}
			{...props}
		/>
 
	);
};
export default CustomButton;
 