import React, { useState } from "react";
import Common from "./Common";

export const Filter = ({ id, data }) => {
  // const [filter, setFilter] = useState(data?.filter || "select option");

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
