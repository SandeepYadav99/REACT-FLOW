import React, { useCallback } from "react";
import styles from "./Styles.module.css";
import DUMMY_NODES from "../../DummyNode/DUMMY_NODES";
import { useReactFlow } from "reactflow";

const PaymentSelectFiled = () => {
  const { setNodes } = useReactFlow();
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const eventValue = event.target.value;
    const location = Math.random() * 500;
    const selectedNode= DUMMY_NODES.find((node) => node.code === eventValue);
    const { value, code } = selectedNode;

    setNodes((prevNodes) => {
     
      const isDuplicate = prevNodes.some((node) => node.data.code === code);
      if (isDuplicate) {
        return prevNodes; 
      }
      return [
        ...prevNodes,
        {
          id: `${prevNodes.length}+1`,
          data: { code: code, name: value },
          type: "paymentProvider",
          position: { x: location, y: location },
        },
      ];
    });
  };

  const dropdownFiled = useCallback(() => {
    return DUMMY_NODES?.map((dum) => {
      return (
        <option value={dum.code} key={dum.code} className={styles.options}>
          {dum.value}
        </option>
      );
    });
  }, []);
  return (
    <div className={styles.dropdown}>
      <div className="formFlex">
        <div className="formGroup">
          <div className={styles.form}>
            <select onChange={handleSelectChange} >
              <option className={styles.paymentDefault}>Add Payment Provider</option>
              {dropdownFiled()}</select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSelectFiled;
