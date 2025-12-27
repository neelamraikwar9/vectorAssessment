import React, { useState } from "react";
import Common from "./Common";

export const Note = ({ id, data }) => {
  console.log(data, "kdjkld");
  const [note, setNote] = useState(data?.note || "");

  return (
    <>
      <Common
        nodetype={"Note"}
        id={id}
        data={data}
        textarea={note}
        setTextarea={setNote}
        istextarea={true}
        placeholder={"add note..."}
      />
      {/* <textarea onChange={(t) => setNote(t)} placeholder="Write Note">
          {note}
        </textarea>
      </Common> */}
    </>
  );
};
