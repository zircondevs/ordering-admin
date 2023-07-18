/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { theme } from "../../../config/theme";
import { extractObjectValueFromNestedObject } from "../../../lib";
 


interface Props {
    height?: string;
    width?: string;
    colour?: string;
    color2?: string;
}
 

export const CheckMarkIcon = (
	{ height, width, colour, colour2  }: { height?: string; width?: string; colour?: string; colour2?: string}

) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 512 512"
	>
		<path 
			d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256z"  
			fill={  colour || "currentColor"
			}
		/>
		<path 
			d="m379.8 169.7c6.2 6.2 6.2 16.4 0 22.6l-150 150c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7l-75-75c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l63.7 63.7 138.7-138.7c6.2-6.3 16.4-6.3 22.6 0z" 
			fill={  colour2 || "currentColor"
			}
		/>
	</svg>
);

export const OTHAIcon = (
	{ height, width, colour,  }: { height?: string; width?: string; colour?: string;  }

) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 30 32"
		fill="transparent"
	>
		<path d="M0 2.15816V7.66558C0 10.4067 2.17416 12.702 4.9153 12.7478C7.71587 12.7935 9.99977 10.5393 9.99977 7.74788C9.99977 10.5096 12.2379 12.7478 14.9997 12.7478C17.7614 12.7478 19.9995 10.5096 19.9995 7.74788C19.9995 10.537 22.2834 12.7935 25.084 12.7478C27.8252 12.702 29.9993 10.409 29.9993 7.66558V2.15816C29.9993 0.967056 29.0345 0 27.8412 0H2.15816C0.96477 0 0 0.96477 0 2.15816Z" fill={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }/>
		<path d="M25.1229 15.0339H24.9994C23.0653 15.0339 21.3049 14.2772 19.9995 13.0449C18.6941 14.2795 16.9338 15.0362 14.9996 15.0362C13.0655 15.0362 11.3075 14.2795 10.002 13.0472C8.64405 14.332 6.87683 15.0362 4.99988 15.0362H4.87642C4.14484 15.0225 3.43841 14.899 2.77313 14.6795V26.0716C2.77313 29.1008 5.23078 31.5584 8.25998 31.5584H21.7416C24.7708 31.5584 27.2284 29.1008 27.2284 26.0716V14.6795C26.5632 14.899 25.8567 15.0225 25.1252 15.0339H25.1229ZM21.8651 18.2849C21.8651 22.1394 18.6713 25.2623 14.7916 25.148C11.0583 25.036 8.13424 21.8765 8.13424 18.1408V17.8345H11.1954V18.1866C11.1954 20.315 12.9375 22.1256 15.0637 22.0914C17.1304 22.0571 18.8016 20.363 18.8016 18.2894V17.8368H21.8628V18.2894L21.8651 18.2849Z" fill={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }/>
 

	</svg>
);
 
export const PlusIcon = (
	{ height, width, colour,  }: { height?: string; width?: string; colour?: string;  }

) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 256 256"
		fill="transparent"
	>
		<rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
	</svg>
);



export const WarningIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		x="0px"
		y="0px"
		viewBox="0 0 256 256"
		height={height || "52"}
		width={width || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
	>
		<rect width="256" height="256" fill="none"></rect><path d="M236.7,188,148.8,36a24,24,0,0,0-41.6,0h0L19.3,188A23.9,23.9,0,0,0,40,224H216a23.9,23.9,0,0,0,20.7-36ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"></path> 
	</svg>
);


  
export const AddressIcon = ({ height, width, colour }: Props) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}

		fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
		width={width || "52"}
		
		viewBox="0 0 20 20"
	>
		<path d="M1.66699 4.16666L7.50033 1.66666L12.5003 4.16666L17.7528 1.91582C17.8162 1.88864 17.8854 1.87763 17.9541 1.88378C18.0228 1.88992 18.0889 1.91303 18.1465 1.95103C18.2041 1.98903 18.2513 2.04073 18.284 2.10149C18.3167 2.16225 18.3337 2.23017 18.3337 2.29916V15.8333L12.5003 18.3333L7.50033 15.8333L2.24783 18.0842C2.18442 18.1113 2.11526 18.1224 2.04655 18.1162C1.97784 18.1101 1.91172 18.087 1.85415 18.049C1.79657 18.011 1.74933 17.9593 1.71666 17.8985C1.684 17.8377 1.66693 17.7698 1.66699 17.7008V4.16666ZM13.3337 16.1625L16.667 14.7342V4.19416L13.3337 5.62249V16.1625ZM11.667 16.0533V5.61332L8.33366 3.94666V14.3867L11.667 16.0533ZM6.66699 14.3775V3.83749L3.33366 5.26582V15.8058L6.66699 14.3775Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } />
 

	</svg>

);

export const TrashIcon = ({ height, width, colour }: Props) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		fill={"none"}
		width={width || "52"}
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
		<line x1="104" y1="104" x2="104" y2="168" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }   strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
		<line x1="152" y1="104" x2="152" y2="168" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
		<path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/> 
	</svg>

);
export const EditIcon = ({ height, width, colour }: Props) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		fill={"none"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M5 19H6.414L15.728 9.686L14.314 8.272L5 17.586V19ZM21 21H3V16.757L16.435 3.322C16.6225 3.13453 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13453 17.849 3.322L20.678 6.151C20.8655 6.33853 20.9708 6.59284 20.9708 6.858C20.9708 7.12316 20.8655 7.37747 20.678 7.565L9.243 19H21V21ZM15.728 6.858L17.142 8.272L18.556 6.858L17.142 5.444L15.728 6.858Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } />
 

	</svg>

);

  
 
 


export const PasswordEyeIcon = ({ height, width, colour }: Props) => (
	<svg
		height={height || "52"}
		fill={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 511.999 511.999"
	>
 
		<path
			d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035    c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201    C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418    c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418    C447.361,287.923,358.746,385.406,255.997,385.406z"
			fill={ colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}
			data-original="#000000"
		/>
		
		<path
			d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275    s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516    s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"
			fill={colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}
			data-original="#000000"
		/>
	</svg>
);

export const LogOutIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 256 256"
		fill="transparent"
	> 	
		<rect width="256" height="256" fill="none"/><path d="M104,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h56" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="176 88 216 128 176 168" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/> 
	</svg>
);

export const Check2Icon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		x="0"
		y="0"
		fill={colour || "currentColor"}
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><polyline points="40 144 96 200 224 72" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"} 
			strokeLinecap="round" strokeLinejoin="round" strokeWidth="30"/> 
	</svg>
);
export const EmptyIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		x="0"
		y="0"
		fill={colour || "currentColor"}
		viewBox="0 0 1024 1024"
	>

		<path d="M660 103.2l-149.6 76 2.4 1.6-2.4-1.6-157.6-80.8L32 289.6l148.8 85.6v354.4l329.6-175.2 324.8 175.2V375.2L992 284.8z" fill="#ececec" /><path d="M180.8 737.6c-1.6 0-3.2 0-4-0.8-2.4-1.6-4-4-4-7.2V379.2L28 296c-2.4-0.8-4-4-4-6.4s1.6-5.6 4-7.2l320.8-191.2c2.4-1.6 5.6-1.6 8 0l154.4 79.2L656 96c2.4-1.6 4.8-0.8 7.2 0l332 181.6c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2l-152.8 88v350.4c0 3.2-1.6 5.6-4 7.2-2.4 1.6-5.6 1.6-8 0l-320-174.4-325.6 173.6c-1.6 0.8-2.4 0.8-4 0.8zM48 289.6L184.8 368c2.4 1.6 4 4 4 7.2v341.6l317.6-169.6c2.4-1.6 5.6-1.6 7.2 0l312.8 169.6V375.2c0-3.2 1.6-5.6 4-7.2L976 284.8 659.2 112.8 520 183.2c0 0.8-0.8 0.8-0.8 1.6-2.4 4-7.2 4.8-11.2 2.4l-1.6-1.6h-0.8l-152.8-78.4L48 289.6z" fill="#dbd8d8" /><path d="M510.4 179.2l324.8 196v354.4L510.4 554.4z" fill="#dbd8d8" /><path d="M510.4 179.2L180.8 375.2v354.4l329.6-175.2z" fill="#bebebe" /><path d="M835.2 737.6c-1.6 0-2.4 0-4-0.8l-324.8-176c-2.4-1.6-4-4-4-7.2V179.2c0-3.2 1.6-5.6 4-7.2 2.4-1.6 5.6-1.6 8 0L839.2 368c2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2h-4zM518.4 549.6l308.8 167.2V379.2L518.4 193.6v356z" fill="#dbd8d8" /><path d="M180.8 737.6c-1.6 0-3.2 0-4-0.8-2.4-1.6-4-4-4-7.2V375.2c0-3.2 1.6-5.6 4-7.2l329.6-196c2.4-1.6 5.6-1.6 8 0 2.4 1.6 4 4 4 7.2v375.2c0 3.2-1.6 5.6-4 7.2l-329.6 176h-4z m8-358.4v337.6l313.6-167.2V193.6L188.8 379.2z" fill="#dbd8d8" /><path d="M510.4 550.4L372 496 180.8 374.4v355.2l329.6 196 324.8-196V374.4L688.8 483.2z" fill="#b8b0a8" /><path d="M510.4 933.6c-1.6 0-3.2 0-4-0.8L176.8 736.8c-2.4-1.6-4-4-4-7.2V374.4c0-3.2 1.6-5.6 4-7.2 2.4-1.6 5.6-1.6 8 0L376 488.8l135.2 53.6 174.4-66.4L830.4 368c2.4-1.6 5.6-2.4 8-0.8 2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2l-324.8 196s-1.6 0.8-3.2 0.8z m-321.6-208l321.6 191.2 316.8-191.2V390.4L693.6 489.6c-0.8 0.8-1.6 0.8-1.6 0.8l-178.4 68c-1.6 0.8-4 0.8-5.6 0L369.6 504c-0.8 0-0.8-0.8-1.6-0.8L188.8 389.6v336z" fill="#dbd8d8" /><path d="M510.4 925.6l324.8-196V374.4L665.6 495.2l-155.2 55.2z" fill="#bebebe" /><path d="M510.4 933.6c-1.6 0-2.4 0-4-0.8-2.4-1.6-4-4-4-7.2V550.4c0-3.2 2.4-6.4 5.6-7.2L662.4 488l168-120c2.4-1.6 5.6-1.6 8-0.8 2.4 1.6 4 4 4 7.2v355.2c0 3.2-1.6 5.6-4 7.2l-324.8 196s-1.6 0.8-3.2 0.8z m8-377.6v355.2l308.8-185.6V390.4L670.4 501.6c-0.8 0.8-1.6 0.8-1.6 0.8l-150.4 53.6z" fill="#dbd8d8" /><path d="M252.8 604l257.6 145.6V550.4l-147.2-49.6-182.4-126.4z" fill="#bebebe" /><path d="M32 460l148.8-85.6 329.6 176L352 640.8z" fill="#ececec" /><path d="M659.2 693.6l176-90.4V375.2L692 480.8l-179.2 68-2.4 1.6z" fill="#bebebe" /><path d="M510.4 550.4l148.8 85.6L992 464.8l-156.8-89.6z" fill="#ececec" /><path d="M352 648.8c-1.6 0-2.4 0-4-0.8l-320-180.8c-2.4-1.6-4-4-4-7.2s1.6-5.6 4-7.2L176.8 368c2.4-1.6 5.6-1.6 8 0l329.6 176c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2L356 648c-0.8 0.8-2.4 0.8-4 0.8zM48 460L352 632l141.6-80.8L180.8 384 48 460z" fill="#dbd8d8" /><path d="M659.2 644c-1.6 0-2.4 0-4-0.8L506.4 557.6c-2.4-1.6-4-4-4-7.2s1.6-5.6 4-7.2l324.8-176c2.4-1.6 5.6-1.6 8 0l156.8 90.4c2.4 1.6 4 4 4 7.2s-1.6 5.6-4 7.2L663.2 643.2c-1.6 0.8-2.4 0.8-4 0.8zM527.2 550.4l132.8 76L976 464l-141.6-80-307.2 166.4z" fill="#dbd8d8" /> 
	</svg>
);
 
 
export const NotificationIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
		fill="none" 
	>
		<path   d="M12 6.43994V9.76994" 
			stroke={colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"} 
			strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
		<path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" 
			stroke={colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"} 
			strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
		<path   d="M15.3299 18.8198C15.3299 20.6498 13.8299 22.1498 11.9999 22.1498C11.0899 22.1498 10.2499 21.7698 9.64992 21.1698C9.04992 20.5698 8.66992 19.7298 8.66992 18.8198" 
			stroke={colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"} 
			strokeWidth="1.5" strokeMiterlimit="10"/>
 
	</svg>
);

export const AvatarIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24"
		fill="transparent"
	> 	
		<path 
			d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z" 
			stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"
			} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path 
			d="M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43C9.9107 22.27 14.4207 22.27 17.1707 20.43C19.5907 18.81 19.5907 16.17 17.1707 14.56C14.4307 12.73 9.9207 12.73 7.1607 14.56Z" 
			stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
 

	</svg>
);
export const UsersIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 256 256"
		fill="transparent"
	> 	
		<rect width="256" height="256" fill="none"/><path d="M192,120a59.91,59.91,0,0,1,48,24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M16,144a59.91,59.91,0,0,1,48-24" fill="none" stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="128" cy="144" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M72,216a65,65,0,0,1,112,0" fill="none" stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M161,80a32,32,0,1,1,31,40" fill="none" stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M64,120A32,32,0,1,1,95,80" fill="none" stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/> 
	</svg>
);
export const OrderIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 44 44"
		fill="transparent"
	> 	
		<path d="M12.1003 4H31.9003C32.1797 4 32.4553 4.06506 32.7053 4.19003C32.9552 4.315 33.1726 4.49645 33.3403 4.72L38.2003 11.2V38.2C38.2003 38.6774 38.0106 39.1352 37.6731 39.4728C37.3355 39.8104 36.8777 40 36.4003 40H7.60029C7.1229 40 6.66507 39.8104 6.3275 39.4728C5.98994 39.1352 5.80029 38.6774 5.80029 38.2V11.2L10.6603 4.72C10.828 4.49645 11.0454 4.315 11.2953 4.19003C11.5452 4.06506 11.8209 4 12.1003 4ZM34.6003 14.8H9.40029V36.4H34.6003V14.8ZM33.7003 11.2L31.0003 7.6H13.0003L10.3003 11.2H33.7003ZM16.6003 18.4V22C16.6003 23.4322 17.1692 24.8057 18.1819 25.8184C19.1946 26.8311 20.5681 27.4 22.0003 27.4C23.4325 27.4 24.806 26.8311 25.8187 25.8184C26.8314 24.8057 27.4003 23.4322 27.4003 22V18.4H31.0003V22C31.0003 24.3869 30.0521 26.6761 28.3643 28.364C26.6764 30.0518 24.3872 31 22.0003 31C19.6133 31 17.3242 30.0518 15.6363 28.364C13.9485 26.6761 13.0003 24.3869 13.0003 22V18.4H16.6003Z" fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}/>
 

	</svg>
);
export const LoyaltyIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 23 19" 
		fill="transparent"
	> 	

		<path d="M8.33 9.5H10.5C11.6935 9.5 12.8381 9.97411 13.682 10.818C14.5259 11.6619 15 12.8065 15 14H7.999L8 15H16V14C15.9968 12.936 15.6894 11.895 15.114 11H18C18.9453 10.9997 19.8712 11.2674 20.6705 11.772C21.4698 12.2767 22.1097 12.9975 22.516 13.851C20.151 16.972 16.322 19 12 19C9.239 19 6.9 18.41 5 17.375V8.071C6.21661 8.24528 7.36547 8.73829 8.33 9.5ZM3 7C3.24493 7.00003 3.48134 7.08996 3.66437 7.25272C3.84741 7.41548 3.96434 7.63975 3.993 7.883L4 8V17C4 17.2652 3.89464 17.5196 3.70711 17.7071C3.51957 17.8946 3.26522 18 3 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V8C0 7.73479 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3ZM12.646 1.575L13 1.93L13.354 1.576C13.5858 1.34222 13.8615 1.15653 14.1653 1.02958C14.469 0.902639 14.7949 0.836944 15.1241 0.83627C15.4533 0.835596 15.7795 0.899956 16.0837 1.02566C16.388 1.15135 16.6645 1.33592 16.8973 1.56875C17.13 1.80158 17.3145 2.07809 17.4401 2.38241C17.5657 2.68673 17.63 3.01287 17.6292 3.34209C17.6285 3.67131 17.5627 3.99715 17.4356 4.30088C17.3086 4.60461 17.1228 4.88026 16.889 5.112L13 9L9.11 5.11C8.87622 4.87819 8.69053 4.60249 8.56358 4.29872C8.43664 3.99495 8.37094 3.66911 8.37027 3.33988C8.36959 3.01066 8.43396 2.68454 8.55965 2.38026C8.68535 2.07597 8.86992 1.79951 9.10275 1.56675C9.33558 1.33398 9.61209 1.1495 9.91641 1.02388C10.2207 0.89827 10.5469 0.834002 10.8761 0.834769C11.2053 0.835536 11.5311 0.901323 11.8349 1.02835C12.1386 1.15538 12.4143 1.34115 12.646 1.575Z" fill={colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"}/>
 

 

	</svg>
);
export const AvatarIcon2 = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		height={height || "52"}
		stroke={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		viewBox="0 0 460.8 460.8"
	>
		<g>
			<path
				d="M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641    S296.261,0,230.432,0z"
				fill={  colour ? 
					(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
					: "currentColor"
				}
				data-original="#000000"
			/>
			<path
				d="M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784    c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555    c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943    c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167    c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02    c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898    C436.8,341.682,437.322,338.024,435.755,334.89z"
				fill={  colour ? 
					(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
					: "currentColor"
				}
				data-original="#000000"
			/>
		</g>{" "}
	</svg>
);
 

export const DotsIcon = ({ height, width, colour }:  { height?: string; width?: string; colour?: string}) => (
	<svg
		height={height || "52"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 4 16" 
		fill="none" 
	>
		<path 
			d="M1.99992 4.1111C2.92214 4.1111 3.66658 3.36666 3.66658 2.44444C3.66658 1.52222 2.92214 0.777771 1.99992 0.777771C1.0777 0.777771 0.333252 1.52222 0.333252 2.44444C0.333252 3.36666 1.0777 4.1111 1.99992 4.1111ZM1.99992 6.33333C1.0777 6.33333 0.333252 7.07777 0.333252 7.99999C0.333252 8.92221 1.0777 9.66666 1.99992 9.66666C2.92214 9.66666 3.66658 8.92221 3.66658 7.99999C3.66658 7.07777 2.92214 6.33333 1.99992 6.33333ZM1.99992 11.8889C1.0777 11.8889 0.333252 12.6333 0.333252 13.5555C0.333252 14.4778 1.0777 15.2222 1.99992 15.2222C2.92214 15.2222 3.66658 14.4778 3.66658 13.5555C3.66658 12.6333 2.92214 11.8889 1.99992 11.8889Z" 
			fill={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			}
		/>
 

	</svg>
);


 
 
 
export const LoaderIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		viewBox="0 0 100 100"
	>
		<path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
			<animateTransform
				attributeName="transform"
				attributeType="XML"
				type="rotate"
				dur="1s"
				from="0 50 50"
				to="360 50 50"
				repeatCount="indefinite"
			/>
		</path>
	</svg>
);
 
 
 
 
export const PaymentIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		viewBox="0 0 1024 1024" 
	>
		<path d="M365.71 548.57h438.86v73.14H365.71zM365.7 402.56h219.43v73.14H365.7zM365.71 694.86h438.86V768H365.71zM639.76 321.68v54.86h63.93v18.58h-61.9v54.86h61.9v59.61h54.85v-59.61h61.88v-54.86h-61.88v-18.58h63.93v-54.86h-32.09l43.84-43.84-38.78-38.79-64.32 64.33-64.33-64.33-38.78 38.79 43.84 43.84z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString() : "currentColor"}/><path d="M219.44 109.62v219.52H73.14v475.43c0 60.59 49.12 109.71 109.71 109.71 0.3 0 0.58-0.09 0.89-0.09h631.8c74.62 0 135.32-61.14 135.32-136.3V109.62H219.44z m-36.58 731.52c-20.17 0-36.57-16.41-36.57-36.57V402.29h73.14v402.29c0 20.01-16.18 36.23-36.13 36.48h-0.43l-0.01 0.08z m694.86-63.25c0 34.82-27.89 63.16-62.18 63.16H285.88c4.06-11.47 6.69-23.62 6.69-36.48V378.93h0.01V182.77h585.14v595.12z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString() : "currentColor"} /> 
	</svg>
);
 
 
 
export const UploadIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString() : "currentColor"}
		width={width || "52"}
		viewBox="0 0 22 20"
	>
		<path d="M2.43192 17.5H19.5748V9.99999H21.7176V18.5714C21.7176 18.8556 21.6048 19.1281 21.4038 19.329C21.2029 19.53 20.9304 19.6428 20.6462 19.6428H1.36049C1.07633 19.6428 0.803808 19.53 0.602877 19.329C0.401945 19.1281 0.289063 18.8556 0.289062 18.5714V9.99999H2.43192V17.5ZM12.0748 6.7857V14.2857H9.93192V6.7857H4.57478L11.0033 0.357132L17.4319 6.7857H12.0748Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString() : "currentColor"}/>
 

	</svg>
);
 
 
 
 
 
export const DataIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M12 4C18.075 4 23 6.686 23 10V14C23 17.314 18.075 20 12 20C6.033 20 1.176 17.409 1.005 14.177L1 14V10C1 6.686 5.925 4 12 4ZM12 16C8.28 16 4.99 14.993 3 13.45V14C3 15.882 6.883 18 12 18C17.01 18 20.838 15.97 20.995 14.118L21 14L21.001 13.45C19.011 14.992 15.721 16 12 16ZM12 6C6.883 6 3 8.118 3 10C3 11.882 6.883 14 12 14C17.117 14 21 11.882 21 10C21 8.118 17.117 6 12 6Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  />
	</svg>
);
 
 
 
 
export const BankIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><polygon points="24 96 232 96 128 32 24 96" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="56" y1="96" x2="56" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="104" y1="96" x2="104" y2="176" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="152" y1="96" x2="152" y2="176" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="200" y1="96" x2="200" y2="176" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="176" x2="224" y2="176" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="16" y1="208" x2="240" y2="208" fill="none" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/> 
	</svg>
);
 
 
 
 
export const WithdrawalIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M5.88889 3.75C6.3031 3.75 6.63889 3.41421 6.63889 3C6.63889 2.58579 6.3031 2.25 5.88889 2.25V3.75ZM10 2.25C9.58579 2.25 9.25 2.58579 9.25 3C9.25 3.41421 9.58579 3.75 10 3.75V2.25ZM18.1111 3.75C19.8214 3.75 21.25 5.19049 21.25 7.02036H22.75C22.75 4.40946 20.6964 2.25 18.1111 2.25V3.75ZM5.88889 2.25C3.30359 2.25 1.25 4.40946 1.25 7.02036H2.75C2.75 5.19049 4.17864 3.75 5.88889 3.75V2.25ZM21.25 7.02036C21.25 8.68726 20.0607 10.0357 18.557 10.2581L18.7764 11.7419C21.0419 11.4069 22.75 9.40421 22.75 7.02036H21.25ZM5.44305 10.2581C3.93934 10.0357 2.75 8.68726 2.75 7.02036H1.25C1.25 9.40422 2.95811 11.4069 5.22362 11.7419L5.44305 10.2581ZM10 3.75H18.1111V2.25H10V3.75Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }/>
		<path d="M12 9V14M12 14L14 11.6667M12 14L10 11.6667" stroke={ colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } fill="transparent"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M5 10C5 8.11438 5 7.17157 5.58579 6.58579C6.17157 6 7.11438 6 9 6H15C16.8856 6 17.8284 6 18.4142 6.58579C19 7.17157 19 8.11438 19 10V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V10Z" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } fill="transparent" strokeWidth="1.5"/>
		<path d="M5 17H13M19 17H17" stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
 
	</svg>
);
 
 
export const StoreIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>

		<path d="M21 11.646V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8947 20.2652 22 20 22H4C3.73479 22 3.48043 21.8947 3.2929 21.7071C3.10536 21.5196 3 21.2652 3 21V11.646C2.35432 10.916 1.99856 9.97462 2 9.00002V3.00002C2 2.7348 2.10536 2.48044 2.2929 2.29291C2.48043 2.10537 2.73479 2.00002 3 2.00002H21C21.2652 2.00002 21.5196 2.10537 21.7071 2.29291C21.8946 2.48044 22 2.7348 22 3.00002V9.00002C22 10.014 21.622 10.94 21 11.646ZM19 12.874C18.2849 13.0577 17.5328 13.0403 16.827 12.8236C16.1211 12.6069 15.4889 12.1994 15 11.646C14.625 12.0721 14.1635 12.4133 13.6461 12.6468C13.1288 12.8803 12.5676 13.0007 12 13C11.4324 13.0007 10.8712 12.8803 10.3539 12.6468C9.83655 12.4133 9.37498 12.0721 9 11.646C8.51232 12.201 7.88013 12.6096 7.17389 12.8264C6.46764 13.0432 5.71507 13.0597 5 12.874V20H19V12.874ZM14 9.00002C14 8.7348 14.1054 8.48044 14.2929 8.29291C14.4804 8.10537 14.7348 8.00002 15 8.00002C15.2652 8.00002 15.5196 8.10537 15.7071 8.29291C15.8946 8.48044 16 8.7348 16 9.00002C16 9.53045 16.2107 10.0392 16.5858 10.4142C16.9609 10.7893 17.4696 11 18 11C18.5304 11 19.0391 10.7893 19.4142 10.4142C19.7893 10.0392 20 9.53045 20 9.00002V4.00002H4V9.00002C4 9.53045 4.21072 10.0392 4.58579 10.4142C4.96086 10.7893 5.46957 11 6 11C6.53044 11 7.03914 10.7893 7.41422 10.4142C7.78929 10.0392 8 9.53045 8 9.00002C8 8.7348 8.10536 8.48044 8.2929 8.29291C8.48043 8.10537 8.73479 8.00002 9 8.00002C9.26522 8.00002 9.51957 8.10537 9.70711 8.29291C9.89465 8.48044 10 8.7348 10 9.00002C10 9.53045 10.2107 10.0392 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0392 14 9.53045 14 9.00002Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  />

	</svg>
);
 
 
 
export const MenuIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M21 2V22H19V15H15V8C15 6.4087 15.6321 4.88258 16.7574 3.75736C17.8826 2.63214 19.4087 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C5.87081 13.6691 4.85599 13.0554 4.12714 12.1625C3.3983 11.2697 3.00014 10.1526 3 9V3H5V10H7V3H9V10H11V3H13V9C12.9999 10.1526 12.6017 11.2697 11.8729 12.1625C11.144 13.0554 10.1292 13.6691 9 13.9Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  />

	</svg>
);
 
 
 
export const SettingsIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M3.34006 17C2.91733 16.269 2.58873 15.4875 2.36206 14.674C2.85537 14.4231 3.26965 14.0407 3.55909 13.5689C3.84852 13.0972 4.00183 12.5546 4.00203 12.0011C4.00224 11.4477 3.84934 10.905 3.56026 10.433C3.27118 9.96108 2.85718 9.5783 2.36406 9.32703C2.8161 7.69252 3.67679 6.19998 4.86506 4.99003C5.32915 5.29175 5.86768 5.45919 6.42104 5.47381C6.9744 5.48843 7.52101 5.34966 8.00039 5.07286C8.47977 4.79606 8.87321 4.39203 9.13719 3.90547C9.40116 3.41891 9.52537 2.8688 9.49606 2.31603C11.1382 1.89165 12.8613 1.89234 14.5031 2.31803C14.474 2.87079 14.5985 3.42082 14.8626 3.90724C15.1268 4.39366 15.5204 4.7975 15.9999 5.07409C16.4794 5.35068 17.026 5.48922 17.5793 5.47438C18.1327 5.45954 18.6711 5.29191 19.1351 4.99003C19.7141 5.58003 20.2281 6.25103 20.6601 7.00003C21.0931 7.74903 21.4171 8.53003 21.6381 9.32603C21.1448 9.57693 20.7305 9.9594 20.441 10.4311C20.1516 10.9029 19.9983 11.4455 19.9981 11.9989C19.9979 12.5524 20.1508 13.0951 20.4399 13.567C20.7289 14.039 21.1429 14.4218 21.6361 14.673C21.184 16.3075 20.3233 17.8001 19.1351 19.01C18.671 18.7083 18.1324 18.5409 17.5791 18.5262C17.0257 18.5116 16.4791 18.6504 15.9997 18.9272C15.5204 19.204 15.1269 19.608 14.8629 20.0946C14.599 20.5811 14.4748 21.1313 14.5041 21.684C12.862 22.1084 11.1388 22.1077 9.49706 21.682C9.52611 21.1293 9.40166 20.5792 9.13748 20.0928C8.8733 19.6064 8.4797 19.2026 8.00023 18.926C7.52076 18.6494 6.97412 18.5108 6.42079 18.5257C5.86746 18.5405 5.32902 18.7081 4.86506 19.01C4.27405 18.407 3.76166 17.7316 3.34006 17ZM9.00006 17.196C10.0657 17.8107 10.8669 18.797 11.2501 19.966C11.7491 20.013 12.2501 20.014 12.7491 19.967C13.1325 18.7979 13.9341 17.8115 15.0001 17.197C16.0653 16.5807 17.3206 16.3795 18.5251 16.632C18.8151 16.224 19.0651 15.789 19.2731 15.334C18.4525 14.4175 17.9992 13.2302 18.0001 12C18.0001 10.74 18.4701 9.56303 19.2731 8.66603C19.0636 8.21118 18.8125 7.77666 18.5231 7.36803C17.3193 7.62034 16.0649 7.41951 15.0001 6.80403C13.9344 6.1894 13.1332 5.20301 12.7501 4.03403C12.2511 3.98703 11.7501 3.98603 11.2511 4.03303C10.8677 5.20218 10.0661 6.18859 9.00006 6.80303C7.93484 7.41934 6.67954 7.62055 5.47506 7.36803C5.18563 7.77631 4.93519 8.21089 4.72706 8.66603C5.54763 9.58259 6.00094 10.7698 6.00006 12C6.00006 13.26 5.53006 14.437 4.72706 15.334C4.93653 15.7889 5.1876 16.2234 5.47706 16.632C6.68078 16.3797 7.93527 16.5806 9.00006 17.196ZM12.0001 15C11.2044 15 10.4413 14.684 9.87874 14.1213C9.31613 13.5587 9.00006 12.7957 9.00006 12C9.00006 11.2044 9.31613 10.4413 9.87874 9.87871C10.4413 9.3161 11.2044 9.00003 12.0001 9.00003C12.7957 9.00003 13.5588 9.3161 14.1214 9.87871C14.684 10.4413 15.0001 11.2044 15.0001 12C15.0001 12.7957 14.684 13.5587 14.1214 14.1213C13.5588 14.684 12.7957 15 12.0001 15ZM12.0001 13C12.2653 13 12.5196 12.8947 12.7072 12.7071C12.8947 12.5196 13.0001 12.2652 13.0001 12C13.0001 11.7348 12.8947 11.4805 12.7072 11.2929C12.5196 11.1054 12.2653 11 12.0001 11C11.7348 11 11.4805 11.1054 11.293 11.2929C11.1054 11.4805 11.0001 11.7348 11.0001 12C11.0001 12.2652 11.1054 12.5196 11.293 12.7071C11.4805 12.8947 11.7348 13 12.0001 13Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" }  />
 

	</svg>
);
 
 
 
export const HomeIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 24 24" 
	>
		<path d="M21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V9.31399C2.99994 9.16294 3.0341 9.01384 3.09991 8.87788C3.16573 8.74193 3.26149 8.62264 3.38 8.52899L11.38 2.21799C11.5565 2.07848 11.775 2.00259 12 2.00259C12.225 2.00259 12.4435 2.07848 12.62 2.21799L20.62 8.52799C20.7386 8.62175 20.8345 8.74119 20.9003 8.87733C20.9661 9.01348 21.0002 9.16277 21 9.31399V20ZM7 12C7 13.3261 7.52678 14.5978 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5978 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12H7Z" 
			fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
		/>
 

	</svg>
);
 
export const DownloadIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 20 20"
	>
		<path d="M10.8327 8.33333H14.9993L9.99935 13.3333L4.99935 8.33333H9.16602V2.5H10.8327V8.33333ZM3.33268 15.8333H16.666V10H18.3327V16.6667C18.3327 16.8877 18.2449 17.0996 18.0886 17.2559C17.9323 17.4122 17.7204 17.5 17.4993 17.5H2.49935C2.27834 17.5 2.06637 17.4122 1.91009 17.2559C1.75381 17.0996 1.66602 16.8877 1.66602 16.6667V10H3.33268V15.8333Z" fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}/>
 
 

	</svg>
);
 
 

 
export const LeftArrowIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 443.52 443.52"
	>
		<g>
			<g >
				<g>
					<path
						d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8    c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712    L143.492,221.863z"
						fill={  colour ? 
							(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
							: "currentColor"
						}
						data-original="#000000"
					/>
				</g>
			</g>
		</g>
	</svg>
);
 
 
export const ThreeDotsLoaderIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		} 
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 48 6"
	>
		<circle 
			fill={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			}  
			stroke="none" cx="6" cy="6" r="6">
			{/* stroke="none" cx="6" cy="50" r="6"> */}
			<animate
				attributeName="opacity"
				dur="1s"
				values="0;1;0"
				repeatCount="indefinite"
				begin="0.1"
			/>
		</circle>
		<circle 
			fill={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			}  stroke="none" cx="24" cy="6" r="6">
			{/* }  stroke="none" cx="26" cy="50" r="6"> */}
			<animate
				attributeName="opacity"
				dur="1s"
				values="0;1;0"
				repeatCount="indefinite"
				begin="0.2"
			/>
		</circle>
		<circle 
			fill={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			}  stroke="none" cx="42" cy="6" r="6">
			<animate
				attributeName="opacity"
				dur="1s"
				values="0;1;0"
				repeatCount="indefinite"
				begin="0.3"
			/>
		</circle>
	</svg>

);
 
 
export const CancelIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 512 512"
	>
		<path 
			d="m25 512a25 25 0 0 1 -17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462a24.93 24.93 0 0 1 -17.68 7.32z"
			fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString() : "currentColor"}
		/>
		<path 
			d="m487 512a24.93 24.93 0 0 1 -17.68-7.32l-462-462a25 25 0 0 1 35.36-35.36l462 462a25 25 0 0 1 -17.68 42.68z"
			fill={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			}
		/>
	</svg>

);
export const DrawerIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		width={width || "52"}
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="40" y1="192" x2="216" y2="192" fill="none" stroke={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/> 
	</svg>

);

 
  
export const SearchIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		x="0px"
		y="0px"
		viewBox="0 0 24 24" fill="none" 
		height={height || "52"}
		width={width || "52"}
	>

		<path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" 	
			stroke={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path opacity="0.4" d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" 	
			stroke={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);
 
 
 
export const LongArrowicon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 512 512"
	>
		<g>
			<path
				d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
				fill={  colour ? 
					(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
					: "currentColor"
				}
				data-original="#000000"
			/>
		</g>
	</svg>
);
 
export const RightArrowIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={  colour ? 
			(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
			: "currentColor"
		}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 443.52 443.52"
	>
		<g>
			<g >
				<g>
					<path
						d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734    L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8    C342.889,227.058,342.889,216.255,336.226,209.591z"
						fill={  colour ? 
							(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
							: "currentColor"
						}
						data-original="#000000"
					/>
				</g>
			</g>
		</g>
	</svg>
);
 
 
export const ATMIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={ "transparent"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 34 34" 
	>

		<path d="M4.2487 4.25H29.7487C30.1244 4.25 30.4848 4.39926 30.7504 4.66493C31.0161 4.93061 31.1654 5.29094 31.1654 5.66667V28.3333C31.1654 28.7091 31.0161 29.0694 30.7504 29.3351C30.4848 29.6007 30.1244 29.75 29.7487 29.75H4.2487C3.87297 29.75 3.51264 29.6007 3.24696 29.3351C2.98129 29.0694 2.83203 28.7091 2.83203 28.3333V5.66667C2.83203 5.29094 2.98129 4.93061 3.24696 4.66493C3.51264 4.39926 3.87297 4.25 4.2487 4.25ZM28.332 15.5833H5.66536V26.9167H28.332V15.5833ZM28.332 12.75V7.08333H5.66536V12.75H28.332ZM19.832 21.25H25.4987V24.0833H19.832V21.25Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } />
 

	</svg>
);
 
 
 
 
 
export const RiderIcon = (
	{ height, width, colour  }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={ "transparent"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 34 34" 
	>
		<path d="M22.6654 1.41667C23.4478 1.41667 24.082 2.05093 24.082 2.83333V4.25H31.1654V12.75H28.3056L32.1954 23.4371C32.445 24.076 32.582 24.7713 32.582 25.4986C32.582 28.6282 30.045 31.1653 26.9154 31.1653C24.2754 31.1653 22.0571 29.36 21.4276 26.9167H15.4035C14.7744 29.3607 12.5558 31.1667 9.91536 31.1667C7.16066 31.1667 4.86506 29.2011 4.35458 26.5959C3.44965 26.1228 2.83203 25.1752 2.83203 24.0833V9.91667C2.83203 9.13426 3.46629 8.5 4.2487 8.5H14.1654C14.9478 8.5 15.582 9.13426 15.582 9.91667V17C15.582 17.7824 16.2163 18.4167 16.9987 18.4167H19.832C20.6144 18.4167 21.2487 17.7824 21.2487 17V4.25H16.9987V1.41667H22.6654ZM9.91536 22.6667C8.35056 22.6667 7.08203 23.9352 7.08203 25.5C7.08203 27.0648 8.35056 28.3333 9.91536 28.3333C11.4802 28.3333 12.7487 27.0648 12.7487 25.5C12.7487 23.9352 11.4802 22.6667 9.91536 22.6667ZM26.9154 22.6653C25.3506 22.6653 24.082 23.9338 24.082 25.4986C24.082 27.0634 25.3506 28.3319 26.9154 28.3319C28.4802 28.3319 29.7487 27.0634 29.7487 25.4986C29.7487 25.1581 29.6886 24.8317 29.5786 24.5293L29.5554 24.4679C29.1431 23.4127 28.1165 22.6653 26.9154 22.6653ZM25.2904 12.75H24.082V17C24.082 19.3472 22.1792 21.25 19.832 21.25H16.9987C14.6515 21.25 12.7487 19.3472 12.7487 17H5.66536V21.7517C6.7037 20.5753 8.22288 19.8333 9.91536 19.8333C12.5558 19.8333 14.7744 21.6393 15.4035 24.0833H21.4269C22.0554 21.6386 24.2744 19.8319 26.9154 19.8319C27.2509 19.8319 27.5795 19.8611 27.899 19.917L25.2904 12.75ZM12.7487 11.3333H5.66536V14.1667H12.7487V11.3333ZM28.332 7.08333H24.082V9.91667H28.332V7.08333Z" fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } />

	</svg>
);
 
 
 
  
export const MultiStoresIcon = (
	{ height, width,   }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={ "transparent"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 82 82"
	>
		<circle cx="41" cy="41" r="41" fill="#E0E0E0"/>
		<rect x="18.7021" y="18.7015" width="43.1579" height="43.1579" fill="url(#pattern0)"/>
		<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
				<use xlinkHref="#image0_785_22227" transform="scale(0.00195312)"/>
			</pattern>
			<image id="image0_785_22227" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
		</defs>
	</svg>
);
 
 
export const ProductIcon = (
	{ height, width,   }: { height?: string; width?: string; colour?: string}
) => (
	<svg
		height={height || "52"}
		fill={ "transparent"}
		width={width || "52"}
		x="0"
		y="0"
		viewBox="0 0 76 76" 
	>
		<circle cx="38" cy="38" r="38" fill="#F2F2F2"/>
		<rect x="18" y="18" width="40" height="40" fill="url(#pattern0)"/>
		<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
				<use xlinkHref="#image0_679_35712" transform="scale(0.00195312)"/>
			</pattern>
			<image id="image0_679_35712" width="512" height="512" xlinkHref="data:image/png;base64,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"/>
		</defs>
 

	</svg>
);
 
 