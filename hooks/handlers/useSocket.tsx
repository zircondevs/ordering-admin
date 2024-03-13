import { useEffect,  } from "react";


import { io } from "socket.io-client";
import { AUTH_BASE_URL } from "../../constants/urls";
import { UseContext } from "../../state/provider";
import { useGetOrders } from "../useOrders";



 



export const useSocket = () => {

	const { setRealTimeOrder, setRealTimeOrders, state: { storeId}} = UseContext();
	const { orders  , loading ,  } = useGetOrders( "PROCESSING");

	const socket = io(`${AUTH_BASE_URL}`);

	

	const onNewOrders = (res: {[e: string]: object}) => {
		setRealTimeOrder(res);
		console.log("new order", res);
	};


 
	
	// clientId or storeId
	const handleJoinRoom = ( storeId:  string) => {
		socket.emit("join-room", {room: storeId});
		console.log("JOINING_ROOM", storeId);
	};

 
 
	


	useEffect(() => {
		orders && setRealTimeOrders(orders || []);
	}, [orders, storeId]);



	useEffect(() => {
		socket.on("connect", () => {
			// console.log("Connected with id ", socket.id );
		});
		return () => {
			socket.off("data", onNewOrders); 
			socket.on("disconnect", () => {
				socket.removeAllListeners();
			});
		};
	}, []);

	
  
	return {    handleJoinRoom , loadingOrders: loading };
};