// reference https://codesandbox.io/s/react-otp-input-scratch-zm034?from-embed=&file=/src/App.tsx:201-391
import { memo, useCallback, useState } from "react";
import {  OTPInputProps } from "./types";
import SingleOTPInput from "./singleInput";
import { useGetHelpers } from "./useHelpers";
import { OTPContainer } from "./styles";
import React from "react";


export function OTPInputComponent(props: OTPInputProps) {
	const {
		length,
		// isNumberInput,
		autoFocus,
		disabled,
		// onChangeOTP,
		inputClassName,
		inputStyle,
		...rest
	} = props;
	// Define state activeInput = 0
	const [activeInput, setActiveInput] = useState(0);
 
  

	const { focusInput,getRightValue,focusPrevInput ,changeCodeAtFocus,focusNextInput,handleOnPaste, otpValues } = useGetHelpers({ activeInput, setActiveInput, ...props});
  
    
  
	// Handle onFocus input
	const handleOnFocus = useCallback((index: number) => () => {
		focusInput(index);
	},[focusInput] );
  
	// Handle onChange value for each input
	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const val = getRightValue(e.currentTarget.value);
			if (!val) {
				e.preventDefault();
				return;
			}
			changeCodeAtFocus(val);
			focusNextInput();
		},
		[changeCodeAtFocus, focusNextInput, getRightValue]
	);
  

	const handleOnBlur = useCallback(() => {
		setActiveInput(-1);
	}, []);
  
	// Handle onKeyDown input
	const handleOnKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>) => {
			const pressedKey = e.key;
    
			switch (pressedKey) {
			case "Backspace":
			case "Delete": {
				e.preventDefault();
				if (otpValues[activeInput]) {
					changeCodeAtFocus("");
				} else {
					focusPrevInput();
				}
				break;
			}
			case "ArrowLeft": {
				e.preventDefault();
				focusPrevInput();
				break;
			}
			case "ArrowRight": {
				e.preventDefault();
				focusNextInput();
				break;
			}
			default: {
				// Ignore all special keys if it is not numeric or alphabet characters
				if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
					e.preventDefault();
				}
				break;
			}
			}
		},
		[activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues],
	);
    
    
  
 


	return (
		<OTPContainer {...rest}
			justifyContent='center'
		>
			{
				Array(length)
					.fill("")
					.map((_, index) => (
						<SingleOTPInput
							key={`SingleInput-${index}`}
							focus={activeInput === index}
							value={otpValues && otpValues[index]}
							autoFocus={autoFocus}
							onFocus={handleOnFocus(index)}
							onChange={handleOnChange}
							onKeyDown={handleOnKeyDown}
							onBlur={handleOnBlur}
							onPaste={handleOnPaste}
							style={inputStyle}
							className={inputClassName}
							disabled={disabled}
						/>
					))
			}
		</OTPContainer>
	);
}
  
const OTPInput = memo(OTPInputComponent);
export default OTPInput;