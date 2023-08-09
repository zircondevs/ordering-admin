import { UseContext } from "../../state/provider";







export const useGetetUserRoleModule =  ( name: string) => {

	const {state: { roleMangt,  }}  = UseContext();

	if(!(roleMangt?.moduleAccessible?.length > 0) && !roleMangt.accountType) return {EDIT: false, VIEW: false, DELETE: false};

	const methods = (roleMangt?.moduleAccessible.find(d => d.name?.toUpperCase() === name?.toUpperCase()))?.method;


	return { 
		EDIT: roleMangt.accountType === "CLIENT_ADMIN" ? true : methods?.includes("EDIT"), 
		VIEW: roleMangt.accountType === "CLIENT_ADMIN" ? true : methods?.includes("VIEW"), 
		DELETE:  roleMangt.accountType === "CLIENT_ADMIN" ? true : methods?.includes("DELETE"), 
		METHODS: methods,
		IS_STAFF: roleMangt.accountType === "STAFF",
		IS_CLIENT_ADMIN: roleMangt.accountType === "CLIENT_ADMIN"
	};
};
