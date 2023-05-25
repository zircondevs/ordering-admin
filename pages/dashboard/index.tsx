import type { NextPage } from "next";
import React  from "react";
import Overview from "../../screens/dashboard/overview";
import DashboardLayout from "../../components/Layout/Dashboard-layout";
import ProtectedRoute from "../../components/ProtectedRoute";




const Home: NextPage = () => {

	return (
		<ProtectedRoute>
			<DashboardLayout>
				<Overview />
			</DashboardLayout>
		</ProtectedRoute>
	);
};

export default Home;
