import type { NextPage } from "next";
import React  from "react";





const Home: NextPage = () => {

	
	return (
		<></>
	);
};

export default Home;


export const getServerSideProps = async () => {
 

 

	return {
		redirect: {
			destination: "/dashboard",
			permanent: false,
		},
	};
 
};