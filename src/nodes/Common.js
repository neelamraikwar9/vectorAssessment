// import React from 'react'
import './node.css';
import { Handle, Position } from "reactflow";
import { useState } from "react";

const Common = (props) => {
  const {
    nodetype,
    data = {},
    id = "",
    dropdowntype = [],
    handleIdName = "",
    isInput = false,
    isType = false,
    children = null,
    inputLabel = {},
    currName = "",
    setCurrName = () => {},

    placeholder = "",
    textarea = "",
    setTextarea = () => {},
    istextarea = false,
  } = props;
  console.log(children, "jfowifjoweifow", children?.props?.children);

  // const [currName, setCurrName] = useState(
  //   data?.inputName || id.replace("customInput-", "input_")
  // );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handleCommentChange = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <div className="container">
      <div className="nodeType">
        <strong><span>{nodetype}</span></strong>
      </div>
      
      {isInput && (
        <div>
          <label>
            <p className="label">{inputLabel}:</p>
            {/* <input type="text" value={currName} onChange={handleNameChange} /> */}
            <textarea type="text" value={currName} onChange={handleNameChange}></textarea>

          </label>
        </div>
      )}

      {isType && (
        <label>
          <p className="labelstyl">Type:</p> 
          <select value={inputType} onChange={handleTypeChange} className="txtarea">
            {dropdowntype?.map((drop) => {
              console.log(drop, "fuiukiukiu");

              return <option key={drop} value={drop}>{drop}</option>;
            })}
          </select>
        </label>
      )}

      {istextarea && (
        <textarea
          value={textarea}
          onChange={handleCommentChange}
          placeholder={placeholder}
        ></textarea>
      )}

      <div>{children}</div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-${handleIdName}`}
      />
    </div>
  );
};

export default Common;
