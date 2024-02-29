import { useEffect, useState } from "react";
import { objIsEmpty } from "../lib";




export const useCACHE = (data: {data: {[e: string]: any }}, isValidating: boolean, ) => {
	const [CACHE, setCACHE] = useState<{[e: string]: any }>([]);
	const [ready, setReady] = useState(false);


	useEffect(() => {
		setReady(true);
		if(ready && data && !objIsEmpty(data)){
			setCACHE(data);
		}
	}, [ready, data, isValidating ]);

 

	return { CACHE };
};

 