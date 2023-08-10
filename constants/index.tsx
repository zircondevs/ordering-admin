/* eslint-disable max-lines */
/* eslint-disable max-len */

import { AvatarIcon, DataIcon, HomeIcon,   LoyaltyIcon,   OrderIcon, PaymentIcon, RiderIcon, SettingsIcon, StoreIcon } from "../public/assets/svg";
import React from "react";

 



export const PROFILE_IS_UPDATED = (user: any) =>{
	return  user?.class &&  user?.DOB  && user?.section;
};


const Constant  = {
	keys: {
		token: "authorization",
		refreshToken: "refresh",
		difficultyLevel: "difficultyLevel",
		subject: "subject",
		storeId: "portal_ST",
		newUser: "nu",
		

		// keys used for initial login controls
		cacheToken: "cacheToken",
		routeIsSavedToLocalStorage: "risls"
	},
	modal: {
		checkout: "CHECKOUT",
		deliveryNumber: "DELIVERY_NUMBER",
		payment: "PAYMENT",
		orderCompleted: "ORDER_COMPLETED",
		createAccount: "CREATE_ACCOUNT",
		addAddress: "ADD_ADDRESS",
		signUpCompleted: "SIGN_UP_COMPLETED",
		login: "LOGIN",
		modal: "mode"
	},
	states: [
		"Abia",
		"Adamawa",
		"Akwa Ibom",
		"Anambra",
		"Bauchi",
		"Bayelsa",
		"Benue",
		"Borno",
		"Cross River",
		"Delta",
		"Ebonyi",
		"Edo",
		"Ekiti",
		"Enugu",
		"FCT - Abuja",
		"Gombe",
		"Imo",
		"Jigawa",
		"Kaduna",
		"Kano",
		"Katsina",
		"Kebbi",
		"Kogi",
		"Kwara",
		"Lagos",
		"Nasarawa",
		"Niger",
		"Ogun",
		"Ondo",
		"Osun",
		"Oyo",
		"Plateau",
		"Rivers",
		"Sokoto",
		"Taraba",
		"Yobe",
		"Zamfara"
	],

	drawer: [
		{
			name: "Overview",
			icon: <HomeIcon height="20" width="20"/>,
			href: "/dashboard"
		},
		{
			name: "Orders",
			icon: <RiderIcon height="20" width="20"/>,
			href: "/dashboard/orders"
		},
		{
			name: "Payment",
			icon: <PaymentIcon height="20" width="20"/>,
			href: "/dashboard/payment"
		},
		{
			name: "Transactions",
			icon: <DataIcon height="20" width="20"/>,
			href: "/dashboard/transactions"
		},
		{
			name: "Customers",
			icon: <AvatarIcon height="20" width="20"/>,
			href: "/dashboard/users"
		},
		{
			name: "Loyalty Reward",
			icon: <LoyaltyIcon height="20" width="20"/>,
			href: "/dashboard/loyalty"
		},
		{
			name: "Stores",
			icon: <StoreIcon height="20" width="20"/>,
			href: "/dashboard/stores"
		},
		{
			name: "Products",
			icon: <OrderIcon height="20" width="20"/>,
			href: "/dashboard/products"
		},
		{
			name: "Settings",
			icon: <SettingsIcon height="20" width="20"/>,
			href: "/dashboard/settings"
		},
	]
};
export default Constant;


