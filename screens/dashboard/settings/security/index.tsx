 
import React    from "react";
import { Bold, Input,   } from "../../../../components";
import {      FormStyles, HeaderSTyles,   Main,  } from "./styles";
 
import CustomButton from "../../../../components/Button";
import { GeneralInputWrap, GeneralLabel } from "../../../../components/styles";





const Security = () => {
	

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Update Security Information
				</Bold>
			</HeaderSTyles>

 
 

			<FormStyles gap="32px">
				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>  Old password</GeneralLabel>
					<Input
						value={""}
						name="password" 
						type={"password"} 
						handleChange={(e) => console.log(e)}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>  New password</GeneralLabel>
					<Input
						value={""}
						name="password" 
						type={"password"} 
						handleChange={(e) => console.log(e)}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>  Confirm password</GeneralLabel>
					<Input
						value={""}
						name="password" 
						type={"password"} 
						handleChange={(e) => console.log(e)}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

 

				<CustomButton
					size="14"
					activeColor={"Grey.1"}
					type="submit"
					nonActiveBgColor="Black.20"
					borderRadius="8"
					text={"Update" }
				/>
			</FormStyles>
 
		</Main>
	);
};
export default Security;
 
 