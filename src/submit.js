// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  console.log(nodes, "nodes");
  const edges = useStore((state) => state.edges);
  console.log(edges, "edges");

  const submitData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });
      console.log(JSON.stringify(response), "fowiejfoweifj", response);

      const result = await response.json();
      console.log(result, "fjsoifjweoioife");

      const isdag = result?.is_dag ? "" : "not";
      console.log(isdag, "isgdkf");
      alert(
        `You have ${result?.num_nodes} nodes and ${result.num_edges} edges and it is ${isdag} a directed acyclic graph.`
      );
    } catch (error) {
      alert("Failed to submit pipeline");
      console.log(error, "fwelifjowei");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button className="btnstyl" type="submit" onClick={() => submitData()}>
        Submit
      </button>
    </div>
  );
};
