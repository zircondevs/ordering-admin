import type { NextPage } from "next";
import React  from "react";
import Overview from "../screens/onboarding";
import AuthLayout from "../components/Layout/Auth-layout";
import ProtectedRoute from "../components/ProtectedRoute";




const Login: NextPage = () => {

	
	return (
		<ProtectedRoute>
			<AuthLayout>
				<Overview />
			</AuthLayout>
		</ProtectedRoute>
	);
};

export default Login;
