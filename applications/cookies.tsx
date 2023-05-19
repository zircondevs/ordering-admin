import cookies from "js-cookie";


 

export const Cookie ={
 
	get: ( key :   string ) =>  cookies.get(key),
	set: (key: string, defaultValue: any  ) => {
		cookies.set(key, defaultValue, {
			secure: true,
			sameSite: "None"
		});
	},
	remove: (key :  string) => cookies.remove(key),
	removeAll: ( key :  string[] ) => {
		key?.map((item: string) => {
			cookies.remove(item);
		});
	}
 

};