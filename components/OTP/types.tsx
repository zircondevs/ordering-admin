export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}


export interface OTPInputProps {
    length: number; // Number of inputs
    // eslint-disable-next-line no-unused-vars
    onChangeOTP: (otp: string) => any; // Handle onOTPChange to use its value
  
    autoFocus?: boolean; // Auto focus to input programmatically
    isNumberInput?: boolean; // If otp is number
    disabled?: boolean; 
  
    style?: any //CSSProperties; // Style for container OTP
    className?: string;   // Class for container OTP
  
    inputStyle?: any//CSSProperties; // Style for input
    inputClassName?: string; // Class for input
  }