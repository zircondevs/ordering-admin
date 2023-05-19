import type { NextPage } from "next";
import React  from "react";
import Overview from "../../screens/dashboard/settings";
import DashboardLayout from "../../components/Layout/Dashboard-layout";
import ProtectedRoute from "../../components/ProtectedRoute";




const Settings: NextPage = () => {

	
	return (
		<ProtectedRoute>
			<DashboardLayout>
				<Overview />
			</DashboardLayout>
		</ProtectedRoute>
	);
};

export default Settings;
