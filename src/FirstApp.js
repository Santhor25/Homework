import { useState } from "react";

const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value = 0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value); // vuelve al valor inicial recibido por props
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <br />
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default FirstApp;
