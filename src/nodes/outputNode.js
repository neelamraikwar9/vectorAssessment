// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import Common from "./Common";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id?.replace("customOutput-", "output_")
  );

  console.log(currName, "dfdlfkdfklj");

  return (
    <>
      <Common
        nodetype={"Output"}
        dropdowntype={["Text", "Image"]}
        data={data}
        id={id}
        isInput={true}
        inputLabel={"Name"}
        isType={true}
        currName={currName}
        setCurrName={setCurrName}
        // handleType={"target"}
      >
        <Handle type="target" position={Position.Left} id={`${id}-value`} />
      </Common>
    </>
  );
};
