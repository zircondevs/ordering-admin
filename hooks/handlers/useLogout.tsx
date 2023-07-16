import { useRouter } from "next/router";
import { STORAGE } from "../../applications/storage";
import Constant from "../../constants";
import { UseContext } from "../../state/provider";




export const useLogout = () => {
	const {  setToken, setRefreshToken, setIsAuthenticated , setClient} = UseContext();
	const { push } = useRouter();


	const handleLogout = () => {
		setToken("");
		setIsAuthenticated(false);
		setRefreshToken("");
		setClient({});
		STORAGE.DELETE(Constant.keys.token);
		STORAGE.DELETE(Constant.keys.refreshToken);
		push("/login");
	};
	return { handleLogout };
};