
 
const loopObj = (obj: any) => {
	let agg = "";
	for (const key in obj) {
		if ( Object.prototype.hasOwnProperty.call(obj, key)   ) {
		// if (obj.hasOwnProperty(key)) {
			agg += `${typeof obj[key] === "object" ? loopObj(obj[key]) : obj[key]}`;
		}
	}
	return agg?.length > 100 ?  "Ops!, an error occurred." : agg;
};

export const errorHandler = (err: any) => {
	let messageString = "";
	if (typeof err === "string") {
		messageString += err;
	}else if (!err?.response) {
		messageString += "Network error! check your network and try again";
	} else {
		let data = err?.response?.data?.message;
		if (!err?.response.data.message) {
			data = err?.response.data;
		}
		messageString = Array.isArray(data) ? data[0]  : loopObj(data);
	}
	return   messageString?.replace(/{|}|'|\[|\]/g, "");
};



export const messageHandler = (err: any) => {
	let messageString = "";
	if (!err) {
		messageString += "Network error! check your network and try again";
	} else {
		messageString = Array.isArray(err) ? err[0]  :  (err);
	}
	return   messageString;
};