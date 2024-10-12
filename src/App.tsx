import { useCallback } from "react";
import styles from "./Styles.module.css";

import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import PaymentInit from "./Components/WorkflowControls/PaymentInit";
import {
  initialEdges,
  initialNodes,
} from "./Components/WorkflowControls/WorkflowControls";
import PaymentCountry from "./Components/WorkflowControls/PaymentCountry";
import PaymentProvider from "./Components/WorkflowControls/PaymentProvider";
import PaymentSelectFiled from "./Components/WorkflowControls/PaymentSelectFiled";
import CustomEdge from "./Components/WorkflowControls/CustomEdge";
import 'reactflow/dist/style.css';
const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCounter: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentSelectProvider: PaymentSelectFiled,
};

const edgeTypes={
  custom:CustomEdge
}
const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => {
      const edge = { ...params, animated: true, id: `${edges.length} + 1` , type:"custom"};
      setEdges((prev) => addEdge(edge, prev));
    },
    [edges.length, setEdges]
  );
  return (
    <>
      <div className={styles.flowContainer}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </>
  );
};

export default App;
