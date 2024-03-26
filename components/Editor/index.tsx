

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
			<ReactQuill theme="snow" placeholder="Enter a message..." value={initialValue} onChange={e => e === "<p><br></p>" ? handleOnChange("") : handleOnChange(e)} />
		</Wrapper>
	);
   
};

export default EditorContainer;