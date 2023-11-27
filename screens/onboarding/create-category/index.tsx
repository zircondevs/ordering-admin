/* eslint-disable max-lines */



import React  from "react";
import {   Grid,  Input  } from "../../../components";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel,       } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../../hooks/colors";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useCreateCategory } from "../../../hooks/useCategory";




export const AddStoreSchema = Yup.object().shape({
	category: Yup.string().required("Category is required"),
});
 


const CreateCategory = ( {onDone}: {onDone: () => void}) => {

	

	const { handleCreateCategory, loading} = useCreateCategory();

	
	
	return (
		<Formik
			enableReinitialize
			validationSchema={AddStoreSchema}
			initialValues={{
				category:   "" ,
			}} 
			onSubmit={ async (values , actions) => { 
				const res =  await handleCreateCategory({name: values.category});
				if(res?.data) {  
					actions.resetForm();
					onDone && onDone();
				}
			}}
		>
			{({handleChange, errors, values, }) => {

				return (
					<Form>
						<Grid gap="32px">	



					

							<GeneralInputWrap margin="8px 0 0">
								<GeneralLabel> Add a category name</GeneralLabel>
								<Input
									value={values.category}
									name="category" 
									type={"text"} 
									handleChange={handleChange}
									borderCol={"Grey.5"}
									activeBorderCol={"Blue.base.default"}
									placeholder="Enter a category"
									borderRadius="8px"
								/>
								<GeneralErrorContainer>
									{errors.category?.toString()}
								</GeneralErrorContainer>
							</GeneralInputWrap>


						</Grid>

						<div className="submit-btn">
							<CustomButton
								size="14"
								bgColour={TERTIARY_COLOR[2]}
								bodColour={TERTIARY_COLOR[2]}
								txtColour={WHITE_COLOR}
								fullwidth
								type="submit"
								borderRadius="0"
								isLoading={loading  }
								text={ "Create category"}
							/>
						</div>
					</Form>
				);
			}
				
			}
		</Formik>
	);
};
export default CreateCategory;
 