import { Flex, Span } from "..";
import React from "react";
import { TransactionStatusType } from "../../constants/types";



const Status = ({status}: { status: string}) => {

	const StatusColors = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
		initiated: ["Yellow.20", "Yellow.default" ],
	};
 


	return (
		<Flex bgColor={ Object.keys(StatusColors)?.includes(status) ? StatusColors?.[status as TransactionStatusType][0] : "Grey.5"} width="max-content" pad="3px 8px" margin="0">
			<Span fontFamily='regular' weight="400" lineHeight="19" size="12" colour={ Object.keys(StatusColors)?.includes( status) ?  StatusColors?.[status as TransactionStatusType][1] : "Grey.2"}>
				{ status}
			</Span>
		</Flex>
	);
};

export default Status;