import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import ReactCountryFlag from "react-country-flag";
import styles from "./Styles.module.css";
const PaymentCountry = ({
  data: { country, countryCode, currency },
}: NodeProps<{ country: string; countryCode: string; currency: string }>) => {
  return (
    <div className={styles.countryFlag}>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
      />
      <div>
        {country}
        <br />
        {currency}
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default PaymentCountry;
