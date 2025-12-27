import React, { useState } from "react";
import Common from "./Common";

export const Label = ({ id, data }) => {
  console.log(data, "kdjkld");
  const [label, setLabel] = useState(data?.label || "");

   const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <Common
        nodetype={"Label"}
        id={id}
        data={data}
        isInput={true}
        inputLabel={"Enter Label"}
        currName={label}
        setCurrName={setLabel}
      />
      {/* <textarea onChange={(t) => setLabel(t)} placeholder="Add a Label">
          {label}
        </textarea>
      </Common> */}
    </>
  );
};
