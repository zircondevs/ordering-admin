import type { NextPage } from "next";
import React  from "react";
import Overview from "../screens/reset-password";
import AuthLayout from "../components/Layout/Auth-layout";




const Home: NextPage = () => {

	
	return (
		<AuthLayout>
			<Overview />
		</AuthLayout>
	);
};

export default Home;
