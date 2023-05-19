


 

export const STORAGE = {
	SAVE: (key: string, value: any) => localStorage.setItem(key, value),
	GET: ( key: string) => localStorage.getItem(key),
	DELETE: ( key: string) => localStorage.removeItem(key),
	DELETEALL: ( key: string[]) => {
		key.map((item) => {
			localStorage.removeItem(item);
		});
	},
};
 
 