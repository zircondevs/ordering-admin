import { useEffect, useState } from "react";


import { io } from "socket.io-client";
import { AUTH_BASE_URL } from "../../constants/urls";
import { GenericObjTypes } from "../../constants/types";


 



export const useSocket = () => {

	const [newOrders, setNewOrders] = useState<GenericObjTypes[]>([]);


	const socket = io(`${AUTH_BASE_URL}`);

	
 
	
	// clientId or storeId
	const handleJoinRoom = ( storeId :  string) => {
		socket.emit("join-room", {room: storeId});
		console.log("Joined room", storeId);
	};

 
	

	useEffect(() => {
		console.log("mount");
		socket.on("connect", () => {
			console.log("Connected with id ", socket.id );
		});
		socket.on("data", (res: {[e: string]: object}) => {
			console.log("new orders",  res );
			setNewOrders([res, ...newOrders]);
		});

	}, [  ]);

	
  
	return {    handleJoinRoom , newOrders };
};