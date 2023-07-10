/* eslint-disable max-lines */
import React from "react";
/**
  * 
  * @param object any nexted object
  * @param str string seperated with a dot
  * @returns the value of the  last passed string
  */
export const extractObjectValueFromNestedObject = (object: {[key: string]: any }, str: string) => {
	str = str.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
	str = str.replace(/^\./, "");           // strip a leading dot
	const a = str.split(".");
	for (let i = 0, n = a.length; i < n; ++i ) {
		const k = a[i];
		if (k in object) {
			object = object[k];
		} else {
			return;
		}
	}
	return object;
};



/* Truncate
* returns the truncated text with "..." or any specified ending character
* @param {String} str
* @param {Number} length
* @param {String} ending
* */
export const Truncate = (str = "", length = 20, ending = "...") =>
	str.length > length
		? `${str.substring(0, length - ending.length)} ${ending}`
		: str;

  

export const naira = "₦";

/**
 * 
 * @param num number
 * @returns formatted number using commas at right places
 */
export function formatNumber(num: number) {
	if (num) return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	return 0;
}


/**
 * 
 * @returns jsx
 */
export const dot = () => <>&#8226;</>;
/**
 * 
 * @returns jsx
 */
export const singleSpace = () =>  <>&nbsp;</>; 


export const flattenObj = (obj: any, parent: string, res: any = {}) => {
	for (const key of Object.keys(obj)) {
		const propName = parent ? parent   + key : key;
		if (typeof obj[key] === "object") {
			flattenObj(obj[key], propName, res);
		} else {
			res[propName] = obj[key];
		}
	}
	return res;
};






/**
 * 
 * @param obj object
 * @returns true if the values of an object are same and false if they are not
 */
export const CheckIfObjHasSameValues = (obj: any, key = "") => {
	const objCopy = {...obj};
	objCopy[key] && delete objCopy[key];
	for(let i = 0; i < Object.values(objCopy).length ; i++) {
		return  Object.values(objCopy).every( (val, i, arr) => val === arr[0] );  
	}
};


/**
 * 
 * @param obj object
 * @returns true if the values of an object are same and false if they are not
 */
export const CheckIfObjHasSameValuesAndIgnoreAllEmptyStrings = (obj: any, key: string[] = []) => {
	const objCopy = {...obj};
	for(let l = 0; l < key.length; l++) {
		const activeKey = key[l];
		activeKey && delete objCopy[activeKey];
	}

	const removeAllEmptyStringFromObj = (_obj: any) => {
		Object.keys(_obj).forEach(key => {
			if (_obj[key] === "") {
				delete _obj[key];
			}
		});
	};
	removeAllEmptyStringFromObj(objCopy);


	for(let i = 0; i < Object.values(objCopy).length ; i++) {
		return  Object.values(objCopy).every( (val, i, arr) => val === arr[0] );  
	}
};




 

export const formateDate = (date: string | number | Date) => {
	const DATE = new Date(date);
	const monthNames = {
		month_names: [
			"January", "February", "March", "April", "May",
			"June", "July", "August", "September", "October", "November", "December"
		],
		month_names_short: [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
		]
	};
	const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", ];
	return {
		date: DATE.getDate(),
		fullMonth: monthNames.month_names[DATE.getMonth()],
		shortMonth: monthNames.month_names_short[DATE.getMonth()],
		year: DATE.getFullYear(),
		time: `${DATE.getHours()} : ${DATE.getMinutes()} : ${DATE.getSeconds()}`,
		day: days[(DATE.getDay())]
	};
};



export function formatAMPM(date: Date) {
	let hours = date.getHours();
	let minutes = date.getMinutes() as  any;
	const ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour "0" should be "12"
	minutes = minutes < 10 ? "0"+ minutes : minutes;
	const strTime = hours + ":" + minutes + " " + ampm;
	return strTime;
}

export const RemoveNonNumbersFromArr = (obj: object) => {
	return  Object.values(obj).filter((item) =>  +item ).map(it => +it);

};


export const  highestValueFromObj = (obj: object) => {
	return  Math.max.apply(null, RemoveNonNumbersFromArr(obj));
};


export const getObjKeysAsArray = (obj: object) =>  Object.keys(obj);
export const getObjValuesAsArry = (obj: object) =>  Object.values(obj);


export const timeDiffInSecs = (time1: string | number | Date, time2: string| number | Date) => {
	const t1 = new Date(time1);
	const t2 = new Date(time2);
	return t1.getTime() - t2.getTime();
};

export const isDefined = (item: string | "undefined" ) => !!(item && (item !== "undefined") && (item !== "null")) ;

export const  removeEmptyValuesFromObj = (obj: any) => {
	for (const key in obj) {
		if (obj[key] === "" || obj[key].length === 0 ||  Object.keys(obj[key]).length === 0 ) {
			delete obj[key];
		}
	}
	return obj;
};

export const objIsEmpty = (obj: object) =>{
	if(typeof(obj) !== "object") return true;
	return  Object.keys(obj).length === 0;
};


export function MakeOnlyFirstLettersCapital(text: string): string {
	if(typeof(text) !== "string") return text;
	const eachWords = text
		.toLocaleLowerCase()
		.split(" ")
		//remove whitespaces
		.filter((word) => !new RegExp("\\s", "g").test(word) && word != "");

	return eachWords
		.map((word) => {
			const lettersArray = word.split("");
			lettersArray[0] = lettersArray[0]?.toUpperCase();
			return lettersArray.join("");
		})
		.join(" ");
}


/**
 *
 * @param {Number} num
 * @returns if item is plural returns an s else empty string
 */
export const checkPlural = (num: number) => (num > 1 ? "s" : "");


export  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


export const extractQueryString = (obj: {[e: string | number]: any}) => {
	const stringArr =  Object.keys(obj).map((each,idx) => {
		return  (`${each}=${Object.values(obj)[idx]}`) ;
	});
	return stringArr.length > 0 ? `${stringArr.join("&")}` : "";
};




export const colorsRank = (score: number) =>  {
	return score >= 0 && score < 20 ?
		"Error.default"
		: (score >= 20 && score < 40 )  ?
			"Error.60"
			: (score >= 40 && score < 50) ?
				"Yellow.40"
				: (score === 50) ?
					"Yellow.40"
					: (score > 50 && score < 60) ?
						"Yellow.60"
						:  (score >= 60 && score < 80) ?
							"Yellow.default"
							:  (score >= 80 && score < 100 ) ?
								"Success.40"
								:  (score === 100  ) ?
									"Success.default"
									: "transparent.default";
};

export type colorType = "A"| "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" ;
export const alphaColorsRank = {
	A: "#dcdfd0",
	B: "#f9e1e1",
	C: "#ece3c2",
	D: "#ddeed1",
	E: "#d1eed4",
	F: "#d1eee9",
	G: "#d1e7ee",
	H: "#d1d8ee",
	I: "#d5d1ee",
	J: "#e1d1ee",
	K: "#e2d1ee",
	L: "#eed1ee",
	M: "#eed1df",
	N: "#eed1d6",
	O: "#f0d4d4",
	P: "#eed9d1",
	Q: "#d1eed7",
	R: "#d1d1ee",
	S: "#eed9d1",
	T: "#d1dfee",
	U: "#d7d1ee",
	V: "#eee5d1",
	W: "#c2ccdf",
	X: "#d7cbcb",
	Y: "re#d2cbd7d",
	Z: "#fdd6d6",
};


/**
 *
 * @param {Cookie} cookie
 * @returns the cookie value
 */
export const ExtractCookies = (cookie: any, name: string) => {
	const cookieArr = cookie.split(";");
	// Loop through the array elements
	for(let i = 0; i < cookieArr.length; i++) {
		const cookiePair = cookieArr[i].split("=");
		/* Removing whitespace at the beginning of the cookie name
		and compare it with the given string */
		if(name == cookiePair[0].trim()) {
			// Decode the cookie value and return
			return decodeURIComponent(cookiePair[1]);
		}
	}
	// Return null if not found
	return null;
};

/**
*
* @param {String} str
* @returns
*/
export const formatRoute = (str: string) =>
	str
		? str
			.split(" ")
			.join("-")
			.trim()
			.split("?")
			.join("")
			.split("\\")
			.join("")
			.split("''")
			.join("")
			.split("*")
			.join("")
			.split("/")
			.join("-or-")
			.split("%")
			.join("-percent-")
			.toLowerCase()
		: str;

/**
 *
 * @param {String} input
 * @returns
 */
export const hshString = (input: string) => {
	if (!input) {
		return input;
	}
	let hash = 0;
	const len = input.length;
	for (let i = 0; i < len; i++) {
		hash = (hash << 5) - hash + input.charCodeAt(i);
		hash |= 0; // to 32bit integer
	}
	return hash;
};