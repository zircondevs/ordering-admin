import type { NextPage } from "next";
import React  from "react";
import Overview from "../screens/auth/sign-up";
import AuthLayout from "../components/Layout/Auth-layout";




const Login: NextPage = () => {

	
	return (
		<AuthLayout>
			<Overview />
		</AuthLayout>
	);
};

export default Login;
