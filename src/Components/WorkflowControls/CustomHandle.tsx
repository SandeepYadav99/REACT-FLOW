
import { Handle, HandleProps } from 'reactflow'
import styles from "./Styles.module.css";
const CustomHandle = (props:HandleProps) => {
  return (
   <Handle className={styles.handle} {...props}/>
  )
}

export default CustomHandle