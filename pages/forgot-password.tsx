import type { NextPage } from "next";
import React  from "react";
import Overview from "../screens/forgot-password";
import AuthLayout from "../components/Layout/Auth-layout";




const ForgotPassword: NextPage = () => {

	
	return (
		<AuthLayout>
			<Overview />
		</AuthLayout>
	);
};

export default ForgotPassword;
