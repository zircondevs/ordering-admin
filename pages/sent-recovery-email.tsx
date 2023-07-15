import type { NextPage } from "next";
import React  from "react";
import Overview from "../screens/auth/sent-recovery-email";
import AuthLayout from "../components/Layout/Auth-layout";




const SentRecoveryEmail: NextPage = () => {

	
	return (
		<AuthLayout>
			<Overview />
		</AuthLayout>
	);
};

export default SentRecoveryEmail;
