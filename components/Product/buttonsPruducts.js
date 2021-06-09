import React, {useState} from "react";

import classes from "./buttonsPruducts.module.scss";

const ButtonsPruducts = () => {

    const [value, setVaule] = useState(1);

  return (
    <div className={`${classes.border} row mx-auto`}>
      <div 
      className={`${classes.number} col-3 mx-auto`}
      onClick={() => setVaule(value -1 )}
      >-</div>
      <div className={`${classes.value} col-3 mx-auto`}>
        {value}
      </div>
      <div 
      className={`${classes.number} col-3 mx-auto`}
      onClick={() => setVaule(value + 1)}
      >+</div>
    </div>
  );
};

export default ButtonsPruducts;
