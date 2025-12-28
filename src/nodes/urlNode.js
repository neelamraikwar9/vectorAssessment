import React, { useState } from "react";
import Common from "./Common";

export const UrlNode = ({ id, data }) => {
  console.log(data, "kdjkld");
  const [url, setUrl] = useState(data?.url || "Enter url");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <>
      <Common
        nodetype={"URL Input"}
        id={id}
        isInput={true}
        inputLabel={"url"}
        currName={url}
        setCurrName={setUrl}
      />
    </>
  );
};
