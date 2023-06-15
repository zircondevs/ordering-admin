

import React  from "react";
import { Wrapper } from "./styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
 
 
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface PropType {
	initialValue: string;
	handleOnChange: React.Dispatch<React.SetStateAction<string>>
}

const EditorContainer  = ({ initialValue, handleOnChange }: PropType) => {

 
 
 
	return (
		<Wrapper className="editor">
			<ReactQuill theme="snow" value={initialValue} onChange={handleOnChange} />
		</Wrapper>
	);
   
};

export default EditorContainer;