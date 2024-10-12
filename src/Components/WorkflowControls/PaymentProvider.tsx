
import {  NodeProps, Position, useReactFlow } from "reactflow";

import styles from "./Styles.module.css";
import { useCallback } from "react";
import CustomHandle from "./CustomHandle";
import Am from "../../assets/Am.png";
import Ap from "../../assets/Ap.png";
import Gp from "../../assets/Gp.png";
import St from "../../assets/St.png";
import Pp from "../../assets/Pp.png";
const PaymentProvider = ({
  data: { name, code },
  id,
}: NodeProps<{ code: string; name: string }>) => {
  const payCode: Record<string, string>={
    Am:Am,
    Ap:Ap,
    Gp:Gp,
    St:St,
    Pp:Pp
  }
  const { setNodes } = useReactFlow();

  const deleteNodeHandler = useCallback(() => {
    return setNodes((prev) =>
      prev.filter((singleNode) => singleNode.id !== id)
    );
  },[id, setNodes]);
  
  return (
    <div className={styles.countryProvider}>
      <div className={styles.name}><img src={payCode[code]} alt={`${name} logo`} width={20} height={20}/>{name}</div>
      <button onClick={() => deleteNodeHandler()}>X</button>
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentProvider;
