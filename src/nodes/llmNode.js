// llmNode.js

import { Handle, Position } from "reactflow";
import Common from "./Common";

export const LLMNode = ({ id, data }) => {
  return (
    <Common
      handleIdName={"response"}
      nodetype={"LLM"}
      data={data}
      id={id}
      isInput={false}
    >
      <span>This is a LLM.</span>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />

      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </Common>
  );
};
