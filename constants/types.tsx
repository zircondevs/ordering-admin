



 

 


 
export type GenericObjTypes = {[e: string]: any }



export interface CacheAxiosTypes {
	url: string;
	notify?: boolean;
	requiredVariable?: boolean;
	options?: object;
	DATA?: object;
	errMessage?: string;
	token?: string
}

export interface AxiosCallTypes {
	url: string;
	notify?: boolean;
	DATA?: object | string;
	successMessage?: string;
	errorMessage?: string;
	token?: string;
	queryParam?: object
}


 