import type { NextPage } from "next";
import React  from "react";
import { IconLoader } from "../components/Loader";

import ProtectedRoute from "../components/ProtectedRoute";






const Home: NextPage = () => {




	return (
		<ProtectedRoute>
			<IconLoader />
		</ProtectedRoute>
	);
};

export default Home;


// export const getServerSideProps = async () => {
// 	return {
// 		redirect: {
// 			destination: "/dashboard",
// 			permanent: false,
// 		},
// 	};
 
// };