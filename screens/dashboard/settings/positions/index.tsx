/* eslint-disable max-lines */

import React    from "react";
import { Bold, Flex, Table,   } from "../../../../components";
import {   HeaderSTyles,   Main,  } from "./styles";
import {  GeneralTableStyle } from "../../../../components/styles";
import { useGetAdminRoles,   } from "../../../../hooks/useSettigs";
import { GenericObjTypes } from "../../../../constants/types";
import { LoaderIcon } from "../../../../public/assets/svg";
import { MakeOnlyFirstLettersCapital } from "../../../../lib";





const Positions = () => {

	const { roles, loading } = useGetAdminRoles();
 
 
	const tableHead = ["Role Name", "number of users"];
	const tableBody = roles?.map((role: GenericObjTypes) => (
		{
			name: MakeOnlyFirstLettersCapital(role?.roleName) || "N/A",
			count:  role?.users || 0,
		}
	));
 
	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Available Roles
				</Bold>
			</HeaderSTyles>

			{
				loading ?
					<Flex><LoaderIcon height="40" width="40"/></Flex>
					:
					<GeneralTableStyle height="auto" justifyContent="flex-start">
						<Table
							gap={"0"}
							headBgColor="common.transparent"
							bodyColor="Black.80"
							headColor="Black.60"
							tableHead={tableHead}
							tableBodys={tableBody}
						/>
					</GeneralTableStyle>
			}


		</Main>
	);
};
export default Positions;
 
 