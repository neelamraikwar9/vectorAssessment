import React, { useState } from "react";
import Common from "./Common";

export const Comment = ({ id, data }) => {
  console.log(data, "kdjkld");
  const [comment, setComment] = useState(data?.comment || "");

  return (
    <>
      <Common
        nodetype={"Comment"}
        id={id}
        data={data}
        textarea={comment}
        setTextarea={setComment}
        istextarea={true}
        placeholder={"write your comment"}
      />
    </>
  );
};
