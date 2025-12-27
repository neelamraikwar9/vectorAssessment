import React, { useState } from "react";
import Common from "./Common";

export const Comment = ({ id, data }) => {
  console.log(data, "kdjkld");
  const [comment, setComment] = useState(data?.comment || "");

  //   const handleCommentChange = () => {
  //     setComment(e.target.value);
  //   }

  return (
    <>
      <Common
        nodetype={"Comment"}
        id={id}
        data={data}
        textarea={comment}
        setTextarea={setComment}
        istextarea={true}
      />
      {/* <textarea onChange={(t) => setComment(t)} placeholder="Your Comment">
          {comment}
        </textarea> */}
      {/* </Common> */}
    </>
  );
};
