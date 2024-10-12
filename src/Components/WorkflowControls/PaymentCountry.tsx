
import {  NodeProps, Position } from "reactflow";
import ReactCountryFlag from "react-country-flag";
import styles from "./Styles.module.css";
import CustomHandle from "./CustomHandle";
import { memo } from "react";
const PaymentCountry = memo(({
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
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
      <CustomHandle type="target" position={Position.Bottom} />
    </div>
  );
});

export default PaymentCountry;
