import { Handle, NodeProps, Position, useReactFlow } from "reactflow";

import styles from "./Styles.module.css";
import { useCallback } from "react";
const PaymentProvider = ({
  data: { name },
  id,
}: NodeProps<{ code: string; name: string }>) => {
  const { setNodes } = useReactFlow();

  const deleteNodeHandler = useCallback(() => {
    return setNodes((prev) =>
      prev.filter((singleNode) => singleNode.id !== id)
    );
  },[id, setNodes]);
  
  return (
    <div className={styles.countryProvider}>
      <div className={styles.name}>{name}</div>
      <button onClick={() => deleteNodeHandler()}>X</button>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentProvider;
