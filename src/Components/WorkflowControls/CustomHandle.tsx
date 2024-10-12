
import { Handle, HandleProps } from 'reactflow'
import styles from "./Styles.module.css";
import { memo } from 'react';
const CustomHandle = memo((props:HandleProps) => {
  return (
   <Handle className={styles.handle} {...props}/>
  )
})

export default CustomHandle