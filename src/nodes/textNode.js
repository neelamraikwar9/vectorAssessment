// textNode.js

import { useState, useRef } from "react";
import { Handle, Position } from "reactflow";
import Common from "./Common";



export const TextNode = ({ id, data }) => {


  const [rows, setRows] = useState(1);
  const textareaRef = useRef(null);
 



  const [currText, setCurrText] = useState(data?.text || "{{input}}");



  // const handleTextChange = (e) => {
  //   setCurrText(e.target.value);
  // };



   const handleTextChange = (e) => {
    console.log(textareaRef,'ifouofiejowe9', e)
    const textarea = e.target;
    // textarea.rows = 1;
    const newRows = Math.ceil(textarea?.scrollHeight / 24); // 24px per row
      setRows(newRows);
  //  const textarea = textareaRef?.current;
//   setRows((prev) => e?.target?.value?.length > 5 ? prev + 1 : prev
// );
  //  textarea?.rows = 1; 
//  if (textarea?.scrollHeight > textarea?.clientHeight) {
//     setRows(prev => prev + 1);
//   }
    setCurrText(e.target.value);

  };



  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>

    <div>
      <Common
        handleIdName={"output"}
        nodetype={"Text"}
        data={data}
        id={id}
        isInput={true}
        inputLabel={"Text"}
        currName={currText}
        setCurrName={setCurrText}
        handleChangeFn={handleTextChange}
        rows = {rows}
        ref={textareaRef}

        // isInput={false}
      />
      {/* <div>
        <span>Text</span>
      </div> */}
      {/* <div>
        <label>
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div> */}
      {/* <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      /> */}
    </div>
  );
};
