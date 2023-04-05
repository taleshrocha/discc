import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";
import Head from "next/head";

import "reactflow/dist/base.css";
import "@/styles/globals.css";

import CustomNode from "@/components/CustomNode";
import { disciplines } from "@/disciplines.js"

const nodeTypes = {
  custom: CustomNode,
};


let initNodes = [];
let x, y;
x = y = 0;

for (let id = 0; id < disciplines.length; id++) {
  if (disciplines[id].code == "DIM0127") {
    x = 0
    y = 300
  }
  else if(disciplines[id].code == "DIM0128"){
    x = 0
    y = 600
  }
  initNodes.push({
    id: id.toString(),
    type: "custom",
    data: disciplines[id],
    position: { x: x, y: y },
  });
  x += 200;
}

const initEdges = [
  {
    id: "e0-5",
    source: "0",
    target: "5",
    type: "step"
  },
  {
    id: "e0-6",
    source: "0",
    target: "6",
    type: "step"
  },
  {
    id: "e0-7",
    source: "0",
    target: "7",
    type: "step"
  },
  {
    id: "e0-8",
    source: "0",
    target: "8",
    type: "step"
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <>
      <Head>
        <title>Discc | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-teal-50"
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </main>
    </>
  );
};

export default Flow;
