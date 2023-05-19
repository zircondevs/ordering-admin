import { useCallback,  useState } from "react";


export const useGetHelpers = (props: any) => {
	const {
		length,
		isNumberInput,
		onChangeOTP,
		setActiveInput,
		activeInput,
	} = props; 

	// Define state otpValues = array with <length> items with default value = ""
	const [otpValues, setOTPValues] = useState(Array<string>(length).fill(""));


   
	const focusInput = useCallback( (inputIndex: number) => {
		const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
		setActiveInput(selectedIndex);
	},[length, setActiveInput]);


	const getRightValue = useCallback((str: string) => {
		const changedValue = str;
  
		if (!isNumberInput || !changedValue) {
			return changedValue;
		}
  
		return Number(changedValue) >= 0 ? changedValue : "";
	},[isNumberInput]);
  
	// Define some helper functions
	const focusPrevInput = useCallback(() => { focusInput(activeInput - 1);}, [activeInput, focusInput]);
  
	// Helper to return OTP from inputs
	const handleOtpChange = useCallback((otp: string[]) => { const otpValue = otp.join("");
		onChangeOTP(otpValue);
	},[onChangeOTP]);
  
	const changeCodeAtFocus = useCallback((str: string) => {
		const updatedOTPValues = [...otpValues];
		updatedOTPValues[activeInput] = str[0] || "";
		setOTPValues(updatedOTPValues);
		handleOtpChange(updatedOTPValues);
	},[activeInput, handleOtpChange, otpValues]);
  
  
	const focusNextInput = useCallback(() => {
		focusInput(activeInput + 1);
	}, [activeInput, focusInput]);
  
	const handleOnPaste = useCallback( (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pastedData = e.clipboardData
			.getData("text/plain")
			.trim()
			.slice(0, length - activeInput)
			.split("");
		if (pastedData) {
			let nextFocusIndex = 0;
			const updatedOTPValues = [...otpValues];
			updatedOTPValues.forEach((val, index) => {
				if (index >= activeInput) {
					const changedValue = getRightValue(pastedData.shift() || val);
					if (changedValue) {
						updatedOTPValues[index] = changedValue;
						nextFocusIndex = index;
					}
				}
			});
			setOTPValues(updatedOTPValues);
			setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
			onChangeOTP(updatedOTPValues.join(""));
		}
	},[activeInput, getRightValue, length, otpValues, onChangeOTP, setActiveInput]);
    

   
	return {
		focusInput,
		getRightValue,
		focusPrevInput,
		handleOtpChange,
		changeCodeAtFocus,
		focusNextInput,
		handleOnPaste, 
		otpValues,
	};
};




  
