import type { NextPage } from "next";
import React  from "react";
import Page from "../../screens/dashboard/payment";
import DashboardLayout from "../../components/Layout/Dashboard-layout";
import ProtectedRoute from "../../components/ProtectedRoute";




const Payment: NextPage = () => {

	
	return (
		<ProtectedRoute>
			<DashboardLayout>
				<Page />
			</DashboardLayout>
		</ProtectedRoute>
	);
};

export default Payment;
