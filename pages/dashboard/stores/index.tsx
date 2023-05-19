import type { NextPage } from "next";
import React  from "react";
import Overview from "../../../screens/dashboard/stores";
import DashboardLayout from "../../../components/Layout/Dashboard-layout";
import ProtectedRoute from "../../../components/ProtectedRoute";




const Stores: NextPage = () => {

	
	return (
		<ProtectedRoute>
			<DashboardLayout>
				<Overview />
			</DashboardLayout>
		</ProtectedRoute>
	);
};

export default Stores;
