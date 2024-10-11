import { useState } from "react";
import SelectFiled from "./Components/SelectFiled/SelectFiled";
import DUMMY_NODES from "./DummyNode/DUMMY_NODES";
import styles from "./Styles.module.css";

const App = () => {
   const [selectOptions, setSelectOptions] = useState<string[]>([]);
   
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const eventValue = event.target.value;
    if(!eventValue) return;
    if(!selectOptions.includes(eventValue)){
      setSelectOptions([...selectOptions, eventValue]);
    }

  };
console.log(selectOptions);
  return (
    <div className={styles.dropdown}> 
      <div className="formFlex">
        <div className="formGroup">
          
          <SelectFiled
            label={"Select an options "}
            onChange={handleSelectChange}
          >
          
            {DUMMY_NODES?.map((dum) => {
              return (
                <option value={dum.name} key={dum.name}>
                  {dum.value}
                </option>
              );
            })}
          </SelectFiled>
        </div>
      </div>
    </div>
  );
};

export default App;
