 

import React, { useEffect, useState }   from "react";
import CreateStore from "./create-store";
import { ModalSpacer } from "../../components/styles";
import { Main, SkipStyles } from "./styles";
import { Bold, Flex, Span } from "../../components";
import { Spacer } from "../../components/Spacer";
import { LoaderIcon, MultiStoresIcon, ProductIcon } from "../../public/assets/svg";
import CreateProduct from "./create-product";
import { useRouter } from "next/router";
import { UseContext } from "../../state/provider";
import { useGetStores } from "../../hooks/useStores";
import { STORAGE } from "../../applications/storage";
import Constant from "../../constants";
import CreateCategory from "./create-category";
import { useGetCategories } from "../../hooks/useCategory";



 

const OnBoarding = () => {
	const [step, setStep] = useState(1);
	const {push} = useRouter();
	const {  setStoreId, } = UseContext();

	const { stores , loading, mutate  } = useGetStores();
	const { categories, mutate: muategetCategory } =  useGetCategories();


	useEffect(() => {
		stores?.data?.[0]?._id && setStoreId(stores?.data?.[0]?._id );
	}, [stores?.data?.[0]?._id ]);

 

	
	const Steps = {
		1: (
			<>
				<Flex height="auto"   margin="0 0 40px" direction="column"  >
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.3"}>
						Step {step}
					</Span>
					<Spacer height="16px"/>

					<MultiStoresIcon height="50" width="50"/>
					<Spacer height="16px"/>
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.3"}>
						Welcome To Order
					</Span>
					<Spacer height="8px"/>
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="28" size="24" colour={"Black.default"}>
						Set Up Your Store
					</Bold>
				</Flex>

				<CreateStore 
					onDone={() => {
						setStep(2);
						mutate();
					}}
				/>
			</>
		),
		2: (
			<>
				<Flex height="auto"   margin="0 0 40px" direction="column"  >
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.3"}>
						Step {step}
					</Span>
					<Spacer height="16px"/>

					<ProductIcon height="50" width="50"/>
					<Spacer height="16px"/>
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="28" size="24" colour={"Black.default"} center>
						What kind of product do you intent to sell
					</Bold>
				</Flex>
				{
					loading ?  <Flex><LoaderIcon /></Flex> 
						: <CreateCategory 
							onDone={() => {
								setStep(3);
								muategetCategory();
							}} 
						/>
				}
			</>
		),
		3: (
			<>
				<Flex height="auto"   margin="0 0 40px" direction="column"  >
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.3"}>
						Step {step}
					</Span>
					<Spacer height="16px"/>

					<ProductIcon height="50" width="50"/>
					<Spacer height="16px"/>
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="28" size="24" colour={"Black.default"}>
						Add Your First Product
					</Bold>
				</Flex>
				{
					loading ? 
						<Flex><LoaderIcon /></Flex>
						:
						<CreateProduct onDone={() => push("/")} categories={categories}/>
				}
			</>
		)
	};
	return (
		<div>
			<Main>
				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="40px 0">

					<SkipStyles fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Error.default"}
						onClick={() => {
							push("/");
							STORAGE.DELETE(Constant.keys.newUser); 
						}} 
					>
						Skip
					</SkipStyles>
			
					{Steps[step as 1 | 2]}
				</ModalSpacer>
			</Main>

		</div>
	);
};
export default OnBoarding;
 