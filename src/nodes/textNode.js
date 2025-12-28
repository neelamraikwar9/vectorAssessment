// textNode.js

import { useState, useRef } from "react";
import { Handle, Position } from "reactflow";
import Common from "./Common";

export const TextNode = ({ id, data }) => {
  const [rows, setRows] = useState(1);
  const textareaRef = useRef(null);

  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  // const [isValidVariable, setisValidVariable] = useState(extractValidVariables(currText));
  const [ValidVariables, setValidVariables] = useState([]);
  console.log(ValidVariables, "ValidVariables");

  // const handleTextChange = (e) => {
  //   setCurrText(e.target.value);
  // };

  const handleTextChange = (e) => {
    console.log(textareaRef, "ifouofiejowe9", e);
    const textarea = e.target;

    const newRows = Math.ceil(textarea?.scrollHeight / 24); // 24px per row
    setRows(newRows);
    console.log(textarea.style.height, "fppofjowiej", textarea);

    textarea.style.height = "auto";

    textarea.style.height = textarea?.scrollHeight + "px";

    setCurrText(textarea.value);

    setCurrText(e.target.value);
    const validvariable = extractValidVariables(e.target.value);
  };

  function extractValidVariables(currText) {
    const curlybracketRegex = /\{\{\s*(.*?)\s*\}\}/; // for checking double curly bracies {};
    const jsIdentifierRegex = /^[A-Za-z_$][A-Za-z0-9_$]*$/; // for checking valid JavaScript variable;

    console.log(ValidVariables, "jkfjkfdjklfd");

    const match = currText?.match(curlybracketRegex);
    const variableName = match?.[1];
    console.log(variableName, "variableNamedfefeee", match);

    if (!match) {
      return false;
    }

    if (jsIdentifierRegex?.test(variableName)) {
      console.log(currText, "validjs");
      setValidVariables([variableName]);

      return true;
    } else {
      return false;
    }
  }

  return (
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
        rows={rows}
        ref={textareaRef}
      >
        <Handle
          // type="source"
          type="target"
          position={Position.Left}
          id={`${id}-output`}
        />
      </Common>
    </div>
  );
};
