import { UseContext } from "../../state/provider";







export const useRedirect = () => {
	const { state: { token, refreshToken}} = UseContext();

	const handleRedirect = (url: string) => {
		window.open(
			`${url}auth-token=${token}&refresh-token=${refreshToken}
		`, "_self");
	};

	return { handleRedirect };
};