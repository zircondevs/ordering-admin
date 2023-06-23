/* eslint-disable no-unused-vars */

import { SearchContainer } from "./styles";

import {   SearchIcon } from "../../public/assets/svg";
import React  from "react";



const Search = ({placeholder, onChange = () => []}: {placeholder?: string, onChange?: (e: string) => any}) => {
  
    
	return (
		<SearchContainer width='auto' height='auto'>
			<SearchIcon colour='Grey.2' width='12' height='12' />
			<input placeholder={placeholder || "Search" } onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}/>
		</SearchContainer>
	);
};
 
export default Search;