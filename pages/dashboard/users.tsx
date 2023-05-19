import type { NextPage } from "next";
import React  from "react";
import Overview from "../../screens/dashboard/users";
import DashboardLayout from "../../components/Layout/Dashboard-layout";




const Transactions: NextPage = () => {

	
	return (
		<DashboardLayout>
			<Overview />
		</DashboardLayout>
	);
};

export default Transactions;
