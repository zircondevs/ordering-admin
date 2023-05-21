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


export const PromoIcon = (
	{ height, width,    }: { height?: string; width?: string; colour?: string; }
) => (
	<svg
		x="0px"
		y="0px"
		viewBox="0 0 20 21" 
		height={height || "52"}
		width={width || "52"}
		fill={ "none"}
	>
		<path d="M1.66699 8.41667V3.83333C1.66699 3.61232 1.75479 3.40036 1.91107 3.24408C2.06735 3.0878 2.27931 3 2.50033 3H17.5003C17.7213 3 17.9333 3.0878 18.0896 3.24408C18.2459 3.40036 18.3337 3.61232 18.3337 3.83333V8.41667C17.7811 8.41667 17.2512 8.63616 16.8605 9.02686C16.4698 9.41756 16.2503 9.94747 16.2503 10.5C16.2503 11.0525 16.4698 11.5824 16.8605 11.9731C17.2512 12.3638 17.7811 12.5833 18.3337 12.5833V17.1667C18.3337 17.3877 18.2459 17.5996 18.0896 17.7559C17.9333 17.9122 17.7213 18 17.5003 18H2.50033C2.27931 18 2.06735 17.9122 1.91107 17.7559C1.75479 17.5996 1.66699 17.3877 1.66699 17.1667V12.5833C2.21953 12.5833 2.74943 12.3638 3.14013 11.9731C3.53083 11.5824 3.75033 11.0525 3.75033 10.5C3.75033 9.94747 3.53083 9.41756 3.14013 9.02686C2.74943 8.63616 2.21953 8.41667 1.66699 8.41667ZM11.667 4.66667H3.33366V7.14C3.95967 7.45025 4.48655 7.92921 4.85491 8.52288C5.22327 9.11656 5.41846 9.80133 5.41846 10.5C5.41846 11.1987 5.22327 11.8834 4.85491 12.4771C4.48655 13.0708 3.95967 13.5498 3.33366 13.86V16.3333H11.667V4.66667ZM13.3337 4.66667V16.3333H16.667V13.86C16.041 13.5498 15.5141 13.0708 15.1457 12.4771C14.7774 11.8834 14.5822 11.1987 14.5822 10.5C14.5822 9.80133 14.7774 9.11656 15.1457 8.52288C15.5141 7.92921 16.041 7.45025 16.667 7.14V4.66667H13.3337Z" fill="#FE724D"/>

	</svg>
);

export const CartIcon = ({ height, width, colour }: Props) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}

		fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
		width={width || "52"}
		
		viewBox="0 0 256 256"
	>
		<rect width="256" height="256" fill="none"/><path d="M180,184H83.17a16,16,0,0,1-15.74-13.14L41.92,30.57A8,8,0,0,0,34.05,24H16" fill="none" 
			stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
			strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="84" cy="204" r="20" fill="none" 
			stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
			strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="180" cy="204" r="20" fill="none" 
			stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
			strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M62.55,144H188.1a16,16,0,0,0,15.74-13.14L216,64H48" fill="none" 
			stroke={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
			strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/> 
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
		<path d="M1.66699 4.16666L7.50033 1.66666L12.5003 4.16666L17.7528 1.91582C17.8162 1.88864 17.8854 1.87763 17.9541 1.88378C18.0228 1.88992 18.0889 1.91303 18.1465 1.95103C18.2041 1.98903 18.2513 2.04073 18.284 2.10149C18.3167 2.16225 18.3337 2.23017 18.3337 2.29916V15.8333L12.5003 18.3333L7.50033 15.8333L2.24783 18.0842C2.18442 18.1113 2.11526 18.1224 2.04655 18.1162C1.97784 18.1101 1.91172 18.087 1.85415 18.049C1.79657 18.011 1.74933 17.9593 1.71666 17.8985C1.684 17.8377 1.66693 17.7698 1.66699 17.7008V4.16666ZM13.3337 16.1625L16.667 14.7342V4.19416L13.3337 5.62249V16.1625ZM11.667 16.0533V5.61332L8.33366 3.94666V14.3867L11.667 16.0533ZM6.66699 14.3775V3.83749L3.33366 5.26582V15.8058L6.66699 14.3775Z" fill="#4F4F4F"/>
 

	</svg>

);
export const PlateIcon = ({ height, width, colour }: Props) => (
	<svg 
		x="0px"
		y="0px"
		height={height || "52"}
		fill={"none"}
		width={width || "52"}
		
		viewBox="0 0 1024 1024"
	>
		<path
			fill={  colour ? (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor" } 
			d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"/> 
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
			opacity="0.4" d="M12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2C14.4505 2 16.4405 3.99 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87Z" 
			stroke={  colour ?  (extractObjectValueFromNestedObject(theme.palette, colour))?.toString()  : "currentColor"
			} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path 
			d="M7.1607 14.56C4.7407 16.18 4.7407 18.82 7.1607 20.43C9.9107 22.27 14.4207 22.27 17.1707 20.43C19.5907 18.81 19.5907 16.17 17.1707 14.56C14.4307 12.73 9.9207 12.73 7.1607 14.56Z" 
			stroke={  colour ? 
				(extractObjectValueFromNestedObject(theme.palette, colour))?.toString() 
				: "currentColor"
			} 
			strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
 

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
 
 
 
 