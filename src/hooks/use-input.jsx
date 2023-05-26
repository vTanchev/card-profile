import { useState } from "react";

const useInput = (defaultValue) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const enteredValueOnChange = (e) => {
    setEnteredValue(e.target.value);
  };

  return {
    value: enteredValue,
    setEnteredValue,
    enteredValueOnChange,
  };
};

export default useInput;
