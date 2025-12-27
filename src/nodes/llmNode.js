// llmNode.js

import { Handle, Position } from "reactflow";
import Common from "./Common";

export const LLMNode = ({ id, data }) => {
  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    // <div>
    // <Common handleIdName = {"response"} nodetype={"LLM"} data={data} id={id} isInput={false}/>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-system`}
    //     style={{top: `${100/3}%`}}
    //   />
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-prompt`}
    //     style={{top: `${200/3}%`}}
    //   />
    //   <div>
    //     {/* <span>LLM</span> */}
    //   </div>
    //   <div>
    //     <span>This is a LLM.</span>
    //   </div>
    //   {/* <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-response`}
    //   /> */}
    // </div>
    <Common
      handleIdName={"response"}
      nodetype={"LLM"}
      data={data}
      id={id}
      isInput={false}
    >
      <span>This is a LLM.</span>
    </Common>
  );
};
