import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

const centerX = 300; // X-coordinate of the center
const centerY = 300; // Y-coordinate of the center
const radius = 200; // Radius of the circle

// Function to calculate the position of each node in a circular path
const calculateNodePosition = (index, totalNodes) => {
  const angle = (index / totalNodes) * 2 * Math.PI; // Angle in radians
  const x = centerX + radius * Math.cos(angle); // X-coordinate
  const y = centerY + radius * Math.sin(angle); // Y-coordinate
  return { x, y };
};

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: calculateNodePosition(0, 5),
  },
  {
    id: "2",
    data: { label: "Step 1" },
    position: calculateNodePosition(1, 5),
  },
  {
    id: "3",
    data: { label: "Step 2" },
    position: calculateNodePosition(2, 5),
  },
  {
    id: "4",
    data: { label: "Step 3" },
    position: calculateNodePosition(3, 5),
  },
  {
    id: "5",
    type: "output",
    data: { label: "End" },
    position: calculateNodePosition(4, 5),
  },
];

const initialEdges = [
  {
id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e5-1",
    source: "5",
    target: "1",
    markerEnd: { type: MarkerType.ArrowClosed },
  }, // Connect the last to the first for a circular flow
];

function FlowchartApp() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

 return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "600px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        />
        <Controls />
      </div>
    </ReactFlowProvider>
  );
}

export default FlowchartApp;
