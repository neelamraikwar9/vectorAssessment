// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

import Common from "./Common";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  // const handleNameChange = (e) => {
  //   setCurrName(e.target.value);
  // };

  // const handleTypeChange = (e) => {
  //   setInputType(e.target.value);
  // };

  return (
    <>
      <Common
        nodetype={"Input"}
        dropdowntype={["Text", "File"]}
        data={data}
        id={id}
        handleIdName={"value"}
        isInput={true}
        inputLabel={"Name"}
        isType={true}
        currName={currName}
        setCurrName={setCurrName}
        handleType={"source"}
      />
    </>
  );
};
