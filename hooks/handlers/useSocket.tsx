import { useEffect,  } from "react";


import { io } from "socket.io-client";
import { AUTH_BASE_URL } from "../../constants/urls";
import { UseContext } from "../../state/provider";


 



export const useSocket = () => {

	const { setRealTimeOrders} = UseContext();

	const socket = io(`${AUTH_BASE_URL}`);

	
 
	
	// clientId or storeId
	const handleJoinRoom = ( storeId :  string) => {
		socket.emit("join-room", {room: storeId});
		console.log("Joined room", storeId);
	};

 
	socket.on("data", (res: {[e: string]: object}) => {
		console.log("new orders",  res );
		setRealTimeOrders(res);
	});



	useEffect(() => {
		console.log("mount");
		socket.on("connect", () => {
			console.log("Connected with id ", socket.id );
		});
	}, []);

	
  
	return {    handleJoinRoom  };
};