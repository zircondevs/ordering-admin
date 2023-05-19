import { ToastMessage, type } from "../config/toster";


const Notify = () =>  {
	return {

		error: (message: string) =>  ToastMessage(type.ERROR, message || "Error occured"),
		success: (message: string) =>  ToastMessage(type.SUCCESS, message || "Operation was successful" ) ,
		warning: (message: string) =>  ToastMessage(type.WARN, message )  
	};
};
export default Notify;