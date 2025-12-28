import React, { useState } from "react";
import Common from "./Common";

export const Filter = ({ id, data }) => {
  return (
    <div>
      <Common
        nodetype={"Filter"}
        id={id}
        data={data}
        dropdowntype={[
          "Has word",
          "Starts from",
          "Ends with",
          "Text is longer than",
        ]}
        isType={true}
      />
    </div>
  );
};
