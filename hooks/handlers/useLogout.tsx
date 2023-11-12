import { useRouter } from "next/router";
import { STORAGE } from "../../applications/storage";
import Constant from "../../constants";
import { UseContext } from "../../state/provider";




export const useLogout = () => {
	const {  setToken, setRefreshToken, setIsAuthenticated , setClient, setUser, setPathIsAccessible, state: { token }} = UseContext();
	const { push } = useRouter();


	const handleLogout = () => {
		STORAGE.SAVE(Constant.keys.cacheToken, token);


		setToken("");
		setIsAuthenticated(false);
		setPathIsAccessible(false);
		setRefreshToken("");
		setClient({});
		setUser({});
		STORAGE.DELETE(Constant.keys.token);
		STORAGE.DELETE(Constant.keys.refreshToken);
		STORAGE.DELETE(Constant.keys.isRouteIsSavedToLocalStorage);
		push("/login");
	};
	return { handleLogout };
};