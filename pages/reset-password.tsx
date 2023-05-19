import type { NextPage } from "next";
import React  from "react";
import ForgotPasswordPage from "../screens/forgot-password";
import AuthLayout from "../components/Layout/Auth-layout";




const ForgotPassword: NextPage = () => {

	
	return (
		<AuthLayout >
			<ForgotPasswordPage />
		</AuthLayout>
	);
};

export default ForgotPassword;
