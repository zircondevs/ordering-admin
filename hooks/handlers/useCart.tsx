import { GenericObjTypes } from "../../constants/types";
import { UseContext } from "../../state/provider";



export const useCart = (  ) => {
	const {setAddToCarts, setRemoveFromCarts , state: { carts,   }} = UseContext();


	
	const handleAddToCart = (pack: number, food: GenericObjTypes) => {
		setAddToCarts({pack, cart: food});
	};

	const handleRemoveFrom = (pack: number, food: GenericObjTypes) => {
		setRemoveFromCarts({pack, cart: food});
	};
	const isInCart = (pack: number, food: GenericObjTypes) => carts[pack]?.find(cart => cart?.id === food?.id);

	return { handleAddToCart , handleRemoveFrom, isInCart  };
};



 