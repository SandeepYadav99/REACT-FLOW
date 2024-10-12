import {  NodeProps, Position } from "reactflow";
import styles from "./Styles.module.css";
import CustomHandle from "./CustomHandle";
const PaymentInit = ({ data: { amount } }: NodeProps<{ amount: number }>) => {
  return (
    <div className={styles.paymentInitContainer}>
      <div className={styles.paymentInit}>Payment Initialize</div>
      <div className={styles.amount}>${amount}</div>
      <CustomHandle type="source" position={Position.Right}/>
    </div>
  );
};

export default PaymentInit;
