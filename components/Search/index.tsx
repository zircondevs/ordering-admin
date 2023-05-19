
import { SearchContainer } from "./styles";

import {   SearchIcon } from "../../public/assets/svg";
import React  from "react";



const Search = ({placeholder}: {placeholder?: string}) => {
  
    
	return (
		<SearchContainer width='auto' height='auto'>
			<SearchIcon colour='Black.60' width='12' height='12' />
			<input placeholder={placeholder || "Search"} />
		</SearchContainer>
	);
};
 
export default Search;