



 

 


 
export type GenericObjTypes = {[e: string]: any }



export interface CacheAxiosTypes {
	url: string;
	notify?: boolean;
	requiredVariable?: boolean;
	options?: object;
	DATA?: object;
	errMessage?: string;
	token?: string
	noToken?: boolean
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


export type TransactionStatusType  = "pending" | "failed" |  "success";


export interface SetUpStoreTypes {
	workingDays?: string[]
	openingHours?: string;
	closingHours?: string;
	storeVideo?: string;
	storeImage?: string;
	storeCustomMessage?: string;
	instagramLink?: string;
	twitterLink?: string;
	facebookLink?: string;
}