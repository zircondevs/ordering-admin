/* eslint-disable max-len */
/* eslint-disable max-lines */
// import { ThemeTypes } from "devs-react-component-library";

const white = "#fff";
const black = "#000";
const transparent = "transparent";

const palette = {
	white,
	common: {
		white,
		transparent,
		black
	},
	Black: {
		default: "#333333",
		80: "#4F4F4F",
		60: "#828282",
		40: "#BDBDBD",
		20: "#E0E0E0",
		10: "#F2F2F2",
		5: "#fbfafa",
	},
	Orange: {
		default: "#FE724D",
		80: "#FE8D4D",
		60: "orange",
		5: "#FFF1ED",
		0: "#faede9",
		"-5": "#fff7f4"
	},
	Blue: {
		default: "#2F80ED",
		80: "#316bc6",
		0: "#E9F0FB"
	},
	Grey: {
		1: "#333333",
		2: "#4F4F4F",
		3: "#828282",
		4: "#BDBDBD",
		5: "#d8d8d8",
		6: "#F2F2F2",
		7: "#F2F2F2",
		8: "#FBFBFB"
	},
	Success: {
		default: "#00A64C",
		80: "#33B870",
		60: "#66CA94",
		40: "#99DBB7",
		20: "#CCEDDB",
		10: "#E5F6ED",
		5: "#F2FBF6",
		transparent: {
			10: "#00a64c29"
		}
	},
	Yellow: {
		default: "#FCBC30",
		20: "#fdf0d4",
		5: "#FFFBF3",
		0: "#FBF4E5"
	},
	Error: {
		default: "#DD0F0F",
		80: "#F37A4F",
		60: "#F69B7B",
		40: "#F9BDA7",
		20: "#FCDED3",
		10: "#FDEEE9",
		5: "#FEEDED"
	},
	transparent: {
		default: "transparent",
		80: "rgba(255, 255, 255, 0.2)"
	},
	noName: {
		purple: "#B800BB",
		blue: {
			10: "#0D3592",
			40: "#1A62CA"
		},
		Success: {
			10: "#9DFFCE",
			20: "#50D18D",
			40: "#135D36"
		}
	}
};



const shadows = {
	small: "0px 8px 4px rgba(0, 0, 0, 0.02)",
	smaller: "0px 2px 6px rgba(0, 0, 0, 0.2)",
	large: "0px 0px 6px rgba(0, 0, 0, 0.2)",
};

const typography = {
	fontFamily: {
		ubuntu: "UbuntuMono-Regular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		ubuntuLight: "UbuntuMono-Light, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		ubuntuBold: "UbuntuMono-Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		ubuntuMedium: "UbuntuMono-Medium, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
		ubuntuSemiBold: "UbuntuMono-SemiBold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
	},
	fontWeight: {
		300: 300,
		400: 400,
		500: 500,
		600: 600,
		700: 700,
		normal: "normal",
	},
	lineHeight: {
		96: "96px",
		69: "69px",
		54: "54px",
		50: "50px",
		41: "41px",
		40: "40px",
		37: "37px",
		32: "32px",
		30: "30px",
		28: "28px",
		27: "27px",
		24: "24px",
		23: "23px",
		22: "22px",
		21: "21px",
		20: "20px",
		19.6: "19.6px",
		19: "19px",
		18: "18px",
		16: "16px",
		14: "14px",
		15: "15px",
		12: "12px",
		10: "10px",
	},
};

const zIndex = {
	mobileStepper: 1000,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	header: 1400,
	tooltip: 1500,
};



export const fontSizes = {
	8: "8px", //10px
	10: "10px", //10px
	11: "11px", //11px
	12: "0.75rem", //12px
	13: "0.813rem", //13px
	14: "14px", //14px
	16: "1rem", //16px
	18: "1.125rem", //18px
	20: "1.25rem", //20px
	22: "1.375rem", //22px
	24: "24px", //28
	28: "28px", //28
	36: "36px", //36
	40: "40px", //36
	46: "46px", //46
	64: "64px", //46
};

const shape = {
	borderRadius: {
		4: "4px", //10px
		8: "8px", //10px
		10: "10px", //10px
		11: "11px", //11px
		12: "0.75rem", //12px
		13: "0.813rem", //13px
		14: "14px", //14px
		16: "1rem", //16px
		18: "1.125rem", //18px
		20: "1.25rem", //20px
		22: "1.375rem", //22px
		24: "24px", //28
		28: "28px", //28
		32: "32px", //32
		33: "33px", //33
		36: "36px", //36
		40: "40px", //36
		46: "46px", //46
		64: "64px", //46
	},
	padding: {
		small: "12px 28px",
		smaller: "8px 16px",
		smallest: "5px 10px",
	}
};

export const transition = {
	drawer: "200ms ease-in",
	notification: "300ms linear",
};
export const mediaQuery = {
	below: {
		mobile: "max-width: 360px",
		tab: "max-width: 700px",
		largeMobile: "max-width: 500px",
		600: "max-width: 600px",
		midDesktop: "max-width: 1000px",
		1000: "max-width: 1000px",
	},
	above: {

	}
};
export const theme: any = {
	palette,
	shadows,
	typography,
	zIndex,
	shape,
	fontSizes,
	transition,
	mediaQuery
};