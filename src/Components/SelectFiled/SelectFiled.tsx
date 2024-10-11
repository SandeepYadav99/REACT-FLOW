import React, { FC, ReactNode } from "react";
import styles from "./Styles.module.css";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  touched: boolean;
  errors: string;
  children: ReactNode;
}
const SelectFiled: FC<SelectProps> = ({
  label,
  id,
  touched,
  errors,

  children,
  ...props
}) => {
  return (
    <div className={styles.form}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        {...props}
        className={errors && touched ? styles["input-error"] : undefined}
      >
        {children}
      </select>
    </div>
  );
};

export default SelectFiled;
