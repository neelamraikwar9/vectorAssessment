// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import Common from "./Common";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
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
