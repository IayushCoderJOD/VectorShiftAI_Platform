import React from "react";

export const SubmitButton = ({ nodes, edges }) => {
    console.log(nodes, edges)
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      alert(
        `Pipeline Analysis:\n` +
          `Number of Nodes: ${data.num_nodes}\n` +
          `Number of Edges: ${data.num_edges}\n` +
          `Is Directed Acyclic Graph (DAG)?: ${data.is_dag ? "Yes" : "No"}`
    );
    } catch (error) {
      alert(`Failed to submit pipeline: ${error.message}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "1.2%",
        backgroundColor: "#1d0c4a",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
